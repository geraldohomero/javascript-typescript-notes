/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/
let nome = 'Geraldo';
nome[0] = 'R'; // não altera o valor da variável nome pq string é imutável
console.log(nome[0], nome);