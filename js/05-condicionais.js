"user strict"

/* Comandos Condicionais mians comuns: 

if -> SE
else -> SENÃO
*/

console.log("Exemplo 1");

let numero = 5;

//Condicional SIMPLES (Usa aoenas o if)
if (numero >= 10) {
    console.log("Se você esta vendo essa mensagem é porque a condição e VERDADEIRA");
}


console.log("\nExemplo 2");

let aluno = "Ozzy";
let idade = 18;

/* Lógica: verificar se o aluno é maior ou menor de idade.  */


//Condicional COMPOSTA (if/else)
if (idade >= 18) {
    console.log(`O aluno ${aluno} é maior de idade!`)
}

else {
    console.log(`O aluno ${aluno} é menor de idade!`)
}
