//debugger;

let rows = prompt("Podaj ilość wierszy");
let columns = prompt("Podaj ilość column");
let intervalId = null;


let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset")
let board = document.querySelector(".board");
let pixelGun = document.querySelector(".pixelGun")
let marking = document.querySelector(".marking")
let random = document.querySelector(".random")
let divBoard = [];

//Update board
function updateBoardState() {
  let newBoardUpdate = [];
  for (let y = 0; y < rows; y++) {
    newBoardUpdate.push([]);
    for (let x = 0; x < columns; x++) {
      const div = divBoard[y][x];
      const isAlive = div.classList.contains('alive');
      const liveNeighbors = countNeighbors(x, y);

//Rules
      if (isAlive && (liveNeighbors === 2 || liveNeighbors === 3)) {
        newBoardUpdate[y][x] = 1;
      } else if (!isAlive && liveNeighbors === 3) {
        newBoardUpdate[y][x] = 1;
      } else {
        newBoardUpdate[y][x] = 0;
      }
    }
  }
//debugger

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      let div = divBoard[y][x];
      if (newBoardUpdate[y][x] === 1) {
        div.classList.add('alive');
      } else {
        div.classList.remove('alive');
      }
      }
  }
}

//Start game
function startGame() {
  pressStart()
  intervalId = setInterval(updateBoardState, 500);
}

//Stop game
function stopGame(){
  clearInterval(intervalId);
}
//Reset game
function resetBoard(){
  board.innerHTML = ""
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
      div.style.borderRadius = "5px"


      let newClass = Math.random() < 0.5 ? 'alive' : 'notAlive';
      div.classList.add(newClass);
      //div.addEventListener('click', toggleCellState);
      div.style.margin = '2px';
      row.appendChild(div);
      divBoard[i].push(div);
    }
    board.appendChild(row);
  }
}

//Count Neighbors
function countNeighbors(x, y) {
  let liveNeighbors = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborX = x + i;
      const neighborY = y + j;
      if (i === 0 && j === 0) continue;// Skip
      if (neighborX >= 0 && neighborX < columns && neighborY >= 0 && neighborY < rows) {
        const neighborDiv = divBoard[neighborY][neighborX];
        if (neighborDiv.classList.contains('alive')) {
          liveNeighbors++;
        }
      }
    }
  }
  console.log("Count liveNeighbors (" + x + ", " + y + "): " + liveNeighbors);
  return liveNeighbors;
}


//Function target
function toggleCellState(event) {
  let div = event.target;
  div.classList.toggle('alive');
}

//Button
start.addEventListener('click', startGame);
stop.addEventListener('click',stopGame);
reset.addEventListener('click',resetBoard);
//marking.addEventListener('click',)
//pixelGun.addEventListener('click',)

