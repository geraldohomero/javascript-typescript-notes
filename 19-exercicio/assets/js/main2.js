document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    var peso = document.getElementById('peso').value; //pega peso e altura
    var altura = document.getElementById('altura').value;
  
    // Converte altura de cm para m
    altura = altura / 100;
  

    var imc = peso / (altura * altura);
  

    var grade;
    if (imc < 18.5) {
      grade = 'Abaixo do peso';
    } else if (imc < 24.9) {
      grade = 'Peso normal';
    } else if (imc < 29.9) {
      grade = 'Sobrepeso';
    } else if (imc < 34.9) {
      grade = 'Obesidade grau 1';
    } else if (imc < 39.9) {
      grade = 'Obesidade grau 2';
    } else {
      grade = 'Obesidade grau 3';
    }
  
    //Mostra resultado
    document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '. ' + grade;
  });