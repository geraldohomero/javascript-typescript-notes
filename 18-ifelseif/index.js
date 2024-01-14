//if pode ser usado sozinho
//O else sempre precisa de if antes
//podemos ter quantos else e ifs que necessitamos na condição
//somente um else 
// podemos usar condições sem else-if, utilizando apenas if e else
const hora = 24;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else { //somente um else
    console.log('Oi!');
}