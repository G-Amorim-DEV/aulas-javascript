'use strict'

/* Loops ou estruturas de petição
São comandos que, baseados em alguma condição lógica, são progrados para executar ações repetidas vezes.

Comandos mais tradicionais: while (enquanto) e for (para)

Normalmento, os loops são controlados através de uma variável contadora. Esta variaável é comumente chada de "i", "j", "k" ou qualquer outra letra se necessário.

*/
console.log("Exemplo 1: WHILE (enquanto)");

let i = 1;
while(i <= 5){
    console.log(`valor do i: ${i}`);
    i++; //incremento
    // i = i + 1
}


console.log("\nExemplo 2: FOR (para)");

/* for( inicialização da variável; condição, atualização) */
for( let j = 1; j <= 10; j++){
    console.log(`J vale: ${j}`);
    
}

console.log("\nExemplo 3: loop regressivo");

for (let k = 10; k >= 1; k--){
    console.log(`K vale: ${k}`);
}

console.log("\nExemplo 4: loop e array");

const atividadesFisicas = ["Natação","Futebol", "Caminhada", "Corrida","Musculação", "Ciclismo"];

//Usando loop for tradicional
for (let i = 0; i < atividadesFisicas.length; i++){
 console.log(`A atividades física que pode ajudar a sua saúde: ${atividadesFisicas[i]}`);
  
}

console.log("\n---------\n");

//usando loop for/of (exclusivo do JS)
/* Usamos uma var/const (no caso, atividadeFisica) para acessar cada elemento do array (no caso, atividadesFisicas) */
for(const atividadesFisica of atividadesFisicas){
    console,console.log(atividadesFisica);
}

console.log("\nExemplo 5: loop e objeto");

const pessoa = {
    nome: "Fulano da Silva",
    idade: 40,
    cidade: "São Paulo",
    estado: "SP"
};

// Usando o loop for/in para objetos (exclusivo do JS)
for(const prop in pessoa){
    console.log(pessoa[prop]);
}

/* 1. Faça um array chamado "clientes" contendo 3 objetos.
 
Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
- Cliente: Dio, id: 1
- Cliente: Ozzy, id: 2
- Cliente: Ian, id: 3 */

//1 - Objeto
console.log("\n---------------------------\n");

console.log("\nExercício sobre Objetos e loops - FOR/IN");


const clientes = [
    {
        identificador: "1",
        nome: "Dio"
    },

    {
        identificador: "2",
        nome: "Ozzy"
    },

    {
        identificador: "3",
        nome: "Ian"
    }
]

for (const prop in clientes) {
    console.log(`- Cliente: ${clientes[prop].nome}, id: ${clientes[prop].identificador}`);
}

console.log("\n---------------------------\n");

console.log("\nExercício sobre Objetos e loops - WHILE");

i = 0

while (i < clientes.length){
    console.log(`- Cliente: ${clientes[i].nome}, id: ${clientes[i].identificador}`);
    i++;
}

console.log("\n---------------------------\n");

console.log("\nExercício sobre Objetos e loops - FOR/OF");

for (const cliente of clientes) {
    console.log(`- Cliente: ${cliente.nome}, id: ${cliente.identificador}`);

}  

console.log("\n---------------------------\n");

console.log("\nExercício sobre Objetos e loops - FOR/Simples");

for (let i = 0; i < clientes.length; i++){
    console.log(`- Cliente: ${clientes[i].nome}, id: ${clientes[i].identificador}`);
}