const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;


//Grabbing elements from the DOM
const drawButton = document.getElementById('drawBtn');
const eraseButton = document.getElementById('eraseBtn');
const clearButton = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

drawButton.onclick = () => setCurrentMode('draw');
eraseButton.onclick = () => setCurrentMode('erase');
clearButton.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;
}

function clearGrid() {
    grid.innerHTML = '';
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'draw') {
        e.target.style.backgroundColor = '#000000';
    }
    else if (currentMode === 'erase') {
        e.target.style.backgroundColor = '#f2f2f2';
    }
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`; 

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}
