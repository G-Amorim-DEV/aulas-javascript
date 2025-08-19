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


/* 1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)
 
2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado". */


/* 1. Criação das variaveis: */
let nota_1 = 7;
let nota_2 = 7;

/* 2. Calculando a média: */

let media = (nota_1 + nota_2) / 2;



/* Verificar se o aluno foi APROVADO ou REPROVADO:*/

if (media >= 7){
    console.log(`Nota 1 = ${nota_1}\nNota 2 = ${nota_2}\nMédia: ${media}.\nSituação: Aprovado😎😎`);
}

else{console.log(`Nota 1 = ${nota_1}\nNota 2 = ${nota_2}\nMédia: ${media} \nSituação: Reprovado😡😡`);
}


console.log("\nExemplo 3");
/* Conforme a média:
- Média acima de 9? ótimo
- Média acima de 7? bom
- Média acima de 5? ruim
- Média até 5? péssimo
*/

if ( media > 9){
    console.log("ÓTIMO!")
}
else if ( media > 7){
    console.log("BOM!")
}
else if ( media > 5){
    console.log("RUIM!")
}
else{
    console.log("PÉSSIMO");
    
}

console.log("\nExemplo 4");

/* Condicional COMPOSTA com operador TERNÁRIO?:*/

let situacao = idade >= 18 ? "maior" : "menor";

console.log(situacao);

