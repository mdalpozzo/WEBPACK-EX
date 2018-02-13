



//=== MODEL ======
var board = [[0,0,0],[0,0,0],[0,0,0]];








var cell = document.getElementsByTagName("td");
// document.getElementsByTagName("td").setattribute


var playerToggle = 1
var gameWon = false;
// toggles color of cell to player's color
// if playerToggle === 0
  // increment playerToggle
  //toggle color of cell to green
//else player toggle === 0
  //decrement playerToggle
  //toggle color of cell to red
function toggleX(obj) {
  if (playerToggle === 1 && gameWon === false) {
    if (obj.className === "player2") {
      return;
    } else if (obj.className === "") {
      obj.setAttribute("class", "player1");
      obj.innerHTML = "X";
      playerToggle++;
      winByRow(obj);
      winByColumn(obj);
    }
  } else if (playerToggle === 2 && gameWon === false) {
    if (obj.className === "player1") {
      return;
    } else if (obj.className === "") {
      obj.setAttribute("class", "player2");
      obj.innerHTML = "O";
      playerToggle--;
      winByRow(obj);
    }
  }
}

//=============================================


var winByRow = function (node) {
  //the parent node should be the row element itself
  var rowNodes = node.parentNode.children;
  let row = [...rowNodes];
  //player who we're checking
  var player = node.className;
  //sum of "used" cells by player
  var sum = 0;
  

  row.forEach(function (node) {
    console.log(node.className);
    if (node.className === player) {
      sum++;
    }
  });

  if (sum === 3) {
    gameWon = true;

    //do some game winning cool animation or something  ******
    //show button to reset game
  }
};

var winByColumn = function (node) {

  console.log(node.parentNode);
  var colNodes = [node.parentNode];
  var sum = 0;

  if (sum === 3) {
    gameWon = true;

  }
};

var winByDiag = function () {

  if (sum === 3) {
    gameWon = true;
  }
};