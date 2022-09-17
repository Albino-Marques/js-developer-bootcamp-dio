function sayMyName(nome) {
  return nome;
}
function calculaIdade(anoNascimento, anoAtual) {
  return anoAtual - anoNascimento;
}
function classificaIdade(idade) {
  if (idade < 18) {
    return `${sayMyName(
      "Albino Marques dos Santos"
    )}: sua idade é ${idade} anos, você é de menor ainda!`;
  } else {
    return `${sayMyName(
      "Albino Marques dos Santos"
    )}: sua idade é ${idade} anos, você é de maior!`;
  }
}
function main() {
  const idade = calculaIdade(1997, 2022);
  console.log(classificaIdade(idade));
}
main();
