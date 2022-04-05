const container = document.getElementById('grid');

function createGrid(rows = 21, cols = 5, startingPay = 16, yearly = 0.25, gradeIncrement = 1) {
    container.style.setProperty('--grid-rows', rows + 1);
    container.style.setProperty('--grid-cols', cols + 1);
    basePay = startingPay;

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
        cell.innerHTML = i;
        if (i == rows - 1) { cell.innerHTML = `${i}+` }
        let pay = basePay

        //now create remaining cells within current row i
        for (j = 0; j < cols; j++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-cell";
            cell.innerHTML = `$${Number.parseFloat(pay).toFixed(2)}`
            pay = pay + gradeIncrement;
        }
        basePay = basePay + yearly;
    }
}

createGrid()