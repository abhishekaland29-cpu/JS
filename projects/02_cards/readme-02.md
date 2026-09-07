# 📇 User Contact & Modal UI App

A sleek, dark-themed interactive contact card dashboard built with pure HTML, CSS, and vanilla JavaScript. This app allows users to dynamically create, store, cycle through, and view contact notes with stacked visual cards and local persistence.

---

## ✨ Features

- 🗂 **Dynamic Card Generation:** Form inputs dynamically generate contact cards in real time.
- 💾 **Local Storage Persistence:** All created contacts are saved directly in the browser's `localStorage` so data remains saved upon refresh.
- 🎴 **Stacked Card Cycling:** Cycle through contact cards using the up (↑) and down (↓) navigation buttons with automatic stacked positioning.
- 🎨 **Dark Theme UI:** Built using modern CSS styling, including layered shadow effects, responsive buttons, and stacked card styling.
- 📝 **Modal Form:** Modal form layout for capturing profile details like Image URL, Full Name, Home Town, Purpose, and Call Category.

---

## 🛠 Tech Stack

- **HTML5:** Semantic markup structure.
- **CSS3:** Flexbox layout, CSS positioning (`z-index`, `transform`), and dark mode styling.
- **JavaScript (ES6):** DOM Manipulation, Event Handling, and `localStorage` integration.

---

## 🚀 Getting Started

### Prerequisites
All you need is a web browser (Google Chrome, Firefox, Safari, Edge, etc.).

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishekaland29-cpu/JS.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd YOUR_REPOSITORY_NAME
   ```

3. **Run the project:**
   Simply open the `index.html` file directly in your web browser, or launch it using VS Code's **Live Server** extension.

---

## 📖 How To Use

1. **Add a New Contact:**
   - Click the **`+`** button on the left navigation panel to reveal the modal form.
   - Enter the required fields (*Image URL, Full Name, Home Town, Purpose, and Category*).
   - Click **Create Note** to add the contact to your stack.

2. **Cycle Through Cards:**
   - Click the **↑ (Up)** or **↓ (Down)** arrows on the left controls bar to cycle through cards stored in your stack.

3. **Close Modal:**
   - Click the **Close** button inside the form modal to dismiss the overlay without submitting.

---

## 📂 Project Structure

```text
├── index.html     # Main HTML document structure
├── style.css      # Custom stylesheet for dark theme layout & card stack
└── script.js      # App functionality (DOM logic, local storage, card reordering)
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check out the [issues page](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME/issues).

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
