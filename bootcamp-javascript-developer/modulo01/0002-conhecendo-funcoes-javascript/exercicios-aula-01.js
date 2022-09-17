/*
function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));
*/

function calcularJuros() {}

function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2); // Ou também é possível usar "altura**2" que faz com que a altura seja elevada a 2 potência, ou "Math.pow(altura,2)" que faz a mesma coisa.
}
function classificarIMC(imc) {
  if (imc < 18.5) {
    return `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Seu IMC é ${imc.toFixed(2)}. Você está com peso normal.`;
  } else if (imc >= 25 && imc < 30) {
    return `Seu IMC é ${imc.toFixed(2)}. Você está acima do peso.`;
  } else if (imc >= 30 && imc < 40) {
    return `Seu IMC é ${imc.toFixed(2)}. Você está obeso.`;
  } else if (imc >= 40) {
    return `Seu IMC é ${imc.toFixed(
      2
    )}. Você está com obesidade grave. Procure um médico urgente.`;
  }
}
/*
function main() {
  const imc = calcularIMC(97, 1.67);
  console.log(classificarIMC(imc));
}

main() 
*/

//Main
(function (){
  const peso = 75;
  const altura = 1.75;

  const imc = calcularIMC(peso, altura);
  console.log(classificarIMC(imc));
}
)()