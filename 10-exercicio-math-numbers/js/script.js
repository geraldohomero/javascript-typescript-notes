const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p> Seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p> A raiz quadrada é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> É NaN?: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> o número ao quadrado é ${Math.pow(numero, 2)}</p>`;
texto.innerHTML += `<p> Arredondando para baixo é ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para cima é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Com duas casas decimais é ${numero.toFixed(2)}</p>`;
