"use strict"

/* Operadores LÓGICOS 

&& -> E -> AND

|| -> OU -> OR

! -> Não/Negação -> NOT

*/

// && -> retorna TRUE se todas as condições forem VERDADEIRAS

console.log("Exemplo &&");

let idade = 16;
let temCarta = true;

if (idade >= 18 && temCarta === true){
    console.log("\nPode dirigir");
}

else{
    console.log("\nNão pode dirigir");
}

console.log("Exemplo de uso dos Sinais de Iguais");


/* Sobre o duplo e triplo sinal de igual 

- Ao usar == a comparação é somente do VALOR, ou seja, NÃo IMPORTA o tipo de dados (String, number, etc)

- Ao usar === a comparação é do valor e do TIPO DE DADO, ou seja, IMPORTA TUDO
*/

let a = 10;
let b = "10";
//let resultadoComparacao = a == b; TRUE
let resultadoComparacao = a === b; // FALSE

console.log(resultadoComparacao);

