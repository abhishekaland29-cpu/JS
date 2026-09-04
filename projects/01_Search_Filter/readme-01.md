# User Cards Search Application

A lightweight, high-performance web application that dynamically renders user profile cards and provides real-time, case-insensitive live search capabilities. Built with modern JavaScript (ES6+), clean HTML5, and CSS3.

---

## 🚀 Features

- **Dynamic DOM Rendering**: Uses JavaScript `DocumentFragment` to batch DOM updates, preventing unnecessary layout reflows and repaints.
- **Real-Time Live Search**: Instant filtering of user profile cards as the user types in the input field.
- **Flexible Filtering**: Performs case-insensitive matching across full names using string `.includes()`.
- **Responsive Layout**: Designed to present aesthetic glassmorphic/blurred card backgrounds cleanly across various screen sizes.
- **Lazy Loading**: Native `loading="lazy"` attributes on profile images for optimal performance and bandwidth efficiency.
- **Empty State Handling**: Gracefully informs the user when no profiles match the search query.

---

## 🛠️ Tech Stack

- **HTML5**: Structural markup and semantic input fields.
- **CSS3**: Layout styling, dynamic blurring background effects, and card container grids.
- **JavaScript (ES6+)**: Functional array operations (`filter`, `forEach`), object destructuring, dynamic DOM creation, and event handling.

---

## 📂 Project Structure

```text
user-cards-search/
│
├── index.html        # Main HTML file with input field and card container
├── style.css         # Styling for cards, background layers, and layout grid
└── app.js            # User data array, DOM rendering logic, and search handler
```

---

## 🖥️ Getting Started

### Prerequisites

No external dependencies or package managers (like Node.js or NPM) are required. Any modern standard browser (Chrome, Firefox, Edge, Safari) can run this project locally.

### Installation & Execution

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/user-cards-search.git
   cd user-cards-search
   ```

2. **Open the Project**:
   Double-click `index.html` or open it with your browser of choice. Alternatively, serve it using VS Code's **Live Server** extension.

---

## 💻 Code Overview

### User Data Model
Users are stored as an array of objects containing `name`, `pic` (image link), and `bio`.

```javascript
const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone"
    },
    // ... remaining user objects
];
```

### Optimized Rendering Engine
Using `DocumentFragment` ensures all elements are constructed off-screen before being inserted into the live DOM in a single operation:

```javascript
function renderUsers(userList) {
    cardsContainer.innerHTML = "";
    
    if (userList.length === 0) {
        cardsContainer.innerHTML = `<p class="no-results">No users found</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    userList.forEach(({ name, pic, bio }) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${pic}" class="bg-img" alt="${name}" loading="lazy">
            <div class="blurred-layer" style="background-image: url('${pic}')"></div>
            <div class="content">
                <h3>${name}</h3>
                <p>${bio}</p>
            </div>
        `;

        fragment.appendChild(card);
    });

    cardsContainer.appendChild(fragment);
}
```

---

## ⚡ Performance Optimization Highlights

1. **Reflow & Repaint Minimization**: Instead of modifying `document.body` or `.cards` on every iteration of the loop, nodes are built in memory via `DocumentFragment`.
2. **Flexible Search**: Switching from `startsWith` to `includes` coupled with `.toLowerCase()` ensures natural search results regardless of casing or word position.
3. **Template Literals**: Clean template strings improve readability over fragmented `.appendChild()` statements while retaining execution speed.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).