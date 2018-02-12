

var cell = document.getElementsByTagName("td");
// document.getElementsByTagName("td").setattribute

function red(obj) {
  if (obj.className !== "selected") {
    obj.setAttribute("class", "selected");
  } else {
    obj.setAttribute("class", "");
  }
}