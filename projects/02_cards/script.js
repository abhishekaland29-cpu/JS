// create Array to store data
const tasks = [];

// All Variable Declared
let addNew = document.querySelector("#btn-add-new");
let cardSection = document.querySelector(".card-section");
let upBtn = document.querySelector("#up-btn");
let downBtn = document.querySelector("#down-btn");

// Modal & Form Elements
let modalCard = document.querySelector(".modal-card");
const callForm = document.querySelector("#call-form");

// Input Fields
const imageUrlInput = document.querySelector("#image-url");
const fullNameInput = document.querySelector("#full-name");
const homeTownInput = document.querySelector("#home-town");
const purposeInput = document.querySelector("#purpose");

// Action Buttons
const createBtn = document.querySelector(".btn-create");
let closeForm = document.querySelector("#btn-reset");


// Local Storage Function
function saveToLocalStorage(obj) {
    if (localStorage.getItem("tasks") === null) {
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    } else {
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
};

// Modal Open / Close
addNew.addEventListener("click", function () {
    modalCard.style.display = "initial";
});

closeForm.addEventListener("click", function () {
    modalCard.style.display = "none";
});

// Form Submit Event
callForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const imageURL = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    const selected = document.querySelector(
        'input[name="category"]:checked'
    ).value;

    alert("Form Submitted");

    callForm.reset();

    saveToLocalStorage({
        imageURL,
        fullName,
        homeTown,
        purpose,
        selected
    });

    // Form submit karne par cards wapas screen pe render honge
    showcards();
});

// Show Cards Function
function showcards() {
    let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Screen ko clear karna taaki purane cards repeat na ho
    
    if(cardSection) {
        cardSection.innerHTML = "";
    }

    allTasks.forEach(function (task) {
        // Main card
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        // Card Header
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        userCard.appendChild(cardHeader);

        // Avatar
        const avatar = document.createElement("img");
        avatar.src = task.imageURL;
        avatar.alt = "Avatar";
        avatar.classList.add("avatar");
        cardHeader.appendChild(avatar);

        // User Name
        const userName = document.createElement("h2");
        userName.classList.add("user-name");
        userName.textContent = task.fullName;
        cardHeader.appendChild(userName);

        // Details Row 1
        const detailsRow1 = document.createElement("div");
        detailsRow1.classList.add("details-row");
        userCard.appendChild(detailsRow1);

        const label1 = document.createElement("span");
        label1.classList.add("label");
        label1.textContent = "Home town";
        detailsRow1.appendChild(label1);

        const value1 = document.createElement("span");
        value1.classList.add("value");
        value1.textContent = task.homeTown;
        detailsRow1.appendChild(value1);

        // Details Row 2
        const detailsRow2 = document.createElement("div");
        detailsRow2.classList.add("details-row");
        userCard.appendChild(detailsRow2);

        const label2 = document.createElement("span");
        label2.classList.add("label");
        label2.textContent = "Purpose";
        detailsRow2.appendChild(label2);

        const value2 = document.createElement("span");
        value2.classList.add("value");
        value2.textContent = task.purpose;
        detailsRow2.appendChild(value2);

        // Card Actions
        const cardActions = document.createElement("div");
        cardActions.classList.add("card-actions");
        userCard.appendChild(cardActions);

        // Call Button
        const callButton = document.createElement("button");
        callButton.classList.add("btn-call");
        cardActions.appendChild(callButton);

        // Call Icon
        const callIcon = document.createElement("span");
        callIcon.classList.add("xyz");
        callIcon.innerHTML = "&#128222; Call";
        callButton.appendChild(callIcon);

        // Message Button
        const messageButton = document.createElement("button");
        messageButton.classList.add("btn-message");
        messageButton.textContent = "Message";
        cardActions.appendChild(messageButton);

        // Add card to section
        if(cardSection) {
            cardSection.appendChild(userCard);
        }
    });
};

showcards();

function updatecard(){
    const cards = document.querySelectorAll(".card-section.user-card");

    cards.forEach(function (card, index){
        card.style.zIndex = 3 - index ;
        card.style.transform = `translateY(${index*10}px) scale(${1 - index * 0.02})`;
        card.style.opacity = `${1 - index * 0.02}`;
    })
};

upBtn.addEventListener("click", function(){
    let lastChild = cardSection.lastElementChild;
    if (lastChild) {
        cardSection.insertBefore(lastChild, cardSection.firstElementChild);
        //update
        updatecard();
    }
});
downBtn.addEventListener("click", function(){
    let firstChild = cardSection.firstElementChild;
    if (firstChild) {
        cardSection.insertBefore(firstChild, cardSection.lastChildElementChild);
        //update
        updatecard();
    }
});