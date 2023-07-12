alert('Nossa primeira mensagem!') // retorna undefined
window.alert('Nossa segunda mensagem!')
window.confirm('Deseja realmente apagar?')
window.prompt('Digite seu nome: ')

let confirma = confirm('Deseja realmente apagar?')   // retorna true ou false e fica armazenado na variável "confirma"
console.log(confirma)

let num1 = prompt('Digite um número: ')  // retorna o valor digitado e fica armazenado na variável "num1"
let num2 = prompt('Digite outro número: ')
console.log(num1 + num2)    // retorna a concatenação dos valores digitados
console.log(typeof num1)    // retorna string
console.log(typeof num2)    // retorna string
num1 = Number(num1)         // converte o valor digitado para number
num2 = Number(num2)         // converte o valor digitado para number
console.log(num1 + num2)    // retorna a soma dos valores digitados
console.log(typeof num1)    // retorna number
console.log(typeof num2)    // retorna number
const resultado = num1 + num2   // retorna a soma dos valores digitados
alert(`O resultado da soma foi ${resultado}`) // retorna o resultado da soma em uma caixa de diálogo
