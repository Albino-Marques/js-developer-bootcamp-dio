/*
// Para criar objeto o jeito mais simples é :
const albino = {
  nome: "Albino M Santos",
  idade: "25 anos",
  descrever: function () {
    console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade} anos.`);
  },
}; //Declarando desta forma, onde dentro das chaves, irão os valores.

console.log(albino.idade);

albino.altura = 1.67;

albino.descrever();

albino.descrever = function () {
  console.log(`Meu nome é ${this.nome}.`);
};

albino.descrever();

//Também da para acessar por string:

console.log(albino["nome"]);

albino["nome"] = "Albus";
console.log(albino["nome"]);

*/

//Usar classe

class pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anosDeNascimento = 2022 - idade;
  }

  descrever() {
    console.log(
      `Meu nome é ${this.nome} e minha idade é ${this.idade} anos e nasci em ${this.anosDeNascimento}.`
    );
  }
}

//As classes são as definições de como um objeto deve ser (como no caso acima, uma pessoa deve ser). E uma instância (no caso de descrever diretamente UMA pessoa) é uma ocorrência de um objeto.

const albino = new pessoa("Albino", 25);

/*albino.nome = "Albino Marques dos Santos";
albino.idade = 25;
console.log(albino);
*/
albino.descrever();

pessoa.descrever();
