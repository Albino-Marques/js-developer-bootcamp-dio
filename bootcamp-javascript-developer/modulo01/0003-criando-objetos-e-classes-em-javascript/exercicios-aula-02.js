class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(
      `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e nasci em ${this.anoDeNascimento}.`
    );
  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velha que ${p2.nome}.`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velha que ${p1.nome}.`);
  } else {
    console.log(`${p1.nome} tem a mesma idade que ${p2.nome}.`);
  }
}

const albino = new Pessoa("Albino", 25);
const kauani = new Pessoa("Kauani", 23);
compararPessoas(albino, kauani);
