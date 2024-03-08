//debugger;



let writing = '';
/*let row = prompt("Podaj ilość wierszy");
let column = prompt("Podaj ilość column");*/

let rows =10;
let column =10;

let start = document.querySelector(".start");
let board = document.querySelector(".board");
let reset = document.querySelector(".reset");
let stop = document.querySelector(".stop");

//tab[4][4] = div

//Konsola
/*let tab = [
    [0,0,0,0,0,0,0,1,0,0],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,9,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10]
];
console.log(tab);*/

//Create div
/*let divArray = []


for () {
  for () {
    let div = createDiv();
    tab[y][x] = div;
  }
}

function setPos() {

  for () {
    for () {
      let div = tab[y][x];
      div.left =
        div.top =
    }
  }
}
*/

  let divBoard = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < column; j++) {
      let div = document.createElement('div');
      divBoard.push(div);
      console.log(divBoard)
    }
}
/*
  function createDiv() {
    for (let i = 0; i < 30; i++) {
      let div = document.createElement('div');
      let divArray = [[]];
      divArray.push(div);
      div.innerHTML = "div";
      div.classList.add('class');
      div.style.border = '1px solid black';
      div.style.width = '20px';
      div.style.height = '20px';
      div.style.backgroundColor = 'black';
      board.appendChild(div);

    }
  }

//Create board
  function pressStart(divArray) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < column; j++) {
      }
      writing += divArray + '<br>';

    }
    document.querySelector(".board").innerHTML = writing;
  }

start.addEventListener('click',pressStart);
start.addEventListener('click',createDiv);


*/
