/*
&& -> false && true -> false // retorna "o VALOR mesmo"
|| ->
FALSY -> Valores que são avaliados em false em contextos onde um booleano é obrigatório
*false -> literalmente false (palavra false)
0
'' "" ``
null / undefined
NaN

Qualquer coisa diferente disso é avaliado como true em javascript
*/

console.log('Geraldo' && 0 && 'Maria'); // retorna o primeiro valor falso encontrado
console.log('Geraldo' && true && 'Maria'); // retorna o último valor verdadeiro encontrado
console.log('Geraldo' && NaN && true); // retorna o primeiro valor falso encontrado
console.log('Geraldo' && true && ''); //  retorna o primeiro valor falso encontrado

console.log('****AND****')

function falaOi() {
    return 'Oi';
}
let vaiExecutar = false;
console.log(vaiExecutar && falaOi()); // retorna o primeiro valor falso encontrado

console.log('****OR****')

console.log(0 || false || null || 'Geraldo' || true); // retorna o primeiro valor verdadeiro encontrado, só precisa de um valor verdadeiro para retornar true

console.log('****Exemplo OR****')

const corUsuario = 'vermelho'; //sendo null ou undefined, a cor padrão será preto
const corPadrao = corUsuario || 'preto'; // se o usuário não escolher a cor, a cor padrão será preto
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // string com conteúdo (ou seja, é true)
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // retorna o primeiro valor verdadeiro encontrado (que é 'false')