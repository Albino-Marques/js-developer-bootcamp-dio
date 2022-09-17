const numero = 3;

if (numero % 2 === 0) {
  console.log("Seu número é par!");
} else {
  console.log("Seu número é impar!");
}

/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem:
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = "etanol";
const gastoMedioPorKm = 10;
const distanciaEmKm = 250;
const quantidadeLitros = distanciaEmKm / gastoMedioPorKm;

if (tipoCombustivel === "Etanol" || tipoCombustivel === "etanol") {
  gastoComAViagem = quantidadeLitros * precoEtanol;
  console.log(`O gasto com a viagem foi ${gastoComAViagem.toFixed(2)}`);
} else if (tipoCombustivel === "Gasolina" || tipoCombustivel === "gasolina") {
  gastoComAViagem = quantidadeLitros * precoGasolina;
  console.log(`O gasto com a viagem foi ${gastoComAViagem.toFixed(2)}`);
} else {
  console.log(
    "Por favor, não saia de casa, chame um mecânico urgênte e torça para que seu carro ainda funcione!"
  );
}
