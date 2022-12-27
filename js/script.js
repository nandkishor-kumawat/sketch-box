let sketchbox = document.querySelector("#sketchbox");
let redBtn = document.querySelector("#redBtn");
let aquaBtn = document.querySelector("#aquaBtn");
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

let gridSize = 16;
let penColor = 'black';

grid16.onclick = () => {
    gridSize = 16;
    createTiles();
};
grid24.onclick = () => {
    gridSize = 24;
    createTiles();
};
grid32.onclick = () => {
    gridSize = 32;
    createTiles();
};
grid48.onclick = () => {
    gridSize = 48;
    createTiles();
};

eraseBtn.onclick = () => createTiles();

redBtn.onclick = () => penColor = "red";
aquaBtn.onclick = () => penColor = "aqua";
yellowBtn.onclick = () => penColor = "yellow";
greenBtn.onclick = () => penColor = "green";
blueBtn.onclick = () => penColor = "blue";
blackBtn.onclick = () => penColor = "black";
purpleBtn.onclick = () => penColor = "purple";
rainbowBtn.onclick = () => penColor = "rainbow";

function createTiles(){
    sketchbox.innerHTML = "";
    for (let i = 0; i < gridSize ** 2; i++) {
        tile = document.createElement('div');
        tile.classList.add('sketchtile');
        if(gridSize == 16) tile.classList.add('tile-16');
        if(gridSize == 24) tile.classList.add('tile-24');
        if(gridSize == 32) tile.classList.add('tile-32');
        if(gridSize == 48) tile.classList.add('tile-48');
        tile.addEventListener('mouseover', (e) => {
            doColor(e);
        })
        sketchbox.appendChild(tile);
    }
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

createTiles(16);