const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const cardNav = document.getElementById('card-nav');

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

// mostrar perguntas frequentes

duvidas.forEach(function (div) {
    const paragrafoResposta = div.querySelector('.resposta');
    div.addEventListener('click', function(){
        paragrafoResposta.classList.toggle('hidden')
    })
    
});
