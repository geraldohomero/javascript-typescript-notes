const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Silveira',
    idade: 22,
    endereco: {
        //rua: 'Rua das flores', // caso não tenha valor, ele pega o valor padrão
        numero: 1123,
        bairro: 'Guararapinos'

    }
};

//const nome = pessoa.nome; // atribuição normal
//const { nome, sobrenome } = pessoa; // atribuição via desestruturação de duas propriedades
const { nome } = pessoa; // atribuição via desestruturação 
// estou dizendo que quero a propriedade nome do objeto pessoa
// console.log(pessoa.nome);
const { nome: trocaNomeDaVariavel, sobrenome } = pessoa; // atribuição via desestruturação com troca de nome da variável
console.log(nome, sobrenome);
console.log(trocaNomeDaVariavel, nome);

const { endereco: { rua: r = 'valor padrão', numero }} = pessoa;
// const { endereco: { rua, numero }, endereco } = pessoa; exibe o endereço completo
// caso valor seja undefined, ele pega o valor padrão
console.log(r, numero);

// resto
const { nome: n, ...resto } = pessoa;
console.log('resto', resto); // exibe o resto, menos o nome (n)
