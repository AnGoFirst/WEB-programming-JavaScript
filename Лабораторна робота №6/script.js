const levels = ['a', 'b', 'c'];
let currentLevel = 0;
let board = [];
let timer = 0;
let interval = null;
let moves = 0;
let targetMoves = 0;

const grid = document.getElementById("grid");
const timerEl = document.getElementById("timer");
const movesEl = document.getElementById("moves");
const targetEl = document.getElementById("target");
const newGameBtn = document.getElementById("newGame");
const restartBtn = document.getElementById("restartLevel");

newGameBtn.addEventListener("click", () => {
  currentLevel = (currentLevel + 1) % levels.length;
  loadLevel(levels[currentLevel]);
});
restartBtn.addEventListener("click", () => loadLevel(levels[currentLevel]));

function loadLevel(levelName) {
  fetch(`data/level_${levelName}.json`)
    .then(res => res.json())
    .then(data => {
      board = data.board;
      targetMoves = data.target;
      resetGame();
    });
}

function resetGame() {
  clearInterval(interval);
  timer = 0;
  moves = 0;
  timerEl.textContent = timer;
  movesEl.textContent = moves;
  targetEl.textContent = targetMoves;
  interval = setInterval(() => {
    timer++;
    timerEl.textContent = timer;
  }, 1000);
  renderBoard();
}

function renderBoard() {
  grid.innerHTML = "";
  board.forEach((row, y) => {
    row.forEach((cell, x) => {
      const btn = document.createElement("button");
      btn.className = `cell ${cell ? "on" : ""}`;
      btn.addEventListener("click", () => handleClick(x, y));
      grid.appendChild(btn);
    });
  });
}

function handleClick(x, y) {
  toggle(x, y);
  toggle(x - 1, y);
  toggle(x + 1, y);
  toggle(x, y - 1);
  toggle(x, y + 1);
  moves++;
  movesEl.textContent = moves;
  renderBoard();
  if (checkWin()) {
    clearInterval(interval);
    alert(`Перемога за ${moves} ходів та ${timer} сек!`);
  }
}

function toggle(x, y) {
  if (x >= 0 && x < 5 && y >= 0 && y < 5) {
    board[y][x] = board[y][x] ? 0 : 1;
  }
}

function checkWin() {
  return board.flat().every(cell => cell === 0);
}

window.onload = () => loadLevel(levels[currentLevel]);