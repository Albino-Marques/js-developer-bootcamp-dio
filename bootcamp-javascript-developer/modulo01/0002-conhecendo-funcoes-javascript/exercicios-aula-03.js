/*
function classificaDesconto(precoEtiqueta, opcaoDePagamento) {
  if (opcaoDePagamento === 1) {
    return `O valor de sua compra ficou R$${
      precoEtiqueta - precoEtiqueta * (0.1).toFixed(2)
    }.`;
  } else if (opcaoDePagamento === 2) {
    return `O valor de sua compra ficou R$${
      precoEtiqueta - precoEtiqueta * (0.15).toFixed(2)
    }.`;
  } else if (opcaoDePagamento === 3) {
    return `O valor de sua compra ficou R$${precoEtiqueta.toFixed(2)}.`;
  } else if (opcaoDePagamento === 4) {
    return `O valor de sua compra ficou R$${
      precoEtiqueta + precoEtiqueta * (0.1).toFixed(2)
    }.`;
  } else {
    `Por favor, digite uma opção válida de 1 a 4!`;
  }
}
function main() {
  console.log(classificaDesconto(97, 1));
}

main();
*/

function aplicarDesconto(precoEtiqueta, desconto) {
  return precoEtiqueta - precoEtiqueta * (desconto / 100);
}
function aplicarJuros(precoEtiqueta, juros) {
  return precoEtiqueta + precoEtiqueta * (juros / 100);
}
function classificaPagamento(formaPagamento, valor) {
  if (formaPagamento === 1) {
    console.log(`Você vai pagar R$${aplicarDesconto(valor, 10).toFixed(2)}.`);
  } else if (formaPagamento === 2) {
    console.log(`Você vai pagar R$${aplicarDesconto(valor, 15).toFixed(2)}.`);
  } else if (formaPagamento === 3) {
    console.log(`Você vai pagar R$${valor.toFixed(2)}.`);
  } else if (formaPagamento === 4) {
    console.log(`Você vai pagar R$${aplicarJuros(valor, 10).toFixed(2)}.`);
  } else {
    ("Por favor, digite uma opção válida de 1 à 4!");
  }
}
function main(formaDePagamento, preco) {
  return classificaPagamento(formaDePagamento, preco);
}

main(2, 100);
