/* 
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Uma das expressões precisam ser verdadeiras para retornar true e todas precisam ser falsas para retornar false
! -> NOT -> NÃO -> Nega uma expressão
*/

const expressaoAnd = true && true && true && true;
console.log(expressaoAnd);

const expressaoOr = false || false || false || true;
console.log(expressaoOr);

const expressaoNot = !true; // false (negação)
const expressaoNot2 = !!true; // true (negação da negação) 
console.log(expressaoNot);


console.log("*****Exemplo Login****")

const usuario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

//                      True                False
const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);
