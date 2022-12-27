let sketchbox = document.querySelector("#sketchbox");
let redBtn = document.querySelector("#redBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let yellowBtn = document.querySelector("#yellowBtn");
let greenBtn = document.querySelector("#greenBtn");
let blueBtn = document.querySelector("#blueBtn");
let blackBtn = document.querySelector("#blackBtn");
let purpleBtn = document.querySelector("#purpleBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let grid16 = document.querySelector("#grid16");
let grid24 = document.querySelector("#grid24");
let grid32 = document.querySelector("#grid32");
let grid48 = document.querySelector("#grid48");
let eraseBtn = document.querySelector("#eraseBtn");

let penColor = 'black';
let gridSize = 16;

for (let i = 0; i < 16 ** 2; i++) {
    tile = document.createElement('div')
    tile.classList.add('sketchtile')
    tile.addEventListener('mouseover', (e) => {
        doColor(e);
    })
    sketchbox.appendChild(tile)
}

function doColor(e) {
    if (penColor == "rainbow") {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    e.target.style.backgroundColor = penColor;
};

redBtn.addEventListener('click', () => {
    penColor = "red";
})
orangeBtn.addEventListener('click', () => {
    penColor = "orange";
})
yellowBtn.addEventListener('click', () => {
    penColor = "yellow";
})
greenBtn.addEventListener('click', () => {
    penColor = "green";
})
blueBtn.addEventListener('click', () => {
    penColor = "blue";
})
blackBtn.addEventListener('click', () => {
    penColor = "black";
})
purpleBtn.addEventListener('click', () => {
    penColor = "purple";
})
rainbowBtn.addEventListener('click', () => {
    penColor = "rainbow";
})