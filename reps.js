setInterval(function(){ 
var $test = $('pre').html();
$test = $test.replace(/\[Intro]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Intro</span></p>');
$test = $test.replace(/\[Chorus]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Chorus</span></p>');
$test = $test.replace(/\[Int]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Intro</span></p>');
$test = $test.replace(/\[Musik]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Musik</span></p>');
$test = $test.replace(/\[Music]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Music</span></p>');
$test = $test.replace(/\[Verse]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Verse</span></p>');
$test = $test.replace(/\[Reff]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Reff</span></p>');
$test = $test.replace(/\[Outro]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Outro</span></p>');
$test = $test.replace(/\[Overtune]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Overtune</span></p>');
$test = $test.replace(/\[reff]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Reff</span></p>');
$test = $test.replace(/\[Bridge]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Bridge</span></p>');
$test = $test.replace(/\[Interlude]/gi, '<p style="margin-bottom:-10px;margin-left:-10px;"><span class="replaced">Overtune</span></p>');
$('pre').html($test);
}, 3000);
