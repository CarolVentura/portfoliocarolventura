alert ('aaaaaaaaaaah');

const nome = document.querySelector("#cadastroInputNome");
const email = document.querySelector("#cadastroInputEmail");
const telefone = document.querySelector("#cadastroInputPhone");
const texto = document.querySelector("#cadastroInputText");
const botao = document.querySelector('.btn btn-primary');

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
        email.value.length < 0) {
        email.focus();
        alert("Preencha o campo email corretamente")
        return false;
    } else if (telefone.value == undefined ||
        telefone.value == null ||
        telefone.value.trim() == "" ||
        telefone.value.length <11) {
        telefone.focus();
        alert("Preencha o campo telefone corretamente")
        return false;
    }else if (texto.value == undefined ||
        texto.value == null ||
        texto.value.trim() == "" ||
        texto.value.length >140) {
        texto.focus();
        alert("Preencha o campo mensagem corretamente")
        return false;
    document.querySelector('form').submit()
    alert('cadastro realizado com sucesso')

})