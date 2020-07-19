window.onload = () => {  
'use strict';     
if ('serviceWorker' in navigator) {     
navigator.serviceWorker  
.register('https://content.chordlagu.id/sw.js'); 
} 
}
