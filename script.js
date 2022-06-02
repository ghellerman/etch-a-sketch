//Default Settings

const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

//Grabbing elements from the DOM

const colorPicker = document.getElementById('colorPicker');
const drawButton = document.getElementById('drawBtn');
const eraseButton = document.getElementById('eraseBtn');
const clearButton = document.getElementById('clearBtn');
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

//Settings Menu Logic

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

colorPicker.onInput = (e) => setCurrentColor(e.target.value);
drawButton.onClick = () => setCurrentMode("draw");
eraseButton.onClick = () => setCurrentMode("erase");
clearButton.onClick = () => setCurrentMode("clear");