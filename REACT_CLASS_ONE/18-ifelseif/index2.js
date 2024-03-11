const numero = 11;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.')
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}
// O código acima pode ser reescrito da seguinte forma:
const numero2 = 11;

if (numero2 >= 0 && numero2 <= 5) {
    console.log('O número está entre 0 e 5.');
}
if (numero2 >= 6 && numero2 <= 8) {
    console.log('O número está entre 6 e 8.')
}
if (numero2 >= 9 && numero2 <= 11) {
    console.log('O número está entre 9 e 11.');
}
if (numero2 < 0 || numero2 > 11) {
    console.log('O número não está entre 0 e 11.');
}
// O código acima funciona da mesma forma que o anterior, porém, não é a melhor forma de escrever o código.
// A melhor forma é utilizando o else if, pois, dessa forma, o código fica mais limpo e mais fácil de entender.
// Apenas em casos específicos é que podemos utilizar apenas if e else, sem o else if.

