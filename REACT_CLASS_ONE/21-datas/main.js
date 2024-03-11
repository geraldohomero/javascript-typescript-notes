/* 
const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
const data = new Date(0 + tresHoras); // new serve para falar com uma função construtora (Date) 
*/  
//data começa em 01/01/1970 às 00:00:00 (UTC) - Unix Epoch Timestamp (marco zero)
// mês começa a contar pelo zero (0 - janeiro, 1 - fevereiro, 2 - março, etc)

//const data = new Date(2023, 3, 20, 15, 14, 27); // ano, mês, dia, hora, minuto, segundo, milissegundo
//const data = new Date('2021-04-20 20:20:59'); // ano-mês-dia hora:minuto:segundo
const data = new Date(); // data atual
console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // +1 porque começa em zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0123456(DSTQQSS) - 0 é domingo
console.log(Date.now()); // timestamp atual contado em milissegundos desde 01/01/1970
//const data = new Date('2021-04-20 20:20:59'); // ano-mês-dia hora:minuto:segundo
