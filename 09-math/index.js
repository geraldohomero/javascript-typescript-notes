let num1 = 9.54578;
//let num2 = Math.floor(num1); // arredonda para baixo
//let num2 = Math.ceil(num1); // arredonda para cima
let num2 = Math.round(num1); // arredonda para o mais próximo
console.log(num2);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // maior valor
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // menor valor
console.log(Math.random());

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // random entre 10 e 5
console.log(aleatorio);

console.log(Math.PI); // PI
console.log(Math.pow(2, 10)); // 2 elevado a 10
console.log(2 ** 10); // 2 elevado a 10
console.log(100 / 0); // Infinity
console.log(100 / 0.000000...)