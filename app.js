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
let randomDiv = document.querySelector(".random")
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

// Start game
function startGame() {
  intervalId = setInterval(updateBoardState, 50);
}

//Stop game
function stopGame(){
  clearInterval(intervalId);
}
//Reset game
function resetBoard(){
  board = createBoard();
}


function createBoard() {
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


// Function marking
function toggleCellState() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let div = divBoard[i][j];
      div.addEventListener('click', function() {
        if (div.classList.contains('alive')) {
          div.classList.remove('alive');
        } else {
          div.classList.add('alive');
        }
      });
    }
  }
}







//Random function
function randElements() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let div = divBoard[i][j];
      let newClass = Math.random() < 0.5 ? 'alive' : 'notAlive';
      div.className = '';
      div.classList.add(newClass);
    }
  }
}

//GliderGun
function GliderGun() {
  const Coordinates = [
    [5, 1], [6, 1], [5, 2], [6, 2],
    [5, 11], [6, 11], [7, 11], [4, 12], [8, 12], [3, 13], [9, 13], [3, 14], [9, 14], [6, 15], [4, 16], [8, 16], [5, 17], [6, 17], [7, 17], [6, 18],
    [3, 21], [4, 21], [5, 21], [3, 22], [4, 22], [5, 22], [2, 23], [6, 23], [1, 25], [2, 25], [6, 25], [7, 25], 
    [3, 35], [4, 35], [3, 36], [4, 36] 
  ];

  for (let i = 0; i < Coordinates.length; i++) {
    const x = Coordinates[i][0];
    const y = Coordinates[i][1];
    divBoard[y][x].classList.add('alive');
  };
}


//Button 
start.addEventListener('click', startGame);
stop.addEventListener('click', stopGame);
reset.addEventListener('click', resetBoard);
marking.addEventListener('click', toggleCellState);
randomDiv.addEventListener('click', randElements);
pixelGun.addEventListener('click', GliderGun); 
// Create board
createBoard();
