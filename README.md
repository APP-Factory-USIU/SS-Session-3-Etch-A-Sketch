# Interactive Etch-A-Sketch

Welcome to the **Etch-A-Sketch** project! This is a browser-based drawing tool built with vanilla JavaScript, HTML5, and CSS Grid. Currently, we have the core engine running: a dynamic grid that fills its container and a skeleton for mouse tracking.

## Current Status: The Foundation

The project currently handles the math behind creating a pixel-perfect grid regardless of the screen size.

### 1. Dynamic Grid Calculation

Instead of hard-coding the number of squares, we calculate how many "pixels" (boxes) can fit based on the container's real-time dimensions.

```javascript
const { width: canvasWidth, height: canvasHeight } = canvasContainer.getBoundingClientRect();
const columns = Math.floor(canvasWidth / BOX_SIZE);
const rows = Math.floor(canvasHeight / BOX_SIZE);

```

### 2. High-Performance Rendering

To avoid "layout thrashing" (slowing down the browser by adding elements one by one), we use a **DocumentFragment**. This acts as a virtual container to hold all our divs before injecting them into the DOM all at once.

```javascript
const fragment = document.createDocumentFragment();
// ... loop and append to fragment
canvasContainer.append(fragment);

```

### 3. Event Listeners (The "Drawing" Logic)

We are using a **"Click-and-Drag"** state machine. The app listens for three distinct mouse states:

* **`mousedown`**: The user starts the stroke.
* **`mousemove`**: The user moves the mouse. 
* **`mouseup`**: The user lets go.

---

## 🛠 Features to be Added

We are just getting started! Here is the roadmap for our interactive sessions:

* **✨ Real-Time Coloring:** Implementing the logic to change the background color of the grid cells as the mouse passes over them.
* **🌈 Rainbow Mode:** A brush mode that cycles through randomized RGB values for a psychedelic effect.
* **🖌 Stroke Size Control:** Allowing users to change the `BOX_SIZE` to create thicker or thinner lines.
* **⚙️ Settings Panel:** A dedicated UI sidebar to house color pickers, clear buttons, and toggle switches for different modes.

---

> **Note:** This project is being built iteratively. During the session we will add a layers of interactivity, moving from a static grid to a fully-featured digital drawing pad.

