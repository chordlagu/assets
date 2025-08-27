document.addEventListener("DOMContentLoaded", function () {

  function renderChords() {
    $("#song_chords").html("");

    var chords = $("pre[data-key] span.c").toArray().map(el => el.textContent);
    chords = chords.filter((v, i, a) => a.indexOf(v) === i);

    var imgNames = chords
      .join(" ")
      .replace(/\+/g, "p")
      .replace(/\-/g, "z")
      .replace(/\#/g, "w")
      .replace(/\//g, "s")
      .split(" ");

    var html = "";
    chords.forEach(function (ch, i) {
      html += '<img class="mobchords" alt="' + ch + '" width="41" height="72" src="https://cdn.chordlagu.id/chords/' + imgNames[i] + '.png" />';
    });

    console.log(html);
    $("#song_chords").append(html);
  }

  (function ($) {
    $.fn.transpose = function (options) {

      function findChordName(note) {
        // jika ketemu "m" di akhir (mis. "Am"), buang dulu karena kita hanya butuh root
        if (note && note.charAt(note.length - 1) === "m") {
          note = note.substring(0, note.length - 1);
        }
        for (var i = 0; i < CHORDS.length; i++) {
          if (note === CHORDS[i].name) return CHORDS[i];
        }
      }

      var settings = $.extend({}, $.fn.transpose.defaults, options);
      var currentKey = null;

      var CHORDS = [
        { name: "Ab", value: 0, type: "F" },
        { name: "A",  value: 1, type: "N" },
        { name: "A#", value: 2, type: "S" },
        { name: "Bb", value: 2, type: "F" },
        { name: "B",  value: 3, type: "N" },
        { name: "C",  value: 4, type: "N" },
        { name: "C#", value: 5, type: "S" },
        { name: "Db", value: 5, type: "F" },
        { name: "D",  value: 6, type: "N" },
        { name: "D#", value: 7, type: "S" },
        { name: "Eb", value: 7, type: "F" },
        { name: "E",  value: 8, type: "N" },
        { name: "F",  value: 9, type: "N" },
        { name: "F#", value: 10, type: "S" },
        { name: "Gb", value: 10, type: "F" },
        { name: "G",  value: 11, type: "N" },
        { name: "G#", value: 0, type: "S" }
      ];

      // hitung panjang spasi baru (untuk menjaga alignment)
      var calcSpacing = function (oldLen, newLen, textLen) {
        return oldLen < newLen ? textLen + (newLen - oldLen)
             : oldLen > newLen ? textLen - (oldLen - newLen)
             : textLen;
      };

      var repeatStr = function (ch, times) {
        var out = [];
        for (var i = 0; i < times; i++) out.push(ch);
        return out.join("");
      };

      // Pilih enharmonic (S/F) sesuai key tujuan — ini yang hilang sebelumnya.
      function pickNoteByValue(n, targetKeyName) {
        while (n > 11) n -= 12;
        while (n < 0)  n += 12;

        var ambiguous = (n === 0 || n === 2 || n === 5 || n === 7 || n === 10);

        if (ambiguous) {
          switch (targetKeyName) {
            // Prefer sharp
            case "A": case "A#": case "B": case "C": case "C#":
            case "D": case "D#": case "E": case "F#": case "G": case "G#":
              for (var i = 0; i < CHORDS.length; i++) {
                if (CHORDS[i].value === n && CHORDS[i].type === "S") return CHORDS[i];
              }
              break;
            // Default: prefer flat
            default:
              for (var j = 0; j < CHORDS.length; j++) {
                if (CHORDS[j].value === n && CHORDS[j].type === "F") return CHORDS[j];
              }
          }
        }

        // Non-ambiguous: ambil yang ada
        for (var k = 0; k < CHORDS.length; k++) {
          if (CHORDS[k].value === n) return CHORDS[k];
        }
      }

      return $(this).each(function () {
        var startKey = $(this).attr("data-key");
        if (!startKey || $.trim(startKey) === "") startKey = settings.key;
        if (!startKey || $.trim(startKey) === "") throw "Starting key not defined.";

        currentKey = findChordName(startKey);

        // render pilihan key
        var keyBtns = [];
        $(CHORDS).each(function (i, ch) {
          keyBtns.push(
            currentKey.name === ch.name
              ? "<a href='#' class='selected'>" + ch.name + "</a>"
              : "<a href='#'>" + ch.name + "</a>"
          );
        });

        var $area = $(this);
        var $keys = $("<div class='transpose-keys'></div>").html(keyBtns.join(""));
        $(this).before($keys);

        $("a", $keys).on("click", function (ev) {
          ev.preventDefault();

          var targetName = $(this).text();
          var newKey = findChordName(targetName);
          if (!newKey || currentKey.name === newKey.name) {
            $(".transpose-keys a").removeClass("selected");
            $(this).addClass("selected");
            return false;
          }

          var diff = newKey.value - currentKey.value; // bisa negatif/positif

          $("span.c", $area).each(function () {
            var $c = $(this);
            var original = $c.text();

            // Ambil root: 2 char bila ada b/#, else 1 char
            var root = (original.length > 1 && (original.charAt(1) === "b" || original.charAt(1) === "#"))
              ? original.substr(0, 2)
              : original.substr(0, 1);

            var baseVal = findChordName(root).value;
            var transVal = baseVal + diff;

            var chosen = pickNoteByValue(transVal, newKey.name);
            var newText = chosen.name + original.substr(root.length);

            $c.text(newText);

            // jaga alignment spasi sesudah chord
            var sib = this.nextSibling;
            if (sib && sib.nodeType === 3 && sib.nodeValue.length > 0 && sib.nodeValue.charAt(0) !== "/") {
              var newSpace = calcSpacing(original.length, newText.length, sib.nodeValue.length);
              sib.nodeValue = repeatStr(" ", newSpace);
            }
          });

          currentKey = newKey;
          $(".transpose-keys a").removeClass("selected");
          $(this).addClass("selected");
          return false;
        });

        // parsing awal: wrap chord ke <span class="c">
        var rawLines = $(this).text().split(/\r\n|\n/g);
        var out = [];

        for (var i = 0; i < rawLines.length; i++) {
          (function () {
            var s = rawLines[i]
              .replace(/\../g, " ")
              .replace(/\â€“/g, " ")
              .replace(/\-/g, " ")
              .replace(/\(/g, " ")
              .replace(/\)/g, " ")
              .replace(/\b(x2|x3|x4|x5|x6|x7)\b/g, " ")
              .replace(/\*/g, " ")
              .replace(/\s+/g, " ")
              .split(" ");

            for (var j = 0; j < s.length; j++) {
              if (!!$.trim(s[j]).length && !s[j].match(settings.chordRegex)) {
                return 1; // bukan baris chord
              }
            }
            return 0; // baris chord
          })()
            ? out.push("<span>" + rawLines[i] + "</span>")
            : out.push(
                "<span>" +
                rawLines[i].replace(settings.chordReplaceRegex, function (m, chord, _suffix, slash) {
                  if (chord) return "<span class='c' data-chord='" + chord + "'>" + chord + "</span>";
                  if (slash) return "<span class='on'>/</span>";
                }) +
                "</span>"
              );
        }

        $(this).html(out.join("\n"));
      });
    };

    $.fn.transpose.defaults = {
      chordRegex: /^[A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*(\/[A-G][b\#]*)*$/,
      chordReplaceRegex: /([A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*)|([/])/g
    };

  })(jQuery);

});
