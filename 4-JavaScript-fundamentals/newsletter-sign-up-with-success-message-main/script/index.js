const main = document.querySelector('.main')
const form = document.getElementById('subscribeForm');

const input = document.getElementById("email")
const erroLabel = document.querySelector('.erroMen')

const success = document.querySelector('.success')
const dismiss = document.getElementById('dismiss')



form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    const emailValue = document.getElementById('email').value;

    const validarEmail = (email) => /^[^\s@]+@company\.com$/.test(email);

    if (validarEmail(emailValue)) { // Chama a função e verifica o resultado
        input.classList.remove('erro');
        // Remove a classe 'erro' do input
        erroLabel.style.display = 'none';
        // Oculta o label de erro

        // Mostra a mensagem de sucesso
        success.style.display = 'flex'
        main.style.display = 'none';

        // Atualiza o e-mail na mensagem de sucesso
        document.querySelector('.success p span').textContent = emailValue;
    } else {
        input.classList.add('erro'); 
        // Adiciona a classe 'erro' ao input
        erroLabel.style.display = 'block'; 
        // Mostra o label de erro
    }
});

dismiss.addEventListener('click', () => {
    const cleanEmail = document.getElementById('email')
    if (window.innerWidth > 768) {
        main.style.display = 'flex'; // Mostra o elemento `main`
        success.style.display = 'none'; // Oculta o elemento `success`
        cleanEmail.value = "";
    } else {
        main.style.display = 'block'; // Mostra o elemento `main`
        success.style.display = 'none'; // Oculta o elemento `success`
        cleanEmail.value = "";
    }

});