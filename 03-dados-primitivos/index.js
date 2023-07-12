// String
const nome = 'Geraldo';
const nome1 = "Geraldo";
const nome2 = `Geraldo`;

//number
const num1= 10;
const num2 = 10.52;

// undefined 
let nomeAluno; // não aponta para local nenhum na memória
const sobrenomeAluno = null; // não aponta para local nenhum na memória
// Quando se usa null, estamos dizendo explicitamente que essa variável não aponte para lugar nenhum na memória

//booleano - boolean
const aprovado = true; // ou false (valor lógico)

console.log(typeof aprovado, aprovado); // typeof mostra o tipo da variável

let a = 2;
let b = a;
console.log(a, b); // 2 2

a = 3;
console.log(a, b); // 3 2