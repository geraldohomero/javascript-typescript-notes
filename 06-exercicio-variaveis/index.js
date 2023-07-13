let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);


// Outra forma de fazer
let variavelA = 'A'; // B
let variavelB = 'B'; // C
let variavelC = 'C'; // A

[variavelA, variavelB, variavelC] = [variavelB, variavelC, variavelA]

console.log(variavelA, variavelB, variavelC);
