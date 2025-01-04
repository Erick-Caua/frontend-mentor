const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const cardNav = document.getElementById('card-nav');

const article0 = document.getElementById('article-0');
const article1 = document.getElementById('article-1');
const article2 = document.getElementById('article-2');

const escolhas = document.querySelectorAll('.escolha');

const duvidas = document.querySelectorAll('.duvida');

//Abrir nav
openNav.addEventListener("click", () => {
    cardNav.style.display = "flex"
    openNav.style.display = "none"
})


// Fechar nav
cardNav.addEventListener("click", (ev) => {
    if (ev.target === cardNav) {
        cardNav.style.display = "none"
        openNav.style.display = "flex"
    }
})

closeNav.addEventListener("click", () => {
    cardNav.style.display = "none"
    openNav.style.display = "flex"
})

//Simple - Speedy - Easy
escolhas.forEach((botao) => {
    botao.addEventListener('click', () => {
        const valor = botao.value;

        switch (valor) {
            case 'simple':
                article0.style.display = "flex"
                article1.style.display = "none"
                article2.style.display = "none"
                break;
            case 'speedy':
                article0.style.display = "none"
                article1.style.display = "flex"
                article2.style.display = "none"
                break;
            case 'easy':
                article0.style.display = "none"
                article1.style.display = "none"
                article2.style.display = "flex"
                break;


        }
    })
})





// mostrar perguntas frequentes

duvidas.forEach(function (div) {
    const paragrafoResposta = div.querySelector('.resposta');
    div.addEventListener('click', () => {
        paragrafoResposta.classList.toggle('hidden')
    })

});
