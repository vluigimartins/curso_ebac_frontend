const form = document.getElementById('form');
let campoA = document.getElementById("campoA");
let campoB = document.getElementById("campoB");

const containerMensagemSucesso = document.querySelector('.sucess-message');
const containerMensagemErro = document.querySelector('.error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    containerMensagemSucesso.style.display = 'none';
    containerMensagemErro.style.display = 'none';

    const mensagemSucesso = `SUCESSO, o campo B é maior que o campo A`
    const mensagemErro = `ERRO, o campo B não é maior que o campo A`
    
    if (campoB.value > campoA.value) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
    campoA.value = '';
    campoB.value = '';
})
