//              0123456789101112
//const nome = 'Geraldo Homero'
//console.log(nome[5]); // d

// Array        0        1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[0]); // Luiz
console.log(alunos[2]); // João
console.log(alunos[2][0]); // J
console.log(alunos[2][3]); // o

console.log(alunos.length)

// Alterando o valor de um índice
alunos[0] = 'Gilbertiner';
console.log(alunos); // [ 'Gilbertiner', 'Maria', 'João' ]

// Adicionando um novo índice
alunos[3] = 'Grudineyde';
console.log(alunos); // [ 'Gilbertiner', 'Maria', 'João', 'Grudineyde' ]

console.log(alunos.length); // 4

// Adicionando um novo índice sem saber o tamanho do array
//alunos[alunos.length] = 'Geraldo';
//alunos[alunos.length] = 'Geraldieny';
//alunos[alunos.length] = 'Creonilde';
//console.log(alunos); // [ 'Gilbertiner', 'Maria', 'João', 'Grudineyde', 'Geraldo', 'Geraldieny', 'Creonilde' ]

// Adicionando um novo índice com push
//alunos.push('Willersion');
//alunos.push('Willfferson');

// Adicionando um novo índice com unshift (no início do array) - mudando os índices de cada elemento
alunos.unshift('Geraldilson');
console.log(alunos); // [ 'Geraldilson', 'Gilbertiner', 'Maria', 'João', 'Grudineyde', 'Geraldo', 'Geraldieny', 'Creonilde', 'Willersion', 'Willfferson' ]

// Removendo o último índice com pop 
const removidoUltimo = alunos.pop();
console.log(alunos);
console.log(removidoUltimo);
const removidoPrimeiro = alunos.shift();
console.log(alunos);
console.log(removidoPrimeiro);

// Deletando um índice com delete
//delete alunos[1];
//console.log(alunos);

// Acessando um índice que não existe
//console.log(alunos[50]); // undefined

// Adicionando um novo índice com push
alunos.push('Willersion');
alunos.push('Willfferson');
//console.log(alunos.slice(0, 3)); // [ 'Geraldilson', 'Maria', 'João' ]
console.log(alunos.slice(0, -1)); // [ 'Geraldilson', 'Maria', 'João', 'Grudineyde', 'Geraldo', 'Geraldieny' ]

console.log(typeof alunos); // object
console.log(alunos instanceof Array); // true
