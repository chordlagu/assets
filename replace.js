var $test = $('pre').html();
$test = $test.replace(/\[Intro]/gi, '<span class="replaced">Intro</span>');
$test = $test.replace(/\[Chorus]/gi, '<span class="replaced">Chorus</span>');
$test = $test.replace(/\[Int]/gi, '<span class="replaced">Intro</span>');
$test = $test.replace(/\[Musik]/gi, '<span class="replaced">Musik</span>');
$test = $test.replace(/\[Music]/gi, '<span class="replaced">Music</span>');
$test = $test.replace(/\[Verse]/gi, '<span class="replaced">Verse</span>');
$test = $test.replace(/\[Reff]/gi, '<span class="replaced">Reff</span>');
$test = $test.replace(/\[Outro]/gi, '<span class="replaced">Outro</span>');
$test = $test.replace(/\[Overtune]/gi, '<span class="replaced">Overtune</span>');
$('pre').html($test);
