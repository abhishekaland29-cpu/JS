let form = document.querySelector("form");
let photo = document.querySelector("#photo");
let username = document.querySelector("#name");
let bio = document.querySelector("#bio");
let role = document.querySelector("#role");

const userManager = {
    users: [],

    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    submitForm: function (e) {
        e.preventDefault();

        this.addUser();
        form.reset();
    },

    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            image: photo.value
        });

        this.renderUI();
    },

    renderUI: function () {
        let container = document.querySelector(".cards-container");
        container.innerHTML = "";

        this.users.forEach((user, index) => {

            const card = document.createElement("div");
            card.className = "user-card";

            const image = document.createElement("img");
            image.className = "user-image";
            image.src = user.image;

            const name = document.createElement("h2");
            name.className = "name";
            name.textContent = user.username;

            const role = document.createElement("p");
            role.className = "role";
            role.textContent = user.role;

            const bio = document.createElement("p");
            bio.className = "bio";
            bio.textContent = user.bio;

            const remove = document.createElement("button");
            remove.className = "remove-btn";
            remove.textContent = "Remove User";

            remove.addEventListener("click", () => {
                this.removeUser(index);
            });

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);
            card.appendChild(remove);

            container.appendChild(card);
        });
    },

    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUI();
    }
};

userManager.init();