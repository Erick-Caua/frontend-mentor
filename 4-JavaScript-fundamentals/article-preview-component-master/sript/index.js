const share = document.querySelector(".share");
const nav = document.querySelector("nav");

share.addEventListener("click", (ev) => {
    ev.preventDefault();
    nav.classList.toggle("ativo");

    // Altera a cor do botão de acordo com o estado do menu
    share.style.backgroundColor = nav.classList.contains("ativo")
        ? "var(--GrayishBlue)"
        : "var(--LightGrayishBlue)";
});
