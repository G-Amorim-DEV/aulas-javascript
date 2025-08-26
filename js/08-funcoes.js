'use strict';

/* Sobre funções 
Funções são blocos de código responsáveis por executar determinadas tarefas. Para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada através de seu nome. 

Vantagens ao usar funções:
- reutilização de códigos;
-Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidade;
-Performancde melhor;
-Maior facilidade para manutenções.

No JavaScript, existe  várias maneiras de se criar uma função: 

- Função anônima;
- Função nomeada/declarada
- Arrow function

*/

console.log("Exemplo 1: função anônima");

const exemplo1 = function(){
    // corpo da função: ação que a função vai fazer
    console.log("Olá Função Anônima! ");   
};

//Chamando/Invocando a função
exemplo1();

console.log("\nExemplo 2: Função Nomeada/Declarada.");

function exemplo2(){
    console.log("Está é uma função nomeada! ");
}

exemplo2()


console.log("\nExemplo 3: Arrow function (Função Flecha/Seta");

/* Sintaxe potencialmente mais simples para funções no JavaScript */
const exemplo3 = () => {
    console.log("Sintaxe Arrow Function!");
};

exemplo3();

/* Obs: funções (em wualquer sintaxe) também podem trabalhar com parâmetros/argumentos

Quando uma funçÃO PRECISA DE VARIOS/DADOS para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre os parênteses.

Geralemente, ao terminar o porcessamenro dos dados, a função "retorna" para fora um resultado
*/

console.log("\nExemplo 4: função com parâmetros");


function saudacao(nome = "Visitante"){
    //console.log(" Olá, "+nome+"!");
    console.log(`Olá, ${nome}!`);
}

saudacao("Amorim");
saudacao("Ronaldo");
saudacao("Andréa");
saudacao(); // nesse caso, é usado "Visitante" como valor

console.log("\n Exemplo 5: função com parâmetros e retorno");

/*  Sempre que tivermos a necessidade de trabalhar com resultado de processamento de uma funcão, então essa função deve ter o return */
function multiplicar(valor1, valor2){
    return valor1 * valor2;
    
}

// Chamanos a função e recebemos o retorno/resultado dela
let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10)

//Exibimos o resultado
console.log("Resultado 1: "+resultado1);
console.log("Resultado 2: "+resultado2);


console.log("\nExemplo 6: Simplificando com Arrou Function");


//Versão 1: Sintaxe declarada/nomeada
/* function somar(valor1, valor2){
    return valor1 + valor2
} */

//Versão 2: Sintaxe Arrow Functiom com retorno implícito
const somar = (valor1, valor2) => valor1 + valor2;

console.log(somar(150, 500));


