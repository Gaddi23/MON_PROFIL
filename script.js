const descriptions = {
    HTML: "HTML (HyperText Markup Language) permet de structurer le contenu des pages web.",
    CSS: "CSS (Cascading Style Sheets) permet de styliser le contenu HTML (couleurs, mise en page...).",
    JavaScript: "JavaScript permet de rendre les pages web interactives (animations, clics, formulaires dynamiques...).",
    Git: "Git est un système de gestion de versions qui permet de suivre les modifications dans les projets de code.",
    SQL: "SQL (Structured Query Language) permet de gérer les bases de données relationnelles."
};

let clickData = JSON.parse(localStorage.getItem('skillClicks')) || {
    HTML: 0, CSS: 0, JavaScript: 0, Git: 0, SQL: 0
};

function showSkill(skill) {
    clickData[skill]++;
    localStorage.setItem('skillClicks', JSON.stringify(clickData));

    document.getElementById("description").textContent = descriptions[skill];

    const list = Object.entries(clickData)
        .map(([k, v]) => `<li>${k} (${v} clic${v > 1 ? 's' : ''})</li>`)
        .join("");
    document.getElementById("clickCounts").innerHTML = list;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("phone").textContent = "+237696113269";
    document.getElementById("email").textContent = "gaddielatchal@gmail.com";
    document.getElementById("Github").href = "https://Github.com/Gaddi23";
    showSkill("HTML"); // Initialiser avec HTML
});
