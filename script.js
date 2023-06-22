const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

gridContainer.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'blue';
})

slider.addEventListener('input', (event) => {
    sliderValue.textContent = `Slider value is: ${slider.value}`;
    createGrid(+slider.value);
})

function createGrid(numberOfSquaresPerSide) {
    gridContainer.replaceChildren();   
    const totalNumberOfSquares = numberOfSquaresPerSide * numberOfSquaresPerSide;

    for (let i = 0; i < totalNumberOfSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.toggle('grid-square');
        gridSquare.style.width = `${960/numberOfSquaresPerSide}px`;
        gridSquare.style.height = `${960/numberOfSquaresPerSide}px`;    
        gridContainer.appendChild(gridSquare);
    }
}

sliderValue.textContent = `Slider value is: ${slider.value}`;
createGrid(+slider.value);