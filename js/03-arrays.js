'user strict'

//Declarando array (vetor)
let esportes = ["natação", "futebol", "tenis-de-mesa", "futsal"];

// Acessando um determinado elemento através do indice
console.log(esportes[0]);

// Se quiser visualizar a estrutura do ARRAY
//console.log(esportes);

// O Fernado Scherer foi medalha de bornze nos 50 metros livres na natação nas olimpiadas de Sydney em 1996
console.log(`O fernando Scherer foi medalha de broze nos 50 metros livres na ${esportes[0]} nas olimpiadas de Sydney em 1996. `);

// Relembrando como criar/usar arrays (vetor)
// No JS, você pode colocar dados diferentes em um array
let seila = 6;
const coisas = [10, "Senac", "<h2>Oie</h2>", seila, 15.88];

console.log(coisas[1])
console.log(coisas[4])



/* Exercícios (FAÇA AQUI MESMOS!) */

// 1) Crie um array contendo o nome de 7 coisas que você gosta (exemplos: artistas, músicas, livros, comida, ..., sei lá, inventa!)

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto eo sétimo elemento do array. Use concatenação e/ou tamplate string.

let interesses = ["Picadinho", "Lasanha", "Sopa", "Macarronada", "Canelone", "Esfiha", "Pizza"]

/* Os elemntos da lista vão do 0 até o 6, por isso da operação matemática */
let saida = `As minha comidas favoritas são ${interesses[2-1]}, ${interesses[5-1]} e principalmente ${interesses[7-1]}.`

let exit = "As minhas comidas favoritas são " + interesses[2-1] + ", " + interesses[5-1] + " e principalmente " + interesses[7-1]

console.log(saida);

console.log(exit);



