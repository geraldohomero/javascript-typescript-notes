/* 
const h1 = document.querySelector('.container h1');
const h2 = document.querySelector('.container h2');
const data = new Date();

function getMesTexto(mes) {
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = 'janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'março';
            return mesTexto;
        case 3:
            mesTexto = 'abril';
            return mesTexto;
        case 4:
            mesTexto = 'maio';
            return mesTexto;
        case 5:
            mesTexto = 'junho';
            return mesTexto;
        case 6:
            mesTexto = 'julho';
            return mesTexto;
        case 7:
            mesTexto = 'agosto';
            return mesTexto;
        case 8:
            mesTexto = 'setembro';
            return mesTexto;
        case 9:
            mesTexto = 'outubro';
            return mesTexto;
        case 10:
            mesTexto = 'novembro';
            return mesTexto;
        case 11:
            mesTexto = 'dezembro';
            return mesTexto;
        default:
            mesTexto = 'Floriscleydinson'; // Se não for nenhum dos meses, não faz nada
            return mesTexto;
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Floriscleydinson'; // Se não for nenhum dos dias da semana, não faz nada
            return diaSemanaTexto;
    }
}

h1.innerHTML = `${getDiaSemanaTexto(data.getDay())}, ${data.getDate()} de ${getMesTexto(data.getMonth())} de ${data.getFullYear()}`;
h2.innerHTML = `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`;
 */
const h1 = document.querySelector(".container h1");
const h2 = document.querySelector(".container h2");
const data = new Date();
/* 
const opcoesData = {
  dateStyle: "full",
};
const opcoesHora = {
  timeStyle: "short",
}; 
*/

h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
});
// a hora vai sempre ser atualizada a cada segundo
function getTime() {
    const data = new Date();
    h2.innerHTML = data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit"});
    }
    setInterval(getTime, 1000);

