'use strict';

const campo_busca = document.querySelector("#busca");

const clientes = document.querySelectorAll("#clientes li");

//Monitorando a digitação em tempo real dentro do campo de busca
campo_busca.addEventListener("input", function(){
    //Capturando o que é digitado e transformando em letra minúscula
    const termo_digitado = campo_busca.value.toLowerCase();

    //Acessando cada cliente dentro da lista clientes
    for(const cliente of clientes){
        //Se o nome do Cliente incluir algum caractere digitado
        if(cliente.textContent.toLowerCase().includes(termo_digitado)){
            //Então mantemos o <li> visivel
            cliente.style.display = "list-item";
        }else{
            //Se não, escondemos o <li> 
            cliente.style.display = "none";
        }
    }

}); 