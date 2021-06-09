import colors from './colors.js';
import randomIntegerFromInterval from './random-integer.js'

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
}

let changeColorId;

const newRandomColor = () =>
    refs.bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

function clickOnStart() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    changeColorId = setInterval(newRandomColor, 1000);
}

function clickOnStop() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(changeColorId);
}

refs.startBtn.addEventListener('click', clickOnStart);
refs.stopBtn.addEventListener('click', clickOnStop);