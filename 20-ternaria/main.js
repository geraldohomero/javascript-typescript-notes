// ? : Encurtar o código em caso de necessário somente um if e else
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1009;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //setando um valor padrão para a variável
//console.log(corPadrao); //Preta
//const corUsuario = 'Vermelho'
//console.log(corPadrao); //Vermelho
console.log(nivelUsuario, corPadrao);
