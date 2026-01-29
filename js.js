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
  console.log("mouse moving");
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
