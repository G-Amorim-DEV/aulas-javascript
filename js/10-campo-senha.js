'use strict'

const campo_senha = document.querySelector("#senha");

const botao_mostrar = document.querySelector("#mostrar");

/* Monitorando o evento pointerdown/pointerup pois ele funcionará tanto para o acionamento com mouse no desktop quanto com o dedo em mobile */
botao_mostrar.addEventListener("pointerdown", function(){
    //Tá "Segurando" o botão? Troca o type para text e mostra a senha
    campo_senha.type = "text";
})

botao_mostrar.addEventListener("pointerup", function(){
    //soltou o botão? volta o type para password e esconde a senha
    campo_senha.type = "password";
})

// pointermove, pointerout, pointerleave
botao_mostrar.addEventListener("pointerout", function(){
    campo_senha.type = "password"
})