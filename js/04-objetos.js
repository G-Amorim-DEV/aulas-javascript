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


// Exemplo 3 - Array de objetos
console.log("\nExemplo 3\n");
const livros = [
    {
        titulo: "O Assassinato no Expresso do Oriente",
        autor: "Agatha Christie"
    },

    {
        titulo: "Crepúsculo",
        autor: "Stephanie Myers"
    },

    {
        titulo: "Um livro qualquer",
        autor: "Fulano de Tal"
    }

];

console.log(livros);

console.log(livros[2].titulo);

/* Exercício 4 - Atividade de Arry e Objeto */

/*  1 - Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):

- Rua
- Número
- Bairro

*/

/* 2 - Mostre no console o nome do aluno, o telefone celular  eo bairro em que mora. */

const aluno = {
    nome_completo: "Irineu Noé",
    data_de_nascimento: "10/05/1978",
    lista_de_telefones: ["(011)2254-1564", "(011)95684-2578"],
    endereco: {
        rua: "Rua Noé da Sua Conta",
        numero: "001",
        bairro: "Você Não Sabe Nem EU"
    }

};

console.log(aluno)

let nome_do_aluno = `O nome do aluno é ${aluno.nome_completo},`

let telefone_celular = ` e seu telefone celular é ${aluno.lista_de_telefones[1]},`

let bairro_que_mora = ` e ele mora no bairro ${aluno.endereco.bairro}.`

console.log(nome_do_aluno + telefone_celular + bairro_que_mora)


