//2) Faça um programa que receba N (quantidade de número) e seus respectivos valores.
//Imprima o maior número par e o menor número impar.

const { gets, print } = require("./main-aula-02");

const n = gets();

let menorNumeroImpar = null;
let maiorNumeroPar = null;

for (let i = 0; i < n; i++) {
  const numero = gets();

  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);
