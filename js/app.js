document.cookie = "username= John Doe";
console.log(window);
document.strictErrorChecking = true;

var baseUri = document.baseURI;
var cookie = document.cookie;
var doctype = document.doctype;
// var doctype2 = window.doctype;
var relativeUri = document.documentURI;
var domImplementation = document.implementation;
var encordingType = document.inputEncoding;
var errorcheck = document.strictErrorChecking;
var title = document.title;
var script = document.scripts.namedItem("myscript").type;
// var script2 = document.scripts.namedItem("myscript2").text;


function changeText(){
  document.getElementById('p1').innerHTML="This is base URI: " + baseUri;
  document.getElementById('p2').innerHTML="This is cookie: " + cookie;
  document.getElementById('p3').innerHTML="This is !doctype:  " + doctype;
  document.getElementById('p4').innerHTML="This is !doctype:  " + doctype;
  document.getElementById('p5').innerHTML="This is relative URI:  " + relativeUri;
  document.getElementById('p6').innerHTML="This is relative URI:  " + domImplementation;
  document.getElementById('p7').innerHTML="This is Encording Type:  " + encordingType;
  document.getElementById('p8').innerHTML="This checks error checking is working:  " + errorcheck;
  document.getElementById('p9').innerHTML="This is title of this document :  " + title;
  document.getElementById('p9').innerHTML="This is title of this document :  " + title;
  document.getElementById('inputText').value= script;
  // document.getElementById('p10').innerHTML= script2 + "   hello";
  
}

function changeText2(){
  document.getElementById('p1').innerHTML="Hello World";
}

function mouseOver(){
//   document.getElementById('btn2').style.visibility ="hidden";
  document.getElementById('btn2').style.background ="#f3f3f3";
  document.getElementById('btn2').style.border ="none";
  document.getElementById('btn2').style.color ="#f3f3f3";
}
function mouseOut(){
  // document.getElementById('btn2').style.visibility ="visible";
  document.getElementById('btn2').style.background ="#333";
  document.getElementById('btn2').style.border ="rgb(216, 216, 216) solid 1px";
  document.getElementById('btn2').style.color ="#fff";
}