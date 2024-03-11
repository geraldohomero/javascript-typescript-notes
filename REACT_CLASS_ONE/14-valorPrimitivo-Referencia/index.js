/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência - referencia o mesmo valor na memória
*/
let nome = 'Geraldo';
nome[0] = 'R'; // não altera o valor da variável nome pq string é imutável
console.log(nome[0], nome);

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); // b não foi alterado pq é uma cópia de a e não uma referência

let c = [1, 2, 3];
let d = c; // referência, ou seja, os dois apontam para o mesmo valor na memória
let f = [...c]; // cópia, ou seja, os dois apontam para valores diferentes na memória
console.log(c, d);

c.push(4);
console.log(c, d); // d foi alterado pq é uma referência de c
c.pop()
console.log(c, d); // d foi alterado pq é uma referência de c

console.log('***********************')

const pessoa = {
    nome: 'Geraldo',
    sobrenome: 'Homero',
};
const teste = {...pessoa}; // cópia
pessoa.nome = 'Ricardo';
console.log(pessoa, teste); // teste não foi alterado pq é uma cópia de pessoa
