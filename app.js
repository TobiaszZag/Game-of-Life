//debugger;

let rows = 10;
let columns = 10;

let start = document.querySelector(".start");
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
    Interval= setInterval(updateBoardState, 1000)
}

function stopGame(){
  clearInterval(Interval);
}




function pressStart() {
  board.innerHTML = '';
  divBoard = []; // Resetowanie tablicy divBoard
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    divBoard.push([]);
    for (let j = 0; j < columns; j++) {
      let div = document.createElement('div');
      div.style.border = '1px solid black';
      div.style.width = '20px';
      div.style.height = '20px';
      div.style.backgroundColor = Math.random() < 0.7 ? 0 : 'black'; // czarna zywa
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

function countNeighbors(x, y) {
  let liveNeighbors = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const neighborX = x + i;
      const neighborY = y + j;
      if (i === 0 && j === 0) continue; // Pomijamy bieżącą komórkę
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


start.addEventListener('click', pressStart);
start.addEventListener('click', function () {
  let newBoard = [];
  for (let y = 0; y < rows; y++) {
    newBoard.push([]);
    for (let x = 0; x < columns; x++) {
      const div = divBoard[y][x];
      if (div.classList.contains('zywa')) {
        newBoard[y][x] = 1;
      } else {
        newBoard[y][x] = 0;
      }
      
    }
  }

  //wyciaganie x i y
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      console.log("x:", x, "y:", y);
      countNeighbors(x, y, newBoard);
    }
  }
});


start.addEventListener('click', updateBoardState);
//start.addEventListener('click',stopGame);
//stop.addEventListener('click',stopInt);
//reset.addEventListener('click',resetBoard);


