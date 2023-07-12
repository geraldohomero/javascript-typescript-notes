/**

 Operadores aritméticos
 + Adição / Concatenação
 - Subtração
 / Divisão
 * Multiplicação
 ** Potenciação
 % Resto da divisão

 */

/**

Ordem de precedência
()
**
* / %
+ -

*/

const num1 = 5;
const num2 = 10;
const num3 = 2;
console.log(num1 + num2); // 15
console.log(num1 - num2); // -5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 0.5
console.log(num1 ** num2); // 9765625
console.log(num1 % num2); // 5

console.log("*******")
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
contador; // 6 <-- incremento
console.log(contador); // 6

console.log("*******")
let contador2 = 1;
console.log(contador2++); // 1 <-- incremento
console.log(contador2); // 2
console.log("*******")
let contador3 = 1;
console.log(++contador3); // 2 <-- incremento
console.log(contador3); // 2

console.log("*******")
let contador4 = 10;
console.log(contador4--); // 10 <-- decremento
console.log(contador4); // 9
console.log("*******")
let contador5 = 10;
console.log(--contador5); // 9 <-- decremento
console.log(contador5); // 9

//Normalmente se faz dessa forma:
console.log("*******")
let contador6 = 10;
contador6++; // 11
console.log(contador6); // 11

console.log("*******")
const passo = 2;
let contador7 = 0;
contador7 = contador7 + passo; // 2
contador7 = contador7 + passo; // 4
contador7 = contador7 + passo; // 6
console.log(contador7); // 6

contador7 += passo; // 8 <-- atribuição aditiva (adição) - incremento de 2 em 2 (passo)

console.log("*******")

let contador8 = 2;
contador8 *= 2; // 4
contador8 *= 2; // 8
contador8 *= 2; // 16
console.log(contador8); // 16

console.log("*******")
let contador9 = 2;
contador9 **= 2; // 4
contador9 **= 2; // 16
contador9 **= 2; // 256
console.log(contador9); // 256

console.log("*******")
let contador10 = 2;
contador10 /= 2; // 1
contador10 /= 2; // 0.5
contador10 /= 2; // 0.25
console.log(contador10); // 0.25

console.log("*******")
let contador11 = 2;
contador11 %= 2; // 0
contador11 %= 2; // 0
contador11 %= 2; // 0
console.log(contador11); // 0

console.log("*******")
let contador12 = 2;
contador12 += 2; // 4
contador12 -= 2; // 2
contador12 *= 2; // 4
contador12 /= 2; // 2
contador12 **= 2; // 4
contador12 %= 2; // 0
console.log(contador12); // 0

// NaN - Not a Number
const num4 = 10;
const num5 = 'Luiz';
console.log(num4 * num5); // NaN

const num6 = 10;
const num7 = '5'; //em alguns casos o JS converte automaticamente.
console.log(num6 * num7); // 50

const num8 = 10;
const num9 = parseInt('5'); // parseInt converte string para número INTEIRO
console.log(num6 + num7); // 15

const num10 = 10;
const num11 = parseFloat('5.2'); // parseFloat converte string para NÚMERO DECIMAL
console.log(num10 + num11); // 15.2

const num12 = 10;
const num13 = Number('5.2'); // Number converte string para número decimal
console.log(num12 * num13); // 52