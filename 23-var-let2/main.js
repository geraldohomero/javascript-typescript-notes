// let tem escopo de bloco {... bloco}
// var só tem escopo de funçã

const verdadeiro = true;

let nome = 'João'; //  criando a variável
var nome2 = 'João2'; // criando a variável

if (verdadeiro) {
    let nome = 'Geraldo'; // criando a variável
    var nome2 = 'Roger'; // redeclarando a variável
    console.log(nome, nome2);
}

if (verdadeiro) {
    let nome = 'Outro'; // criando a variável
    var nome2 = 'Wellingtuinistion'; // redeclarando a variável
    console.log(nome, nome2);
}

console.log(nome, nome2); // João Wellintuinstion

// 
function falaOi() {
    var sobrenome = 'Miranda';
    console.log(sobrenome);
}
//  console.log(sobrenome); // Erro
falaOi();