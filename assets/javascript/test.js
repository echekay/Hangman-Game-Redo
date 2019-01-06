var testArray = ["red", "blue", "green", "yellow", "white"];

function testFunction() {
  var body = document.getElementsByTagName("body")[0];
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "testDiv");
  body.appendChild(newDiv);
  for (i = 0; i < testArray.length; i++) {
    var newP = document.createElement("p");
    newP.setAttribute("id", "id#" + testArray[i]);
    newDiv.appendChild(newP);
  }
}
