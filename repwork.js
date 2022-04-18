setInterval(function(){ 
var $test = $(&#39;pre&#39;).html();
$test = $test.replace(/\[Intro]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Intro</span></p>&#39;);
$test = $test.replace(/\[Chorus]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Chorus</span></p>&#39;);
$test = $test.replace(/\[Int]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Intro</span></p>&#39;);
$test = $test.replace(/\[Musik]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Musik</span></p>&#39;);
$test = $test.replace(/\[Music]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Music</span></p>&#39;);
$test = $test.replace(/\[Verse]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Verse</span></p>&#39;);
$test = $test.replace(/\[Reff]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Reff</span></p>&#39;);
$test = $test.replace(/\[Outro]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Outro</span></p>&#39;);
$test = $test.replace(/\[Overtune]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Overtune</span></p>&#39;);
$test = $test.replace(/\[reff]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Reff</span></p>&#39;);
$test = $test.replace(/\[Bridge]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Bridge</span></p>&#39;);
$test = $test.replace(/\[Interlude]/gi, &#39;<p style='margin-bottom:-10px;margin-left:-10px;'><span class='replaced'>Overtune</span></p>&#39;);
$(&#39;pre&#39;).html($test);
}, 3000);
