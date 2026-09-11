# Toast Notification System

A lightweight, customizable JavaScript toast notification system built using **Closures** and **Higher-Order Functions**. It dynamically creates, positions, and auto-dismisses toast messages without relying on external libraries.

---

## Features

* **Closure-Based Architecture**: Configures global parameters (position, theme, duration) once and returns a reusable toaster function.
* **Flexible Positioning**: Supports positioning across any corner of the screen using `PositionX` and `PositionY`.
* **Theme Support**: Built-in dark and light modes that auto-adjust notification and background styling.
* **Auto-Dismiss**: Automatically removes individual toast notifications after a configurable timeout duration.

---

## Code Breakdown & Advanced Concepts

### 1. Closures & Configuration Preservation
The core function `startToaster(config)` utilizes a JavaScript closure. When called, it binds the configuration object (`config`) and the parent DOM element (`parent`) in its lexical environment. 

```javascript
let toaster = startToaster({
    PositionX: "left",
    PositionY: "top",
    theme: "dark",
    duration: 3,
});

// The returned function retains access to `config` and `parent`
toaster("Hello Abhishek");
```

### 2. Dynamic DOM Manipulation & Styling
* Configures layout rules using standard inline CSS strings and dynamic inline style overrides via `Object.assign()`.
* Generates `<div>` notification elements dynamically on demand and appends them to the document container.

### 3. Asynchronous Timer Cleanup
Uses `setTimeout` scoped to each created notification element to safely unmount and remove the node from the DOM once the specified duration passes:

```javascript
setTimeout(() => {
    if (parent.contains(div)) {
        parent.removeChild(div);
    }
}, config.duration * 1000);
```

---

## Configuration API

| Parameter | Type | Options | Description |
| :--- | :--- | :--- | :--- |
| `PositionX` | `string` | `"left"` \| `"right"` | Horizontal positioning on the screen |
| `PositionY` | `string` | `"top"` \| `"bottom"` | Vertical positioning on the screen |
| `theme` | `string` | `"dark"` \| `"light"` | Visual color scheme for the canvas and toasts |
| `duration` | `number` | *e.g., `3`* | Time in seconds before the toast is auto-removed |

---

## Getting Started

1. Save the code into an `index.html` file.
2. Open the file in any browser or run it using VS Code Live Server.
3. Call `toaster("Your Message Here")` anywhere in your code to fire a new notification.
