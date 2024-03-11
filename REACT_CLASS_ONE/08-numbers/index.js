let num1 = 10;
let num2 = 2.5;
let num0 = 1110983

num1 = num1.toString();
console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num0.toString(2)); // Binary

let num3 = 1500.456789;
console.log(num3.toFixed(2)); // casas decimais

console.log(Number.isInteger(num3)); // is integer
console.log(Number.isInteger(num0)); // is integer
console.log("***********")
let temp = num3 * 'Olá';
console.log(Number.isNaN(temp)); // is not a number

let num4 = 0.7;
let num5 = 0.1;

num4 += num5; // 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0

num4 = Number(num4.toFixed(2)); //sem isso o resultado fica 0.99999999
console.log(num4);
console.log(Number.isInteger(num4)); // is integer


