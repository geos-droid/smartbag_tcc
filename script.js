const botao = document.getElementById("botao");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const textareaMensagem = document.getElementById("mensagem");
const resposta = document.getElementById("resposta-formulario");

botao.onclick = () => {
    
    if (inputNome.value === "" || inputEmail.value === "" || textareaMensagem.value === "") {
        resposta.innerText = "Erro: Por favor, preencha todos os campos!";
        resposta.className = "erro";
    } else {
        resposta.innerText = `Obrigado por apoiar a Smart Bag, ${inputNome.value}! Mensagem enviada com sucesso.`;
        resposta.className = "sucesso";
        
        inputNome.value = "";
        inputEmail.value = "";
        textareaMensagem.value = "";
    }
};