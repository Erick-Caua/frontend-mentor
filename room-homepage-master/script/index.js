const backgroundDiv = document.getElementById('backgroundSec');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

const article0 = document.getElementById('article-0');
const article1 = document.getElementById('article-1');
const article2 = document.getElementById('article-2');

const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const cardNav = document.getElementById('card-nav');


//Abrir nav
openNav.addEventListener("click", () => {
    cardNav.style.display = "flex"
})


// Fechar nav
cardNav.addEventListener("click", (ev) => {
    if (ev.target === cardNav) {
        cardNav.style.display = "none"
    }
})

closeNav.addEventListener("click", () => {
    cardNav.style.display = "none"
})


// Array de imagens de fundo

let backgrounds = [];

let currentIndex = 0;

if (window.innerWidth > 640) {
    backgrounds = [
        'url("images/desktop-image-hero-1.jpg")',
        'url("images/desktop-image-hero-2.jpg")',
        'url("images/desktop-image-hero-3.jpg")'
    ]
} else {
    backgrounds = [
        'url("images/mobile-image-hero-1.jpg")',
        'url("images/mobile-image-hero-2.jpg")',
        'url("images/mobile-image-hero-3.jpg")'
    ]
}

// Função para atualizar a imagem de fundo
function updateBackground() {
    backgroundDiv.style.backgroundImage = backgrounds[currentIndex];
    switch (currentIndex) {
        case 0: article0.style.display = "block"
            article1.style.display = "none"
            article2.style.display = "none"
            break;
        case 1: article0.style.display = "none"
            article1.style.display = "block"
            article2.style.display = "none"
            break;
        case 2: article0.style.display = "none"
            article1.style.display = "none"
            article2.style.display = "block"
            break;

    }
}

// Eventos dos botões
previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length; // Volta ao anterior
    updateBackground();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length; // Avança ao próximo
    updateBackground();
});

// Inicializa a imagem de fundo
updateBackground();