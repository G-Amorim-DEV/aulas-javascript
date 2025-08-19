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
    console.log("\nPode dirigir\n");
}

else{
    console.log("\nNão pode dirigir\n");
}


console.log("\nExemplo de uso dos Sinais de Iguais");
/* Sobre o duplo e triplo sinal de igual 

- Ao usar == a comparação é somente do VALOR, ou seja, NÃo IMPORTA o tipo de dados (String, number, etc)

- Ao usar === a comparação é do valor e do TIPO DE DADO, ou seja, IMPORTA TUDO
*/

let a = 10;
let b = "10";
//let resultadoComparacao = a == b; TRUE
let resultadoComparacao = a === b; // FALSE

console.log(`\n${resultadoComparacao}`);


console.log("\nExemplo ||");
// || -> retorna VERDADEIRO se pelo menos uma das condições for VERDADEIRA

let feriado = true;
let fim_de_semana = true;

// if(feriado || fim_de_semana){
if(feriado === true || fim_de_semana === true){
    console.log("\nNão tem aula!");
}
else{
    console.log("\nTem aula!");
}


console.log("\n Exemplo !");

// ! -> Inverte a lógica. O que é TRUE, vira FALSE. O que é FALSE, vira TRUE.

// Não está vigorando
let black_friday = false;


/* Aqui, ao usar ! (NEGAÇÂO), verificamos se a variável NÂO É TRUE. Ou seja, INVERTEMOS a lógica. */
if(!black_friday){
    console.log("Preços normais...");  
}

else{
    console.log("Preços com descontos...");
    
}



