jQuery(document).ready(function() {
                $( 'a[href*="#"]:not([href="#"])' ).click( function() {
                    jQuery("tela").toggleClass("tela");
                });
            });
            var match, kuncigitar = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "Bb", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
                kuncigitarRegex = /A#|C#|D#|F#|G#|Ab|Bb|Db|Eb|Gb|A|B|C|D|E|F|G/g;
            $("#transup").click(function() {
                $(".tbi-tooltip").each(function() {
                    for (var e = $(this).html(), i = "", a = e.split(kuncigitarRegex), c = 0; match = kuncigitarRegex.exec(e);) {
                        var r = kuncigitar.indexOf(match[0]);
                        i += a[c++] + kuncigitar[r + 1]
                    }
                    i = (i = (i = (i = (i = (i += a[c]).replace(/Gb/g, "F#")).replace(/Ab/g, "G#")).replace(/Bb/g, "A#")).replace(/Db/g, "C#")).replace(/Eb/g, "D#"), $(this).html(i).removeClass("tbi-tooltip " + e).addClass("tbi-tooltip " + i)
                })
                $('.tbi-tooltip').each(function() {
                    var kunci = $(this).text().trim();
                    var span_ = $(this).find('span');
                    if (kunci.includes('/')) {
                        var kunci_depan = kunci.split('/')[0].replace('#', 'cis');
                        span_.attr('class', 'custom tbi-' + kunci_depan);
                    } else {
                        span_.attr('class', 'custom tbi-' + kunci.replace('#', 'cis'));
                    }
                })
            }), $("#transdown").click(function() {
                $(".tbi-tooltip").each(function() {
                    for (var e = $(this).html(), i = "", a = e.split(kuncigitarRegex), c = 0; match = kuncigitarRegex.exec(e);) {
                        var r = kuncigitar.indexOf(match[0], 1);
                        i += a[c++] + kuncigitar[r - 1]
                    }
                    i = (i = (i = (i = (i = (i += a[c]).replace(/Gb/g, "F#")).replace(/Ab/g, "G#")).replace(/Bb/g, "A#")).replace(/Db/g, "C#")).replace(/Eb/g, "D#"), $(this).html(i).removeClass("tbi-tooltip " + e).addClass("tbi-tooltip " + i)
                })
                $('.tbi-tooltip').each(function() {
                    var kunci = $(this).text().trim();
                    var span_ = $(this).find('span');
                    if (kunci.includes('/')) {
                        var kunci_depan = kunci.split('/')[0].replace('#', 'cis');
                        span_.attr('class', 'custom tbi-' + kunci_depan);
                    } else {
                        span_.attr('class', 'custom tbi-' + kunci.replace('#', 'cis'));
                    }
                })
            });
