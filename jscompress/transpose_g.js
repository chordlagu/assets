document.addEventListener("DOMContentLoaded", function () {

  function renderChords() {
    $("#song_chords").html("");

    var chords = $("pre[data-key] span.c")
      .toArray()
      .map(el => el.textContent);

    chords = chords.filter(function (val, idx, self) {
      return self.indexOf(val) === idx;
    });

    var imgNames = chords
      .join(" ")
      .replace(/\+/g, "p")
      .replace(/\-/g, "z")
      .replace(/\#/g, "w")
      .replace(/\//g, "s")
      .split(" ");

    var html = "";
    chords.forEach(function (ch, i) {
      html +=
        '<img class="mobchords" alt="' + ch + '" width="41" height="72" ' +
        'src="https://cdn.chordlagu.id/chords/' + imgNames[i] + '.png" />';
    });

    console.log(html);
    $("#song_chords").append(html);
  }

  (function ($) {
    $.fn.transpose = function (options) {

      // Fungsi helper untuk menemukan akar kord
      function findChordRoot(chord) {
        if (!chord) return null;
        var sharpFlat = (chord.length > 1 && (chord.charAt(1) === '#' || chord.charAt(1) === 'b'));
        return sharpFlat ? chord.substring(0, 2) : chord.substring(0, 1);
      }

      // Fungsi untuk menemukan data kord berdasarkan nama
      function findChordData(name) {
        return chordsList.find(c => c.name === name);
      }

      var settings = $.extend({}, $.fn.transpose.defaults, options);
      var currentKeyChord = null;

      var chordsList = [
        { name: "A", value: 0 },
        { name: "A#", value: 1 },
        { name: "Bb", value: 1 },
        { name: "B", value: 2 },
        { name: "C", value: 3 },
        { name: "C#", value: 4 },
        { name: "Db", value: 4 },
        { name: "D", value: 5 },
        { name: "D#", value: 6 },
        { name: "Eb", value: 6 },
        { name: "E", value: 7 },
        { name: "F", value: 8 },
        { name: "F#", value: 9 },
        { name: "Gb", value: 9 },
        { name: "G", value: 10 },
        { name: "G#", value: 11 },
        { name: "Ab", value: 11 }
      ];

      var spacing = function (oldLen, newLen, textLen) {
        return oldLen < newLen ? textLen + (newLen - oldLen) : oldLen > newLen ? textLen - (oldLen - newLen) : textLen;
      };

      var repeatStr = function (char, times) {
        return new Array(times + 1).join(char);
      };

      return $(this).each(function () {
        var key = $(this).attr("data-key");
        if (!key || $.trim(key) === "") key = settings.key;
        if (!key || $.trim(key) === "") throw "Starting key not defined.";

        currentKeyChord = findChordData(findChordRoot(key));

        // Buat pilihan transpose key
        var keys = [];
        $(chordsList).each(function (i, chord) {
          if (chord.name === findChordRoot(key)) {
            keys.push("<a href='#' class='selected'>" + chord.name + "</a>");
          } else {
            keys.push("<a href='#'>" + chord.name + "</a>");
          }
        });

        var container = $("<div class='transpose-keys'></div>");
        container.html(keys.join(""));

        var that = $(this);

        $("a", container).click(function (e) {
          e.preventDefault();

          var selected = $(this).text();
          var newKeyChord = findChordData(selected);

          if (currentKeyChord.name !== newKeyChord.name) {
            var diff = (newKeyChord.value - currentKeyChord.value + 12) % 12;

            $("span.c", that).each(function (i, el) {
              var fullChord = $(el).text();
              var parts = fullChord.split('/');
              var root = findChordRoot(parts[0]);
              var suffix = parts[0].substring(root.length);
              var transRoot = null;

              // Transpose not akar
              var oldChordData = findChordData(root);
              if (oldChordData) {
                var newIndex = (oldChordData.value + diff + 12) % 12;

                // Pilih notasi enharmonik yang sesuai
                if (root.includes('#')) {
                  transRoot = chordsList.find(c => c.value === newIndex && c.name.includes('#')) || chordsList.find(c => c.value === newIndex);
                } else if (root.includes('b')) {
                  transRoot = chordsList.find(c => c.value === newIndex && c.name.includes('b')) || chordsList.find(c => c.value === newIndex);
                } else {
                  transRoot = chordsList.find(c => c.value === newIndex);
                }
              }

              if (transRoot) {
                var newFullChord = transRoot.name + suffix;

                // Transpose not bas jika ada
                if (parts.length > 1) {
                  var bassRoot = findChordRoot(parts[1]);
                  var oldBassData = findChordData(bassRoot);
                  if (oldBassData) {
                    var newBassIndex = (oldBassData.value + diff + 12) % 12;
                    var transBass = chordsList.find(c => c.value === newBassIndex);
                    if (transBass) {
                      newFullChord += '/' + transBass.name;
                    }
                  }
                }

                $(el).text(newFullChord);

                // Sesuaikan spasi
                var sibling = el.nextSibling;
                if (sibling && sibling.nodeType === 3 && sibling.nodeValue.length > 0 && sibling.nodeValue.charAt(0) !== "/") {
                  var spaceLen = spacing(fullChord.length, newFullChord.length, sibling.nodeValue.length);
                  sibling.nodeValue = repeatStr(" ", spaceLen);
                }
              }
            });

            currentKeyChord = newKeyChord;
          }

          $(".transpose-keys a").removeClass("selected");
          $(this).addClass("selected");
          renderChords();
          return false;
        });

        $(this).before(container);

        // Parsing teks menjadi span chord
        var lines = $(this).text().split(/\r\n|\n/g);
        var result = [];

        for (var i = 0; i < lines.length; i++) {
          (function () {
            var line = lines[i]
              .replace(/\../g, " ")
              .replace(/\â€“/g, " ")
              .replace(/\-/g, " ")
              .replace(/\(/g, " ")
              .replace(/\)/g, " ")
              .replace(/\b(x2|x3|x4|x5|x6|x7)\b/g, " ")
              .replace(/\*/g, " ")
              .replace(/\s+/g, " ")
              .split(" ");

            for (var j = 0; j < line.length; j++) {
              if (!$.trim(line[j]).length || line[j].match(settings.chordRegex)) {
                continue;
              }
              return 1;
            }
            return 0;
          })()
            ? result.push("<span>" + lines[i] + "</span>")
            : result.push("<span>" + lines[i].replace(settings.chordReplaceRegex, function (m, chord, suffix, slash) {
              if (chord) return "<span class='c' data-chord='" + chord + "'>" + chord + "</span>";
              if (slash) return "<span class='on'>/</span>";
            }) + "</span>");
        }

        $(this).html(result.join("\n"));
        renderChords();
      });
    };

    $.fn.transpose.defaults = {
      chordRegex: /^[A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*(\/[A-G][b\#]*)*$/,
      chordReplaceRegex: /([A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*)|([/])/g
    };

  })(jQuery);

});
