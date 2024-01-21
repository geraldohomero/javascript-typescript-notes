//Atribuição via desestruturação (Arrays)

/* 
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c); 
*/

//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
// ... rest, ... spread

//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros2[1][2]) // 6
console.log(numeros2[0][2]) // 3

const [,[,,seis]] = numeros2
console.log(seis); // 6

const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]); // 9