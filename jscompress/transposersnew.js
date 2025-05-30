function renderChords() {
    $("#song_chords").html("");
    var e = $("pre[data-key] span.c").toArray().map(e => e.textContent),
        n = (e = e.filter(function(e, a, n) {
            return n.indexOf(e) === a
        })).join(" ").replace(/\+/g, "p").replace(/\-/g, "z").replace(/\#/g, "w").replace(/\//g, "s").split(" "),
        t = "";
    e.forEach(function(e, a) {
        t += '<img class="mobchords" alt="' + e + '" width="41"height="72" src="https://cdn.chordlagu.id/chords/' + n[a] + '.png" />'
    }), console.log(t), $("#song_chords").append(t)
}! function(i) {
    i.fn.transpose = function(e) {
        function u(e) {
            "m" == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1));
            for (var a = 0; a < o.length; a++)
                if (e == o[a].name) return o[a]
        }
        var c = i.extend({}, i.fn.transpose.defaults, e),
            m = null,
            o = [{
                name: "Ab",
                value: 0,
                type: "F"
            }, {
                name: "A",
                value: 1,
                type: "N"
            }, {
                name: "A#",
                value: 2,
                type: "S"
            }, {
                name: "Bb",
                value: 2,
                type: "F"
            }, {
                name: "B",
                value: 3,
                type: "N"
            }, {
                name: "C",
                value: 4,
                type: "N"
            }, {
                name: "C#",
                value: 5,
                type: "S"
            }, {
                name: "Db",
                value: 5,
                type: "F"
            }, {
                name: "D",
                value: 6,
                type: "N"
            }, {
                name: "D#",
                value: 7,
                type: "S"
            }, {
                name: "Eb",
                value: 7,
                type: "F"
            }, {
                name: "E",
                value: 8,
                type: "N"
            }, {
                name: "F",
                value: 9,
                type: "N"
            }, {
                name: "F#",
                value: 10,
                type: "S"
            }, {
                name: "Gb",
                value: 10,
                type: "F"
            }, {
                name: "G",
                value: 11,
                type: "N"
            }, {
                name: "G#",
                value: 0,
                type: "S"
            }],
            p = function(e, a, n) {
                var t = i(e),
                    s = t.text(),
                    e = 1 < (e = s).length && ("b" == e.charAt(1) || "#" == e.charAt(1)) ? e.substr(0, 2) : e.substr(0, 1),
                    e = function(e, a, n) {
                        var t = u(e).value + a;
                        11 < t ? t -= 12 : t < 0 && (t += 12);
                        var s = 0;
                        if (0 == t || 2 == t || 5 == t || 7 == t || 10 == t) switch (n.name) {
                            case "A":
                            case "A#":
                            case "B":
                            case "C":
                            case "C#":
                            case "D":
                            case "D#":
                            case "E":
                            case "F#":
                            case "G":
                            case "G#":
                                for (; s < o.length; s++)
                                    if (o[s].value == t && "S" == o[s].type) return o[s];
                            default:
                                for (; s < o.length; s++)
                                    if (o[s].value == t && "F" == o[s].type) return o[s]
                        } else
                            for (; s < o.length; s++)
                                if (o[s].value == t) return o[s]
                    }(e, a, n).name + s.substr(e.length);
                t.text(e);
                t = t[0].nextSibling;
                t && 3 == t.nodeType && 0 < t.nodeValue.length && "/" != t.nodeValue.charAt(0) && (e = r(s.length, e.length, t.nodeValue.length), t.nodeValue = l(" ", e))
            },
            r = function(e, a, n) {
                return a < e ? n + (e - a) : e < a ? n - (a - e) : n
            },
            l = function(e, a) {
                for (var n = [], t = 0; t < a; t++) n.push(e);
                return n.join("")
            };
        return i(this).each(function() {
            var e = i(this).attr("data-key");
            if (e && "" != i.trim(e) || (e = c.key), !e || "" == i.trim(e)) throw "Starting key not defined.";
            m = u(e);
            var n = [];
            i(o).each(function(e, a) {
                m.name == a.name ? n.push("<a href='#' class='selected'>" + a.name + "</a>") : n.push("<a href='#'>" + a.name + "</a>")
            });
            var r = i(this),
                e = i("<div class='transpose-keys'></div>");
            e.html(n.join("")), i("a", e).click(function(e) {
                var a, n, t, s;
                return e.preventDefault(), a = r, n = i(this).text(), s = u(n), m.name != s.name && (e = m.value, t = (n = s.value) < e ? 0 - (e - n) : e < n ? n - e + 0 : 0, i("span.c", a).each(function(e, a) {
                    p(a, t, s)
                }), m = s), i(".transpose-keys a").removeClass("selected"), i(this).addClass("selected"), !1
            }), i(this).before(e);
            for (var a, t = [], s = i(this).text().split(/\r\n|\n/g), l = 0; l < s.length; l++) ! function(e) {
                for (var a = e.replace(/\../g, " ").replace(/\–/g, " ").replace(/\-/g, " ").replace(/\(/g, " ").replace(/\)/g, " ").replace(/\s+/g, " ").split(" "), n = 0; n < a.length; n++)
                    if (0 == !i.trim(a[n]).length && !a[n].match(c.chordRegex)) return !1;
                return !0
            }(a = s[l]) ? t.push("<span>" + a + "</span>") : t.push("<span>" + a.replace(c.chordReplaceRegex, function(e, a, n, t) {
                return a ? "<span class='c'>" + a + "</span>" : t ? "<span class='on'>/</span>" : void 0
            }) + "</span>");
            i(this).html(t.join("\n"))
        })
    }, i.fn.transpose.defaults = {
        chordRegex: /^[A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*(\/[A-G][b\#]*)*$/,
        chordReplaceRegex: /([A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*)|([/])/g
    }
}(jQuery);
