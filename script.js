// Our grid of pixels will go here
const sketchpad = document.querySelector("#sketchpad");

// Initialize some defaults on page load
const defaultSize = 32;
makeGrid(defaultSize);
let paintBrush = false;
let randomColor = false;

// Use buttons to change grid resolution
const button32 = document.querySelector("#select32");
button32.addEventListener("click", () => {
  removeGrid();
  makeGrid(32);
});
const button64 = document.querySelector("#select64");
button64.addEventListener("click", () => {
  removeGrid();
  makeGrid(64);
});
const button96 = document.querySelector("#select96");
button96.addEventListener("click", () => {
  removeGrid();
  makeGrid(96);
});

// Activate paint brush on mousedown
const webPage = document.querySelector("html");
webPage.addEventListener("mousedown", () => {
  paintBrush = true;
});
webPage.addEventListener("mouseup", () => {
  paintBrush = false;
});

// Use buttons to change pixel colors
const bwButton = document.querySelector("#blackButton");
bwButton.addEventListener("click", () => {
  randomColor = false;
});
const rainbowButton = document.querySelector("#rainbowButton");
rainbowButton.addEventListener("click", () => {
  randomColor = true;
});

// Behold the functions!
function removeGrid() {
  while (sketchpad.firstChild) {
    sketchpad.removeChild(sketchpad.lastChild);
  }
}

function makeGrid(res) {
  let pixelRes = `res${res}`;
  let pixelTotal = res * res;
  for (let i = 0; i < pixelTotal; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel", pixelRes);
    pixel.addEventListener("mouseover", (e) => {
      let targetPixel = e.target;
      colorPixel(targetPixel);
    });
    sketchpad.appendChild(pixel);
  }
}

// Define 16 color palette
const black = "#4c4f69";
const white = "#eff1f5";
const rosewater = "#dc8a78";
const flamingo = "#dd7878";
const pink = "#ea76cb";
const mauve = "#8839ef";
const red = "#d20f39";
const maroon = "#e64553";
const peach = "#fe640b";
const yellow = "#df8e1d";
const green = "#40a02b";
const teal = "#179299";
const sky = "#04a5e5";
const sapphire = "#209fb5";
const blue = "#1e66f5";
const lavender = "#7287fd";

function colorPixel(targetPixel) {
  if (paintBrush) {
    if (!randomColor) {
      targetPixel.style.backgroundColor = black;
    } else {
      targetPixel.style.backgroundColor = getRandomColor();
    }
  }
}

function getRandomColor() {
  const randomNumber = Math.floor(Math.random() * 14);
  switch (randomNumber) {
    case 0:
      return rosewater;
    case 1:
      return flamingo;
    case 2:
      return pink;
    case 3:
      return mauve;
    case 4:
      return red;
    case 5:
      return maroon;
    case 6:
      return peach;
    case 7:
      return yellow;
    case 8:
      return green;
    case 9:
      return teal;
    case 10:
      return sky;
    case 11:
      return sapphire;
    case 12:
      return blue;
    case 13:
      return lavender;
  }
}
