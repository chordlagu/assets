function wikipedia(artistname) {
artistname = artistname.innerHTML

var string1 = '<span class="wikilogo">W</span>';
var string2 = '<span class="texttitlewiki">';
var string3 = '?</span>';
var string4 = '</br>';
var string5 = 'Siapa ';
var string6 = '<br>';
var string7 = '<br>';

artistname = artistname.replace(string1, '');
artistname = artistname.replace(string2, '');
artistname = artistname.replace(string3, '');
artistname = artistname.replace(string4, '');
artistname = artistname.replace(string5, '');
artistname = artistname.replace(string6, '');
artistname = artistname.replace(string7, '');

artistname = artistname.trim();
//console.log(artistname);

var xmlhttp = new XMLHttpRequest();
var xmlhttp2 = new XMLHttpRequest();
var wikiimagesize = 200;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.responseText);
 
 if(obj.query.searchinfo.totalhits > 0){
  //var artistinfo = obj.query.search[0].title;
  var pageid2 = obj.query.search[0].pageid;
  //artistinfo = artistinfo.replace(" dilencongkan di sini", "");
  
  document.getElementById("wikipageid").value = pageid2;
  xmlhttp2.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    var obj2 = JSON.parse(this.responseText);
    
    var imgwiki = '';
    
    if(obj2.query.pages[pageid2].thumbnail){
     imgwiki = "<br/><img src='"+obj2.query.pages[pageid2].thumbnail.source+"'/><br/>";
    }else{
    }
    
    document.getElementById("displaywiki").innerHTML = imgwiki+"<br/><span id='artistnametitle'>"+artistname+"</span>"+obj2.query.pages[pageid2].extract+"<br/><br/>";
    
    /*
    for (i in obj.query) {
  
    }
    */ 
   }
  
  };

  
 }else{
  document.getElementById("displaywiki").innerHTML = 'No data';
 }

  }
};

xmlhttp.open("GET", "https://id.wikipedia.org/w/api.php?action=query&list=search&srsearch="+artistname+"&format=json&origin=*", true);
xmlhttp.send();

xmlhttp2.open("GET", "https://id.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&gsrsearch="+artistname+"&gsrlimit=10&prop=pageimages|extracts&pithumbsize="+wikiimagesize+"&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&format=json&origin=*", true);
xmlhttp2.send();
 


}
