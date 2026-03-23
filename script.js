

// Validação do formulário de contato
const form = document.getElementById('form-contato');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    // Limpa mensagens anteriores
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';
    msgSucesso.textContent = '';

    let formularioValido = true;

    if (nome.value.trim() === '') {
      erroNome.textContent = 'Por favor, informe seu nome.';
      formularioValido = false;
    }

    if (email.value.trim() === '') {
      erroEmail.textContent = 'Por favor, informe seu e-mail.';
      formularioValido = false;
    } else if (!validarEmail(email.value)) {
      erroEmail.textContent = 'Digite um e-mail válido.';
      formularioValido = false;
    }

    if (mensagem.value.trim() === '') {
      erroMensagem.textContent = 'Por favor, digite sua mensagem.';
      formularioValido = false;
    }

    if (formularioValido) {
      msgSucesso.textContent = 'Mensagem enviada com sucesso!';
      alert('Mensagem enviada com sucesso!');
      form.reset();
    }
  });
}

// Função simples para validar e-mail
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}