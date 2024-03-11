/*
Operadores de Comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) ***** // não usado pois pode dar erro
=== igualdade estrita (valor e tipo)
!= diferente (valor) ***** // não usado pois pode dar erro
!== diferente estrito (valor e tipo)
*/
const comp = 10 > 5;
console.log(comp);

const comp2 = 10 >= 11;
console.log(comp2);

const comp3 = 10 < 11;
console.log(comp3);

const comp4 = 10 <= 11;
console.log(comp4);

console.log("*********")

const num1 = 10; // number
const num2 = '10'; // string 
const comp5 = num1 == num2; // true pois faz a conversão de tipos
console.log(comp5);

const comp6 = num1 === num2; // false pois não faz a conversão de tipos (checa o valor e o tipo) *******

console.log("*********")

const comp7 = num1 != num2; // false pois faz a conversão de tipos
console.log(comp7);

const comp8 = num1 !== num2; // true pois não faz a conversão de tipos (checa o valor e o tipo) *******

