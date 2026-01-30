let COLOR = "black";
let isErasing = false;
const BOX_SIZE = 10;

const canvasContainer = document.querySelector(".canvas-container");

const setUpCanvas = () => {
  const { width: canvasWidth, height: canvasHeight } =
    canvasContainer.getBoundingClientRect(); //allows us to get dimensions of an element
  const columns = Math.floor(canvasWidth / BOX_SIZE);
  const rows = Math.floor(canvasHeight / BOX_SIZE);

  canvasContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  canvasContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < columns * rows; ++i) {
    const div = document.createElement("div");
    div.className = "canvas-color-boxes";
    fragment.append(div);
  }

  canvasContainer.append(fragment);
};

setUpCanvas();

window.addEventListener("resize", () => {
  setUpCanvas();
});

const handleMouseMove = (e) => {
  console.log(e);

  if (!e.target.classList.contains("canvas-color-boxes")) return;

  if (isErasing) {
    eraseBox(e);
  } else {
    colorBox(e);
  }
};

const colorBox = (e) => {
  e.target.style.backgroundColor = COLOR;
};

const eraseBox = (e) => {
  //we add eraser into html
  //we track the mousemove
  //update eraser position
  eraser.style.left = e.clientX - eraser.clientWidth / 2 + "px";
  eraser.style.top = e.clientY - eraser.clientHeight / 2 + "px";
  e.target.style.backgroundColor = "white";

  //check the boxes that are within the eraser's bounds
  //we flip bg color to white
  const boxes = document.querySelectorAll(".canvas-color-boxes");

  for (const box of boxes) {
    const bounds = box.getBoundingClientRect();
    //left, right, bottom, top
    //eraser - > left, right, bottom, top
  }
};

const handleMouseUp = (e) => {
  console.log("mouse up fired");
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
};

const handleMouseDown = (e) => {
  console.log("mouse down fired");
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
};

canvasContainer.addEventListener("mousedown", handleMouseDown);

strokeBtn.addEventListener("click", (e) => (isErasing = false));
eraserBtn.addEventListener("click", (e) => (isErasing = true));
