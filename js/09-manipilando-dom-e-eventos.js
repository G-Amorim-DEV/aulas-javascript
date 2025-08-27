'user strict'

/* Exemplo 1 */
//Procurando (querySelector) por um elemento chamado exemplo01
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);


/* Para selecionar varios elementos, use o queryselectorAll.
O resultado é uma espécie de array de elementos (NodeList) */
const paragrafo = document.querySelectorAll("p")
console.log(paragrafo);

