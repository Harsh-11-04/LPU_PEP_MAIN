const puzzle = document.getElementById("puzzle");
const shuffleBtn = document.getElementById("shuffleBtn");

let selected = null;

// Build tiles 0–8
let tiles = [];
for (let i = 0; i < 9; i++) {
  tiles.push(i);
}

// Create puzzle
function drawPuzzle() {
  puzzle.innerHTML = "";
  tiles.forEach(index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    // Position part of the background
    const x = (index % 3) * -100;
    const y = Math.floor(index / 3) * -100;
    tile.style.backgroundPosition = `${x}px ${y}px`;
    tile.dataset.index = index;

    // Click handler
    tile.addEventListener("click", () => {
      if (!selected) {
        selected = tile;
        tile.style.border = "3px solid #ff0";
      } else {
        swapTiles(selected, tile);
        selected.style.border = "2px solid #fff";
        selected = null;
        drawPuzzle();
      }
    });

    puzzle.appendChild(tile);
  });
}

// Swap positions and redraw
function swapTiles(a, b) {
  const i1 = parseInt(a.dataset.index);
  const i2 = parseInt(b.dataset.index);

  const pos1 = tiles.indexOf(i1);
  const pos2 = tiles.indexOf(i2);

  tiles[pos1] = i2;
  tiles[pos2] = i1;
}

// Shuffle function
function shuffle() {
  tiles.sort(() => Math.random() - 0.5);
  drawPuzzle();
}

shuffleBtn.addEventListener("click", shuffle);

// First draw
drawPuzzle();
