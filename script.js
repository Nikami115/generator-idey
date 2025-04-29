let ideas = [
    { text: "Створи інтернет-магазин з хендмейдом", category: "бізнес" },
    { text: "Запусти YouTube-канал про своє місто", category: "творчість" },
    { text: "Пройди безкоштовний курс на Coursera", category: "освіта" },
    { text: "Створи свій подкаст", category: "творчість" },
    { text: "Організуй ярмарок на районі", category: "допомога" },
    { text: "Почни вести щоденник", category: "саморозвиток" },
    { text: "Створи мобільний додаток для школярів", category: "освіта" },
    { text: "Зроби настільну гру зі своїми правилами", category: "розваги" },
    { text: "Вивчи нову навичку за 7 днів", category: "саморозвиток" },
    { text: "Запусти блог з порадами для студентів", category: "хобі" }
];

let currentIdea = "";

function generateIdea() {
    const selectedCategory = document.getElementById("category").value;

    let filteredIdeas = ideas;
    if (selectedCategory !== "all") {
        filteredIdeas = ideas.filter(idea => idea.category === selectedCategory);
    }

    if (filteredIdeas.length === 0) {
        document.getElementById("idea-box").innerText = "Немає ідей у цій категорії 😢";
        currentIdea = "";
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    currentIdea = filteredIdeas[randomIndex].text;
    document.getElementById("idea-box").innerText = currentIdea;
}

function saveIdea() {
    if (!currentIdea) return;
    const savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];

    if (!savedIdeas.includes(currentIdea)) {
        savedIdeas.push(currentIdea);
        localStorage.setItem("savedIdeas", JSON.stringify(savedIdeas));
        renderSavedIdeas();
    }
}

function renderSavedIdeas() {
    const savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];
    const list = document.getElementById("saved-ideas");
    list.innerHTML = "";

    savedIdeas.forEach(idea => {
        const li = document.createElement("li");
        li.textContent = idea;
        list.appendChild(li);
    });
}

function addCustomIdea() {
    const newIdeaText = document.getElementById("new-idea").value.trim();
    const newIdeaCategory = document.getElementById("new-category").value;

    if (newIdeaText) {
        ideas.push({ text: newIdeaText, category: newIdeaCategory });
        document.getElementById("new-idea").value = "";
        alert("Ідею додано! 🎉");
    }
}

// Показуємо збережені ідеї при запуску
renderSavedIdeas();
