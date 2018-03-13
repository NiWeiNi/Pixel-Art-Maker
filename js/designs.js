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
    for (let w = 0; w < width; w++) {
        
        let tr = document.createElement('tr');
        table.appendChild(tr);

        // Create columns of the table
        for (let c = 0; c < height; c++) {

            let td = document.createElement('td');
            table.lastChild.append(td);
        }
    }

    // Select cells table
    let cells = table.querySelectorAll('td');

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

// When size is submitted by the user, call makeGrid()
 document.querySelector('input[type="submit"]').addEventListener('click', (function(event) {
    event.preventDefault();
    makeGrid();
 }));

 // TODO
 // Add a button random and a function to create a completly random painting
 // everytime the random button is hit
