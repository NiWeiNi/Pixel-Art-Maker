// Select color input

function makeGrid() {

    // Select size input
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWeight').value;

    // Select table
    let table = document.querySelector('#pixelCanvas');

    // Delete previous table
    table.remove();

    // Create new table
    table = document.createElement('table')

    // Add previous ID
    table.id = 'pixelCanvas';

    // Append table to body
    document.querySelector('body').append(table);

    // Create rows of the table
    for (let w = 0; w < height; w++) {
        
        let tr = document.createElement('tr');
        table.appendChild(tr);

        // Create columns of the table
        for (let c = 0; c < width; c++) {

            let td = document.createElement('td');
            table.lastChild.append(td);
        }
    }
}

// Add event listener on table
function tableEventListener(){
    let cells = document.querySelector("#pixelCanvas").querySelectorAll('td');

    // Add EventListener on cells
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
             // Store color
            let color = document.querySelector('input[type="color"]').value;
            // Set background color to color picked
            cells[i].style.background = color;
        });
    }
}

// Random color filling cells
function randomFilling() {
    // Select cells table
    let cells = document.querySelector('#pixelCanvas').querySelectorAll('td');

    for (let i = 0; i < cells.length; i++) {
        // Create a random color
        function randomNumber() {
            return Math.floor(255 * Math.random());
        }
        const colorArray = [randomNumber(), randomNumber(), randomNumber()];
        let randomColor = "rgb(" + colorArray.join(",") + ")";
    
        // Set background color to random color
        cells[i].style.background = randomColor;
        }
}

// When size is submitted by the user, call makeGrid()
 document.querySelector('input[type="submit"]').addEventListener('click', (function(event) {
    event.preventDefault();
    makeGrid();
    tableEventListener();
 }));

 // When size is submitted by the user, call randomFilling()
 document.querySelector('#random').addEventListener('click', (function(event) {
    event.preventDefault();
    makeGrid();
    randomFilling();
    tableEventListener();
 }));