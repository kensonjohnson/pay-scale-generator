const container = document.getElementById('grid');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let square = document.createElement("div");
        container.appendChild(square).className = "grid-square";
        square.innerHTML = i + 1;
    }
}

createGrid(9, 5)