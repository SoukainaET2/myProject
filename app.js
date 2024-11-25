// Sélectionner le bouton et le titre
const colorButton = document.getElementById('colorButton');
const title = document.getElementById('title');

// Tableau de couleurs
const colors = ['#ff5733', '#33ff57', '#3357ff', '#f0e130', '#e130f0'];

// Ajouter un gestionnaire d'événements
colorButton.addEventListener('click', () => {
    // Choisir une couleur aléatoire
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    title.style.color = randomColor;
});
