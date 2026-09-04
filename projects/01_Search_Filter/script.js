const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "kiara mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
        name: "aanya kapoor",
        pic: "https://images.stockcake.com/public/8/e/e/8eed93c3-1f8b-43d1-9e9f-e9a3d645478e_large/professional-woman-smiling-stockcake.jpg",
        bio: "chasing sunsets & good vibes 🌅 | golden hour enthusiast",
    },
    {
        name: "rohan sharma",
        pic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg",
        bio: "building things that matter 💻 | code, workout, repeat 🏋️‍♂️",
    },
    {
        name: "sanya verma",
        pic: "https://imgcdn.stablediffusionweb.com/2024/10/15/075053e6-f7c5-4520-9130-fe28c9c962f4.jpg",
        bio: "lost in the rhythm 🎧 | art, music & quiet conversations 🎨",
    },
    {
        name: "kabir singhania",
        pic: "https://tse4.mm.bing.net/th/id/OIP.b78N9KwnDfJZuBh5w_9qbgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        bio: "exploring the unexplored 🏔️ | travel addict & storyteller",
    }
];

// Cache DOM references
const cardsContainer = document.querySelector(".cards");
const inputElement = document.querySelector(".inp");

// Render users using DocumentFragment to reduce DOM reflows
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

// Case-insensitive flexible search (includes match instead of strictly startsWith)
function handleSearch(event) {
    const query = event.target.value.trim().toLowerCase();
    
    const filteredUsers = users.filter((user) => 
        user.name.toLowerCase().includes(query)
    );

    renderUsers(filteredUsers);
}

// Initial Render & Event Listener
renderUsers(users);
inputElement.addEventListener("input", handleSearch);