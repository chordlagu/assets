setInterval(function(){ 
var $test = $('pre').html();
$test = $test.replace(/\[Intro]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Intro</span></p>');
$test = $test.replace(/\[Chorus]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus</span></p>');
$test = $test.replace(/\[Int]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Int</span></p>');
$test = $test.replace(/\[Musik]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Musik</span></p>');
$test = $test.replace(/\[Music]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Music</span></p>');
$test = $test.replace(/\[Verse]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse</span></p>');
$test = $test.replace(/\[Reff]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff</span></p>');
$test = $test.replace(/\[Outro]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Outro</span></p>');
$test = $test.replace(/\[Overtune]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Overtune</span></p>');
$test = $test.replace(/\[reff]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff</span></p>');
$test = $test.replace(/\[Bridge]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Bridge</span></p>');
$test = $test.replace(/\[Interlude]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Overtune</span></p>');
$test = $test.replace(/\[Instrumental]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Instrumental</span></p>');
$test = $test.replace(/\[Verse 1]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse 1</span></p>');
$test = $test.replace(/\[Verse 2]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse 2</span></p>');
$test = $test.replace(/\[Verse 3]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse 3</span></p>');
$test = $test.replace(/\[Verse 4]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse 4</span></p>');
$test = $test.replace(/\[Reff 1]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff 1</span></p>');
$test = $test.replace(/\[Reff 2]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff 2</span></p>');
$test = $test.replace(/\[Reff 3]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff 3</span></p>');
$test = $test.replace(/\[Reff 4]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Reff 4</span></p>');
$test = $test.replace(/\[Intro Chorus]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Intro Chorus</span></p>');
$test = $test.replace(/\[Pre-Chorus 1]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Pre-Chorus 1</span></p>');
$test = $test.replace(/\[Pre-Chorus 2]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Pre-Chorus 2</span></p>');
$test = $test.replace(/\[Pre-Chorus 3]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Pre-Chorus 3</span></p>');
$test = $test.replace(/\[Post-Chorus 1]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Post-Chorus 1</span></p>');
$test = $test.replace(/\[Post-Chorus 2]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Post-Chorus 2</span></p>');
$test = $test.replace(/\[Post-Chorus 3]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Post-Chorus 3</span></p>');
$test = $test.replace(/\[Chorus 1]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus 1</span></p>');
$test = $test.replace(/\[Chorus 2]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus 2</span></p>');
$test = $test.replace(/\[Chorus 3]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus 3</span></p>');
$test = $test.replace(/\[Bridge 1]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Bridge 3</span></p>');
$test = $test.replace(/\[Bridge 2]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Bridge 3</span></p>');
$test = $test.replace(/\[Bridge 3]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Bridge 3</span></p>');
$test = $test.replace(/\[Post-Chorus]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Post-Chorus</span></p>');
$test = $test.replace(/\[Pre-Chorus]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Pre-Chorus</span></p>');
$test = $test.replace(/\[Chorus I]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus I</span></p>');
$test = $test.replace(/\[Chorus II]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus II</span></p>');
$test = $test.replace(/\[Chorus III]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Chorus III</span></p>');
$test = $test.replace(/\[Verse I]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse I</span></p>');
$test = $test.replace(/\[Verse II]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse II</span></p>');
$test = $test.replace(/\[Verse III]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse III</span></p>');
$test = $test.replace(/\[Verse IIII]/gi, '<p style="margin-bottom:-5px;margin-left:-10px;"><span class="replaced">Verse IIII</span></p>');
$('pre').html($test);
}, 3000);
