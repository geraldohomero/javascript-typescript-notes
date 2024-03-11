function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('João');
console.log(variavel); // o valor está na variável


// Tudo dentro de uma função é local, não é global (escopo da função)
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2)); // o valor está sendo passado diretamente
console.log(soma(4, 4));
console.log(soma(3, 3));

function soma(x = 1, y = 1) {
   const resultado = x + y;
   return resultado; // nada será executado após o return
   console.log('Olá mundo!'); // não será executado
}
const resultado = soma(2, ); //mesmo nome da função, mas não tem problema
console.log(resultado); // o valor está na variável

console.log("--------------------------------------------------");

// função anônima
const raiz = function (n) {
    return n ** 0.5;
};


console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// arrow function

const raiz2 = (n) => {
    return n ** 0.5;
}

console.log(raiz2(900));