'user strict'

/* Exemplo 1 */
//Procurando (querySelector) por um elemento chamado exemplo01
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

/* console.log(exemplo01);
console.log(mensagem01);
console.log(pagina); */


/* Para selecionar varios elementos, use o queryselectorAll.
O resultado é uma espécie de array de elementos (NodeList) */
const paragrafo = document.querySelectorAll("p")
console.log(paragrafo);

/* Sobre eventos
Um evento é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicações

O JavaScript suporta centenas de tipos de evento. Exemplo: 
- Clique do mouse;
- Pressionar teclas;
- Tocar na tela;
- Rolagem da página;
- Carregamento da página;
- etc.
*/

//Exemplo detectando eventos

//Ao clicar 1x, adiciona um paragrafo de mensagem
exemplo01.addEventListener("click", function(){
   mensagem01.textContent = "Opa, clicou no h2 e o evento funcionou!"

   //Adiciona a classe destaque
   mensagem01.classList.add("destaque");
});


//Ao clicar 2x, retira o texto do paragrafo de mensagem
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent = " ";

    //Remove a classe destque
    mensagem01.classList.remove("destaque")
});

/* Exercício
1) Crie uma constante nova e selecione h1 da sua página

2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado

3)Faça também um evento de clique para que, quando clicar na palavra "Referência", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte à esquerda (padrão). */

const selectIdEvente = document.querySelector("#evento");

evento.addEventListener("mouseover", function(){
    evento.textContent = "Praticando Eventos!"
    evento.style.textAlign = "center"
});

const selectIdReferencia = document.querySelector("#referencia");

selectIdReferencia.addEventListener("click", function(){
    evento.textContent = "Eventos"
    evento.style.textAlign = "start"
})

const ativarModoNoturno = document.querySelector("#noturno");
ativarModoNoturno.addEventListener("click", function() {
    /* Usamos o toogle para altenar entre a adicionar a classe OU remover a classe, de acordo com cada clique no botão */
    pagina.classList.toggle("modo_noturno");

    if (pagina.classList.contains("modo_noturno")) {
        ativarModoNoturno.style.transition = "background-color 1s, color 1s";
        ativarModoNoturno.textContent = "Desativar";
    
    } else {
        ativarModoNoturno.style.transition = "background-color 0.5s, color 0.5s";
        ativarModoNoturno.textContent = "Ativar";
       
    }
});

/*  Desafio

1 - Faça a mudança de cores acontecer gradualmente (use o transition!)

2 - Se o modo noturno estiver ativado, ou seja, se a classe modo_noturno estiver aplicado à página, faça o texto do botão mudar para "Desativar".
Caso Contrario, faça o texto do botão exibir "Ativar"
*/





