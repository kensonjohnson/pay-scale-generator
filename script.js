const container = document.getElementById('grid');

function createGrid(rows = 20, cols = 5) {
    container.style.setProperty('--grid-rows', rows + 1);
    container.style.setProperty('--grid-cols', cols + 1);

    //run one loop to create legend accross top of grid
    for (i = 0; i <= cols; i++) {

        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-cell";
        if (i == 0) {
            cell.innerHTML = "Years Served"
        } else {
            cell.innerHTML = `Grade ${i}`
        }
    };

    //create loop that generates remaining cells
    for (i = 0; i < rows; i++) {
        //first create cell for side legend
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-cell";
        cell.innerHTML = i + 1;
        if (i == rows - 1) { cell.innerHTML = `${i+1}+` }

        //now create remaining cells within current row i
        for (j = 0; j < cols; j++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-cell";
            cell.innerHTML = `$${j + 1}`
        }
    }
}

createGrid()