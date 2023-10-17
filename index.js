const prompt = require('prompt-sync')();

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1); 
  }
}

function obtenerNumeroValido() {
  let input;
  do {
    input = prompt("Ingresa un numero para calcular su factorial: ");
    if(isNaN(input)) {
      alert("Ingresa un numero valido.");
    }
  } while (isNaN(input));
  return parseInt(input);


const resultado = document.getElementById("output");
const numero = obterNumeroValido();
const factorial = calcularFactorial(numero);

resultado.innerHTML = `El factorial de ${numero} es ${factorial}`;