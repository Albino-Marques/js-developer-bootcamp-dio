//1) Crie um programa que dado um número imprima a sua tabuada.

let numeroDigitado = 2;

for (let i = 1; i <= 10; i++) {
  const multiplicador = i;
  resultado = multiplicador * numeroDigitado;
  console.log(`${numeroDigitado} X ${multiplicador} = ${resultado}`);
}
//ou
const numero = 7;
for (let i = 1; i <= 10; i++) {
  console.log(i * numero);
}

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

let numeroVerificar = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 32, 47, 82, 60, 37, 15, 92, 91,
];
for (let i = 0; i < numeroVerificar.length; i++) {
  const number = numeroVerificar[i];
  if (number % 2 === 0) {
    console.log(`O número ${number} é PAR!`);
  } else {
    console.log(`O número ${number} é IMPAR!`);
  }
}

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

//
