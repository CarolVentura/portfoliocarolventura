alert ('aaaaaaaaaaah');

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const texto = document.querySelector("#texto");
const botao = document.querySelector("#enviar");

botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    if (nome.value == undefined ||
        nome.value == null ||
        nome.value.trim() == "" ||
        nome.value.length < 0) {
        nome.focus();
        alert("Preencha o campo nome corretamente")
        return false;

    } else if (email.value == undefined ||
        email.value == null ||
        email.value.trim() == "" ||
        e-mail.value.indexOf('@')===-1){
        email.focus();
        alert("Preencha o campo email corretamente")
        return false;
    } else if (telefone.value == undefined ||
        telefone.value == null ||
        telefone.value.trim() == "" ||
        telefone.value.length <11){
        telefone.focus();
        alert("Preencha o campo telefone corretamente")
        return false;
    }else if (texto.value == undefined ||
        texto.value == null ||
        texto.value.trim() == "" ||
        texto.value.length >140) {
        texto.focus();
        alert("Preencha o campo mensagem corretamente")
        return false;}
    document.querySelector('form').submit()
    alert('cadastro realizado com sucesso')

})