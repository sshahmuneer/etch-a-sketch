const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.toggle('grid-square');
    gridSquare.style.width = '60px';
    gridSquare.style.height = '60px';
    // gridSquare.style.backgroundColor = 'yellow';


    gridContainer.appendChild(gridSquare);
}

gridContainer.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue';
})