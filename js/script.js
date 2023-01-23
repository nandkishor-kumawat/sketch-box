let sketchbox = document.querySelector("#sketchbox"),
    eraseBtn = document.querySelector("#eraseBtn"),
    gridBtn = document.querySelectorAll(".gridBtn"),
    colorBtn = document.querySelectorAll(".colorBtn"),
    gridSize = 16,
    penColor = 'black';

const createTiles = val => {
    sketchbox.innerHTML = "";
    if (val) gridSize = val;
    for (let i = 0; i < gridSize ** 2; i++) {
        tile = document.createElement('div');
        tile.classList.add('sketchtile');
        tile.classList.add(`tile-${gridSize}`);
        tile.onmouseover = () => doColor();
        tile.ontouchmove = () => doColor();
        sketchbox.appendChild(tile);
    }
}

const doColor = () => {
   let e = event.type == "touchmove" ? event.touches[0] : event
//    console.log(event)
    if (penColor == "rainbow") {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    e.target.style.backgroundColor = penColor;
};

colorBtn.forEach(btn => btn.onclick = () => penColor = (btn.textContent).toLowerCase());
gridBtn.forEach(btn => btn.onclick = () => createTiles(btn.getAttribute('gridSize')));
eraseBtn.onclick = () => createTiles();
createTiles();