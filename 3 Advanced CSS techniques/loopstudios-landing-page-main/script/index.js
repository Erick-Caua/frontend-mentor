const header = document.querySelector(`header`);
const buttonNav = document.querySelector(".icon-nav");

buttonNav.addEventListener("click", (ev) => [
    ev.preventDefault(),
    header.classList.toggle(`header-mob`),
])