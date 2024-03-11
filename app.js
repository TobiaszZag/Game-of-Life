//debugger;

/*let row = prompt("Podaj ilość wierszy");
let column = prompt("Podaj ilość column");*/

let rows =10;
let column =10;

let start = document.querySelector(".start");
let board = document.querySelector(".board");
let reset = document.querySelector(".reset");
let stop = document.querySelector(".stop");
let divBoard = [];
let Interval = "";

function startInt() {
  Interval= setInterval(pressStart, 1000)
}

function stopInt(){
   clearInterval(Interval)
}




//Tablica z Div
function pressStart(){

  board.innerHTML = '';
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
      board.appendChild(row);
      divBoard.push(row);
    }
    board.appendChild(row);


  }

  console.log(divBoard);
  sprawdzenieSasiadow()
}


function sprawdzenieSasiadow() {
  let tablicaSasiadow = [];

  for (let i = 0; i < divBoard.length; i++) {

  }


  console.log(tablicaSasiadow);
}


start.addEventListener('click',pressStart);
//start.addEventListener('click',sprawdzenieSasiadow);
start.addEventListener('click',startInt);
stop.addEventListener('click',stopInt)



