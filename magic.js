console.log("sane");
var googleSearch = "https://www.google.com/search?q=";
var inputArray = [];
function lucky() {
  window.location = "https://www.google.com/search?q=Oh!+You+Pretty+Things";
}

function search(event) {
  var enterKey = event.event || event.keyCode;
  if(enterKey == 13 ){
    var input = document.getElementById("search").value;
    inputArray= input.split(" ");
    for(var i=0; i < inputArray.length;i++){
      googleSearch+= inputArray[i];
      googleSearch += "+";
    }
    window.location = googleSearch;
  }
}

var searchButton = function(){
  var input = document.getElementById("search").value;
  inputArray= input.split(" ");
  for(var i=0; i < inputArray.length;i++){
    googleSearch+= inputArray[i];
    googleSearch += "+";
  }
  window.location = googleSearch;
}
