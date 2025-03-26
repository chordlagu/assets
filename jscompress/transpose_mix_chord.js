window.onload = function() {
    $(".c").each(function() {
        let currentSpan = $(this);
        let nextSpan = currentSpan.next(".on");

        if (nextSpan.length) {
            let nextChordSpan = nextSpan.next(".c");
            if (nextChordSpan.length) {
                let combinedChord = currentSpan.text() + "/" + nextChordSpan.text();

                // Gabungkan ke dalam satu elemen baru
                let newSpan = $("<span>", {
                    "class": "c",
                    "data-chord": combinedChord,
                    "text": combinedChord
                });

                // Gantikan elemen lama dengan elemen baru
                currentSpan.before(newSpan);
                currentSpan.remove();
                nextSpan.remove();
                nextChordSpan.remove();
            }
        }
    });
};
