//debugger;

/*let row = prompt("Podaj ilość wierszy");
let column = prompt("Podaj ilość column");*/

let rows =10;
let column =10;

let start = document.querySelector(".start");
let board = document.querySelector(".board");
let reset = document.querySelector(".reset");
let stop = document.querySelector(".stop");

//tab[4][4] = div


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

function startInt() {
  setInterval(pressStart, 1000)
}
/*
function stopInt(){
  clearInterval()
}

 */

//Tablica z Div
function pressStart(){
  let divBoard = [];
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < column; j++) {
      let div = document.createElement('div');
      div.classList.add('class');
      div.style.border = '1px solid black';
      div.style.width = '20px';
      div.style.height = '20px';
      div.style.backgroundColor = Math.random() < 0.7 ? 'white': 'black';  //czarna żywa
      div.style.margin = '2px';
      row.appendChild(div);
     /* if (div.style.backgroundColor === 'black') {
        divBoard[0][0] = div.style.backgroundColor === "blue";
      }*/
    }
    board.appendChild(row);
    divBoard.push(row);

  }

  console.log(divBoard);

}

start.addEventListener('click',pressStart);
//start.addEventListener('click',startInt);
//stop.addEventListener('click',stopInt)
