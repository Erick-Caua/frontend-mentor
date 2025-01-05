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
const articles = [article0, article1, article2];

// Objeto para mapear valores aos índices dos artigos
const indexMap = {
    'simple': 0,
    'speedy': 1,
    'easy': 2
};

// Itera pelos botões
escolhas.forEach((botaoClicado) => {
    botaoClicado.addEventListener('click', () => {
        const valor = botaoClicado.value;

        // Iterar sobre todos os botões
        escolhas.forEach((btn) => {
            const span = btn.querySelector("span");
            if (btn === botaoClicado) {
                // Remover a classe dos outros botões e adicionar ao botão clicado
                btn.classList.remove('text-GrayishBlue');
                span.classList.add('border-SoftRed')
                span.classList.remove('border-transparent')
            } else {
                // Adicionar a classe aos outros botões e remover a classe do botão clicado
                btn.classList.add('text-GrayishBlue');
                span.classList.remove('border-SoftRed')
                span.classList.add('border-transparent')
            }
        });

        // Mostrar o artigo correspondente
        const index = indexMap[valor];
        articles.forEach((article, idx) => {
            article.style.display = idx === index ? 'flex' : 'none';
        });
    });
});


// mostrar perguntas frequentes

duvidas.forEach(function (div) {
    const paragrafoResposta = div.querySelector('.resposta');
    div.addEventListener('click', () => {
        paragrafoResposta.classList.toggle('hidden')
    })

});
