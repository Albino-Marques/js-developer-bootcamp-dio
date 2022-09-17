// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira:

//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require("./main-aula-03");

//my way
/*
const beneficio = gets();
const salario = gets();
let salarioFinal;

if (salario <= 1100) {
  salarioFinal = salario - 5 / 100 + beneficio;
  console.log(`Seu salário final foi ${salarioFinal}`);
} else if (salario >= 1100 && salario <= 2500) {
  salarioFinal = salario - 10 / 100 + beneficio;
  console.log(`Seu salário final foi ${salarioFinal}`);
} else if (salario > 2500) {
  salarioFinal = salario - 15 / 100 + beneficio;
  console.log(`Seu salário final foi ${salarioFinal}`);
} else {
  console.log(`Por favor, digite uma opção válida!`);
}*/

//other way

const valorSalario = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const aliquotaImposto = pegarAliquota(valorSalario);
const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);

const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir);
