const container = document.getElementById('grid');
const header = document.getElementById('header');
const submitButton = document.querySelector(('[data-submit-button]'));
let rows;
let cols;
let startingPay;
let yearly;
let gradeIncrement;
let companyName;
let departmentName;

function createHeader() {
    if (companyName === null) return;
    let title = document.createElement("div");
    header.appendChild(title).className = "title";
    title.innerHTML = `${companyName} ${departmentName} Pay Scale`
}

function createGrid() {
    //erase all HTML within the grid div, in case a grid already exists
    container.innerHTML = '';

    //set the CSS values for the grid template rows and cols
    container.style.setProperty('--grid-rows', rows + 1);
    container.style.setProperty('--grid-cols', cols + 1);


    let basePay = startingPay;

    //run one loop to create legend accross top of grid
    for (i = 0; i <= cols; i++) {

        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-cell";
        if (i == 0) {
            cell.innerHTML = "Years Served";
        } else {
            cell.innerHTML = `Grade ${i}`;
        }
    };

    //create loop that generates remaining cells
    for (i = 0; i <= rows; i++) {
        //first create cell for side legend
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-cell";
        cell.innerHTML = i;
        if (i == rows) { cell.innerHTML = `${i}+` }
        let pay = basePay;

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

//this sets all of the current user inputs diplayed on screen to the currect
//variables and makes sure that they are parsed as a number. Then creates new grid.
function handleForm() {
    rows = parseInt(document.getElementById('rows').value);
    cols = parseInt(document.getElementById('cols').value);
    startingPay = parseFloat(document.getElementById('startingPay').value);
    yearly = parseFloat(document.getElementById('yearly').value);
    gradeIncrement = parseFloat(document.getElementById('gradeIncrement').value);
    companyName = document.getElementById('companyName').value;
    departmentName = document.getElementById('departmentName').value;

    createHeader();
    createGrid();
}

//set event listener for submit button
submitButton.addEventListener('click', button => {
    handleForm();
})