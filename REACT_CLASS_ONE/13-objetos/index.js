// const array = [1, 2, 3, 4, 5];
// array.push(6);
// array[0] = 'João';
// //array = 'Outro nome'; // não pode ser feito, pois array é uma constante, com let pode ser feito
// console.log(array);

// const nome1 = 'João';
// const sobrenome1 = 'Silva';
// const idade1 = 27;
// 
// const nome2 = 'Gutierres';
// const sobrenome2 = 'Almeida';
// const idade2 = 67;

// const pessoa1 =  {
//     nome1: 'João',
//     sobrenome1: 'Silva',
//     idade1: 27
// };
// console.pessoa1.nome(pessoa1.nome);

function criaPessoa (nome, sobrenome, idade) { // aqui é PARÂMETRO da função - FACTORY FUNCTION (função de fábrica - cria objetos)
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
        nome, // quando o nome da propriedade é igual ao nome da variável, pode-se omitir
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('João', 'Silva', 27); // aqui é ARGUMENTO da função - quando envia o valor para o parâmetro
const pessoa2 = criaPessoa('Gutierres', 'Almeida', 67);
const pessoa3 = criaPessoa('Maria', 'Oliveira', 45);
const pessoa4 = criaPessoa('Lucas', 'Silva', 23);
const pessoa5 = criaPessoa('Luiz', 'Otávio', 32);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

const pessoa6 = {
    nome: 'Geraldo',
    sobrenome: 'Homero',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`); // this é uma referência ao objeto pessoa6
    },

    incrementaIdade() {
        this.idade++;
    }

};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();