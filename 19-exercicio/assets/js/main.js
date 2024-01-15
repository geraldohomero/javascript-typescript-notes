document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from being submitted
  
    var peso = document.getElementById('peso').value; // Get the weight
    var altura = document.getElementById('altura').value; // Get the height
  
    // Convert height from cm to m
    altura = altura / 100;
  
    // Calculate the BMI
    var imc = peso / (altura * altura);
  
    // Determine the obesity grade
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
  
    // Display the result
    document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '. ' + grade;
  });