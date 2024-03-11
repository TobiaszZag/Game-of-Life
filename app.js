//debugger;

/*let row = prompt("Podaj ilość wierszy");
let column = prompt("Podaj ilość column");*/

let rows =10;
let columns =10;

let divy = document.querySelector(".class")
let start = document.querySelector(".start");
let board = document.querySelector(".board");
let reset = document.querySelector(".reset");
let stop = document.querySelector(".stop");
let divBoard = [];
let Interval = "";
/*
function startInt() {
  Interval= setInterval(To jest zlepressStart, 1000)
}

function stopInt(){
   clearInterval(Interval)
}
function resetBoard(){
  board.innerHTML = '';
}
*/



//Tablica z Div 
function pressStart(){

  board.innerHTML = '';
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < columns; j++) {
      let div = document.createElement('div');
      div.classList.add('class');
      div.style.border = '1px solid black';
      div.style.width = '20px';
      div.style.height = '20px';
      div.style.backgroundColor = Math.random() < 0.7 ? 0: "black";  //czarna żywa
      div.style.margin = '2px';
      row.appendChild(div);
      board.appendChild(row);
      divBoard.push(row);
    }
    board.appendChild(row);


  }

  console.log(divBoard);
}


//Sprawdzenie sąsiadów 
function countNeighbors(x,y) {
  let board = [];
  let count =0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborX = x + i;
      const neighborY = y + j;
      if (i === 0 && j === 0) continue; //Dzieki niej sprawdzamy sasiadow danej komorki
      if (neighborX >= 0 && neighborX < rows && neighborY >= 0 && neighborY < columns) {
        count += board[neighborX][neighborY] ? 1 : 0;
      }
    }
  }
  console.log("Liczba sąsiadów (" + x + ", " + y + "): " + count);
}


//Aktualizuje plasze
function updateBoardState() {

}

//Rozpoczyna gre
function startGame() {

}


start.addEventListener('click',pressStart);
start.addEventListener('click',countNeighbors);
//start.addEventListener('click',startInt);
//stop.addEventListener('click',stopInt);
//reset.addEventListener('click',resetBoard);




