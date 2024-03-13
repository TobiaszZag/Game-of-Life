//debugger;

/*let row = prompt("Podaj ilość wierszy");
let column = prompt("Podaj ilość column");*/


let rows = 10;
let columns = 10;
let intervalId = null;


let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let board = document.querySelector(".board");
let divBoard = [];

//Aktualizuje plasze
function updateBoardState() {
  let newBoardUpdate = [];
  for (let y = 0; y < rows; y++) {
    newBoardUpdate.push([]);
    for (let x = 0; x < columns; x++) {
      const div = divBoard[y][x];
      const isAlive = div.classList.contains('zywa');
      const liveNeighbors = countNeighbors(x, y);


      if (isAlive && (liveNeighbors === 3 || liveNeighbors === 2)) {
        newBoardUpdate[y][x] = 1;
      } else if (!isAlive && liveNeighbors === 3) {
        newBoardUpdate[y][x] = 1;
      } else {
        newBoardUpdate[y][x] = 0;
      }
    }
  }


  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const div = divBoard[y][x];
      if (newBoardUpdate[y][x] === 1) {
        div.classList.add('zywa');
      } else {
        div.classList.remove('zywa');
      }
    }
  }
}

//Rozpoczyna gre
function startGame() {
  pressStart()
  intervalId = setInterval(updateBoardState, 1000);
}

function stopGame(){
  clearInterval(intervalId);
}


function pressStart() {
  board.innerHTML = '';
  divBoard = [];
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    divBoard.push([]);
    for (let j = 0; j < columns; j++) {
      let div = document.createElement('div');
      div.style.border = '1px solid black';
      div.style.width = '20px';
      div.style.height = '20px';


/* Nie pewne zmiany
      let newClass = ""
      newClass.classList.add = Math.random() < 0.6 ? 'zywa' : 'niezywa';
*/


      div.style.backgroundColor = Math.random() < 0.6 ? 'black' : 0;
      if (div.style.backgroundColor === 'black') {
        div.classList.add('zywa');
      } else {
        div.classList.add('niezywa');
      }
      div.style.margin = '2px';
      row.appendChild(div);
      divBoard[i].push(div);
    }
    board.appendChild(row);
  }
}
//Zlicza sąsiadów
function countNeighbors(x, y) {
  let liveNeighbors = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborX = x + i;
      const neighborY = y + j;
      if (i === 0 && j === 0) continue;// Pomijamy bieżącą komórkę
      if (neighborX >= 0 && neighborX < columns && neighborY >= 0 && neighborY < rows) {
        const neighborDiv = divBoard[neighborY][neighborX];
        if (neighborDiv.classList.contains('zywa')) {
          liveNeighbors++;
        }
      }
    }
  }
  console.log("Liczba sąsiadów (" + x + ", " + y + "): " + liveNeighbors);
  return liveNeighbors;
}


start.addEventListener('click', startGame);
stop.addEventListener('click',stopGame);
//reset.addEventListener('click',resetBoard);
