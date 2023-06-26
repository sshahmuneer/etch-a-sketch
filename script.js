const gridContainer = document.querySelector('.grid-container');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const form = document.querySelector('form');
let selectedColor = document.querySelector('#selected-color');
let gridEffect = form.querySelector('input[name="grid-effect"]:checked');

form.addEventListener('change', (event) => {
    gridEffect = event.target;
});

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-square')) {
        if (gridEffect.value === 'random-color') {
            event.target.style.backgroundColor = randomColor();
        } else if (gridEffect.value === 'progressive-darkener'){
            let currentBrightnessValue = event.target.style.filter.replace(/[^.\d]/g, '');
            if (currentBrightnessValue !== '0') {
                currentBrightnessValue ||= 1;
                // +currentBrightnessValue;
                let newBrightnessValue = +currentBrightnessValue - 0.1;
                event.target.style.filter = `brightness(${newBrightnessValue})`;
            }
        } else if (gridEffect.value === 'user-selected-color'){
            event.target.style.backgroundColor = selectedColor.value;
        } 
    }
});

slider.addEventListener('input', (event) => {
    sliderValue.textContent = `Slider value is: ${slider.value}`;
    createGrid(+slider.value);
});

function createGrid(numberOfSquaresPerSide) {
    gridContainer.replaceChildren();   
    const totalNumberOfSquares = numberOfSquaresPerSide * numberOfSquaresPerSide;

    for (let i = 0; i < totalNumberOfSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.toggle('grid-square');
        gridSquare.style.width = `${600/numberOfSquaresPerSide}px`;
        gridSquare.style.height = `${600/numberOfSquaresPerSide}px`;    
        gridContainer.appendChild(gridSquare);
    }
}

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

function randomColor() {
    const color = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
    return color;
}

sliderValue.textContent = `Slider value is: ${slider.value}`;
createGrid(+slider.value);