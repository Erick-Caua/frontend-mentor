const main = document.querySelector('.main')
const form = document.getElementById('subscribeForm');

const success = document.querySelector('.success')
const dismiss = document.getElementById('dismiss')



form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    const emailValue = document.getElementById('email').value;

    const validarEmail = (email) => /^[^\s@]+@company\.com$/.test(email);

    if (validarEmail(emailValue)) { // Chama a função e verifica o resultado
        success.style.display = 'flex'
        main.style.display = 'none';
    } else {
        alert('Por favor, insira um endereço de e-mail válido.');
    }
});

dismiss.addEventListener('click', () => {
    const cleanEmail = document.getElementById('email')
    main.style.display = 'block'; // Mostra o elemento `main`
    success.style.display = 'none'; // Oculta o elemento `success`
    cleanEmail.value = "";
});