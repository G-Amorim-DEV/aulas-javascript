//HAbilitando o modo estrito
'use strict';

let teste = "Senac";
console.log(teste);

let userInterface = "Teste";
console.log(userInterface);

/* Exercícios */

// 1) Crie uma variável chamada "uc" e coloque nela o número da UC que estamos

const uc = "UC";
let qual_uc = 2

// 2) Crie uma variável chamada "competencia" e coloque nela uma frase que reoresente o que estmaos estudando nesta UC.
let competencia1, linguagens1, linguagens2, linguagens3;

competencia1 = 'Front-End'
linguagens1 = 'JavaScript';
linguagens2 = 'HTML';
linguagens3 = 'CSS'

let frase = `Na ${uc}${qual_uc} estamos estudando ${competencia1}, no momento estamos estundando ${linguagens1}, e já estudamos ${linguagens2} e ${linguagens3} `;

// 3) Monte e mostre uma frase no console exibindo a UC e a competência. Exemplo: UC2 estudando Front-End com JavaScript.
console.log(frase);

// ERRADO
//console.log("Gosto "muito" de paçoca!");

//CORRETO! Aspas simples como comando, e duplas como texto
console.log('Gosto "muito" de paçoca!');

//CORRETO! Aspas duplas como comando, e simples como texto
console.log("Gosto 'muito' de paçoca!");

//CORRETO! Escapando as aspas como texto
console.log("Gosto \"muito\" de paçoca!");

