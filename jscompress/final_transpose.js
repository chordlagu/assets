document.addEventListener("DOMContentLoaded", function () {
    (function (h) {
        (h.fn.transpose = function (e) {
            function c(e) {
                "m" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1));
                for (var a = 0; a < p.length; a++) if (e == p[a].name) return p[a];
            }
            var u = h.extend({}, h.fn.transpose.defaults, e),
                m = null,
                p = [
                    { name: "Ab", value: 0, type: "F" },
                    { name: "A", value: 1, type: "N" },
                    { name: "A#", value: 2, type: "S" },
                    { name: "Bb", value: 2, type: "F" },
                    { name: "B", value: 3, type: "N" },
                    { name: "C", value: 4, type: "N" },
                    { name: "C#", value: 5, type: "S" },
                    { name: "Db", value: 5, type: "F" },
                    { name: "D", value: 6, type: "N" },
                    { name: "D#", value: 7, type: "S" },
                    { name: "Eb", value: 7, type: "F" },
                    { name: "E", value: 8, type: "N" },
                    { name: "F", value: 9, type: "N" },
                    { name: "F#", value: 10, type: "S" },
                    { name: "Gb", value: 10, type: "F" },
                    { name: "G", value: 11, type: "N" },
                    { name: "G#", value: 0, type: "S" },
                ];

            return h(this).each(function () {
                var e = h(this).attr("data-key");
                if (((e && "" != h.trim(e)) || (e = u.key), !e || "" == h.trim(e))) throw "Starting key not defined.";
                m = c(e);

                // Proses parsing chord di <pre>
                var a = [],
                    r = h(this)
                        .text()
                        .split(/\r\n|\n/g);
                for (var l = 0; l < r.length; l++) {
                    !(function () {
                        var s = r[l]
                                .replace(/(Intro\s: |Musik\s: |Int\.\s: |Int\s: |Outro\s: |Reff\s: |Int\.\s)/gi, " ")
                                .replace(/\../g, " ")
                                .replace(/\.../g, " ")
                                .replace(/\./g, " ")
                                .replace(/\â€“/g, " ")
                                .replace(/\-/g, " ")
                                .replace(/\(/g, " ")
                                .replace(/\)/g, " ")
                                .replace(/\b(x2|x3|x4|x5|x6|x7|x8|x9|x10|x11|x12|x13|x14|x15|x16|x17|x18|x19)\b/g, " ")
                                .replace(/\*/g, " ")
                                .replace(/\s+/g, " ")
                                .replace(/\(Chorus\)/gi, "Chorus : ")
                                .replace(/\(Int\.\)/gi, "Int. : ")
                                .replace(/\(Intro\)/gi, "Intro : ")
                                .replace(/\(Outro\)/gi, "Outro : ")
                                .replace(/\(Ending\)/gi, "Ending : ")
                                .replace(/\(Verse\)/gi, "Verse : ")
                                .split(" ");
                        for (var a = 0; a < s.length; a++)
                            if (0 == !h.trim(s[a]).length && !s[a].match(u.chordRegex)) return;
                        return 1;
                    })()
                        ? a.push("<span>" + r[l] + "</span>")
                        : a.push(
                              "<span>" +
                                  r[l].replace(u.chordReplaceRegex, function (e, a, n, t) {
                                      return a ? "<span class='c' data-chord='" + a + "'>" + a + "</span>" : t ? "<span class='on'>/</span>" : void 0;
                                  }) +
                                  "</span>"
                          );
                }
                h(this).html(a.join("\n"));
            });
        }),
            (h.fn.transpose.defaults = {
                chordRegex: /^[A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*(\/[A-G][b\#]*)*$/,
                chordReplaceRegex: /([A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*)|([/])/g,
            });
    })(jQuery);
});
