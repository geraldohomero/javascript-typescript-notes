// Indice        0123456789
let umaString = "Uma \\String - O rato roeu a roupa do rei de roma.";

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia!`);
console.log(umaString.indexOf('String'));
console.log(umaString.indexOf('Um'));
console.log(umaString.lastIndexOf('a'));
console.log(umaString.match(/[a-z]/g)); // Expressão regular
console.log(umaString.search(/a/)); // Expressão regular 
console.log(umaString.replace('Uma', 'Outra'));
console.log(umaString.replace(/r/g, '#')); //com a flag g substitui todas as letras a
console.log(umaString.length);
console.log(umaString.slice(0, 2));
console.log(umaString.slice(0, 3));
console.log(umaString.slice(-5));
console.log(umaString.slice(-5, -1)); //pega o final da string e vai até o -1
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); //muito mais código
console.log(umaString.split(' ', 3)); //separa a string em um array
console.log(umaString.split('r'));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
