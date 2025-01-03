const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const cardNav = document.getElementById('card-nav');

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
