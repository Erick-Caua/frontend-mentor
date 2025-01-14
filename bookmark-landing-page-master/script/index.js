const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const cardNav = document.getElementById('card-nav');

const article0 = document.getElementById('article-0');
const article1 = document.getElementById('article-1');
const article2 = document.getElementById('article-2');

const escolhas = document.querySelectorAll('.escolha');

const duvidas = document.querySelectorAll('.duvida');

const buttonForm = document.getElementById('buttonForm');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

const input = document.getElementById('input')
const imgErro = document.getElementById('img-erro')
const menErro = document.getElementById('men-erro')

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




buttonForm.addEventListener('click', function (e) {
    e.preventDefault(); // Evita o envio do formulário

    const email = emailInput.value.trim();

    // Função para validar o email -  retorna true ou false
    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 

    // Função para atualizar classes de erro ou sucesso - isValid é uma variável boolean
    const atualizarClasses = (isValid) => {
        menErro.classList.toggle('hidden', isValid);
        imgErro.classList.toggle('hidden', isValid);

        input.classList.toggle('border-SoftRed', !isValid);
        input.classList.toggle('bg-SoftRed', !isValid);

        input.classList.toggle('border-Green', isValid);
        input.classList.toggle('bg-Green', isValid);

        // Remove a borda transparente apenas se for válido
        if (isValid) input.classList.remove('border-transparent');
    };

    // Valida o email e atualiza as classes
    atualizarClasses(validarEmail(email));
});