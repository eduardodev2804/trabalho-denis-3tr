
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');


function calcularImc() {

  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);

  const imc = peso / (altura / 100) ** 2;

  alert(`Seu IMC é: ${imc.toFixed(2)}`);
}