"user script"

// Exemplo 1 - Objeto com dados de uma pessoa:
console.log("Exemplo 1\n");
const pessoa = {
    nome: "Chaves",
    idade: 8,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa)

// Acessando as propriedades usando o nomeDoObjeto.nomeDaPropriedade
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos de idade`);


// Exemplo 2 - Objeto com array
console.log("\nExemplo 2\n");

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]

};


console.log(livro)
console.log(livro.titulo)

/* Para acessar algum dos volumes, primeiro passamos pela propriedade (volumes) usando 'ponto' w, chegando nwl, usamos os 'colchetes' com indice pois se trata de um array. */
console.log(`O meu livro preferido é ${livro.volumes[1]}`)



