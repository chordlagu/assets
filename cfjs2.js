var interVal = setInterval(function(){ 
var $test = $('pre').html();
$test = $test.replace(/\[Intro]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Intro</span></p>');
$test = $test.replace(/\[Chorus]/gi, '<br/><ins class='adsbygoogle' data-ad-client='ca-pub-2435654813584938' data-ad-slot='6762512995' style='display:inline-block;width:300px;height:50px'></ins>
<script data-cfasync='false'>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus</span></p>');
$test = $test.replace(/\[Int]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Int</span></p>');
$test = $test.replace(/\[Musik]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Musik</span></p>');
$test = $test.replace(/\[Music]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Music</span></p>');
$test = $test.replace(/\[Verse]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse</span></p>');
$test = $test.replace(/\[Reff]/gi, '<br/><ins class='adsbygoogle' data-ad-client='ca-pub-2435654813584938' data-ad-slot='6762512995' style='display:inline-block;width:300px;height:50px'></ins>
<script data-cfasync='false'>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script><br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff</span></p>');
$test = $test.replace(/\[Outro]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Outro</span></p>');
$test = $test.replace(/\[Overtune]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Overtune</span></p>');
$test = $test.replace(/\[reff]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff</span></p>');
$test = $test.replace(/\[Bridge]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Bridge</span></p>');
$test = $test.replace(/\[Interlude]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Overtune</span></p>');
$test = $test.replace(/\[Instrumental]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Instrumental</span></p>');
$test = $test.replace(/\[Verse 1]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse 1</span></p>');
$test = $test.replace(/\[Verse 2]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse 2</span></p>');
$test = $test.replace(/\[Verse 3]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse 3</span></p>');
$test = $test.replace(/\[Verse 4]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse 4</span></p>');
$test = $test.replace(/\[Reff 1]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff 1</span></p>');
$test = $test.replace(/\[Reff 2]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff 2</span></p>');
$test = $test.replace(/\[Reff 3]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff 3</span></p>');
$test = $test.replace(/\[Reff 4]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff 4</span></p>');
$test = $test.replace(/\[Intro Chorus]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Intro Chorus</span></p>');
$test = $test.replace(/\[Pre-Chorus 1]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Pre-Chorus 1</span></p>');
$test = $test.replace(/\[Pre-Chorus 2]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Pre-Chorus 2</span></p>');
$test = $test.replace(/\[Pre-Chorus 3]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Pre-Chorus 3</span></p>');
$test = $test.replace(/\[Post-Chorus 1]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Post-Chorus 1</span></p>');
$test = $test.replace(/\[Post-Chorus 2]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Post-Chorus 2</span></p>');
$test = $test.replace(/\[Post-Chorus 3]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Post-Chorus 3</span></p>');
$test = $test.replace(/\[Chorus 1]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus 1</span></p>');
$test = $test.replace(/\[Chorus 2]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus 2</span></p>');
$test = $test.replace(/\[Chorus 3]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus 3</span></p>');
$test = $test.replace(/\[Bridge 1]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Bridge 3</span></p>');
$test = $test.replace(/\[Bridge 2]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Bridge 3</span></p>');
$test = $test.replace(/\[Bridge 3]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Bridge 3</span></p>');
$test = $test.replace(/\[Post-Chorus]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Post-Chorus</span></p>');
$test = $test.replace(/\[Pre-Chorus]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Pre-Chorus</span></p>');
$test = $test.replace(/\[Chorus I]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus I</span></p>');
$test = $test.replace(/\[Chorus II]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus II</span></p>');
$test = $test.replace(/\[Chorus III]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus III</span></p>');
$test = $test.replace(/\[Verse I]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse I</span></p>');
$test = $test.replace(/\[Verse II]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse II</span></p>');
$test = $test.replace(/\[Verse III]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse III</span></p>');
$test = $test.replace(/\[Verse IIII]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse IIII</span></p>');
$test = $test.replace(/\[Melodi]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Melodi</span></p>');
$test = $test.replace(/\[Tab]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Tab</span></p>');
$test = $test.replace(/\[Duet]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Duet</span></p>');
$test = $test.replace(/\[Intro 2]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Intro 2</span></p>');
$test = $test.replace(/\[Ending]/gi, '<br/><p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Ending</span></p>');
$test = $test.replace(/Capo fret 1/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Capo fret 1</span></p>');
$test = $test.replace(/Capo fret 2/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Capo fret 2</span></p>');
$test = $test.replace(/Capo fret 3/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Capo fret 3</span></p>');
$test = $test.replace(/Capo fret 4/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Capo fret 4</span></p>');
$test = $test.replace(/Capo fret 5/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Capo fret 5</span></p>');
$test = $test.replace(/Capo fret 6/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Capo fret 6</span></p>');
$('pre').html($test);
}, 3000);
 setTimeout(function (argument) {
    clearInterval(interVal);
 }, 5000);
