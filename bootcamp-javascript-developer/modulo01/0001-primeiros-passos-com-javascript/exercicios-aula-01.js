/*
Faça um programa para calcular o valor gasto de combustível em uma viagem.
Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Valor médio de gasto do carro; 
3 - Distância em KM da viagem;
*/

//Imprima no console o valor que será gasto de combustível para realizar está viagem.

const combustivel = 5.79;
const gastoCarro = 12;
const distancia = 1580;

let totalLitros = distancia / gastoCarro;
let gasto = totalLitros * combustivel;

console.log(gasto.toFixed(2));
