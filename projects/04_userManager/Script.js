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
        console.log("Form Submitted.");
        this.addUser();
        form.reset();
    },
    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            image: photo.value,
        });
        this.renderUI();
    },
    renderUI: function () {

        document.querySelector(".cards-container").innerHTML= " ";

        this.users.forEach(function (user) {
            const card = document.createElement("div");
            card.className = "user-card";

            const image = document.createElement("img");
            image.className = "user-image";
            image.id = "photo";
            image.src = user.image;
            image.alt = "John Doe";

            const name = document.createElement("h2");
            name.className = "name";
            name.id = "name";
            name.textContent = user.username;

            const role = document.createElement("p");
            role.className = "role";
            role.id = "role";
            role.textContent = user.role;

            const bio = document.createElement("p");
            bio.className = "bio";
            bio.id = "bio";
            bio.textContent = user.bio;

            const remove = document.createElement("button");
            remove.className = "remove-btn";
            remove.id = "remove-btn";
            remove.textContent = "Remove User";

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);
            card.appendChild(remove);
            
            document.querySelector(".cards-container").appendChild(card);
        })
        
    },

    removeUser: function () {},
};

userManager.init();