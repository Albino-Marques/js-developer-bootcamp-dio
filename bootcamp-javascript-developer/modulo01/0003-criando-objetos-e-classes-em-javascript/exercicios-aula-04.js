class Pessoas {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calculaIMC() {
    return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
  }
  classificaIMC() {
    const imc = this.calculaIMC();
    if (imc < 18.5) {
      return `Seu IMC é ${imc}. Você está abaixo do peso!`;
    } else if (imc >= 18.5 && imc < 25) {
      return `Seu IMC é ${imc}. Você está com o peso normal!`;
    } else if (imc >= 25 && imc < 30) {
      return `Seu IMC é ${imc}. Você está acima do peso!`;
    } else if (imc >= 30 && imc < 40) {
      return `Seu IMC é ${imc}. Você está obeso.`;
    } else {
      return `Seu IMC é ${imc}. Você está com obesidade mórbida. Procure um médico urgente.`;
    }
  }

  // Ou posso fazer assim! Sendo que aqui só a primeira será evocada por terem o mesmo nome!
  /*
  calculaIMC(massa, tamanho) {
    massa = this.peso;
    tamanho = this.altura;
    const IMC = massa / Math.pow(tamanho, 2);
    return `${this.nome}, você tem ${tamanho.toFixed(
      2
    )}m de altura, pesa cerca de ${massa.toFixed(
      2
    )}Kg e seu IMC é ${IMC.toFixed(2)}!`;
  }*/
}
const albino = new Pessoas("Albino", 97, 1.67);
console.log(albino.classificaIMC());
const kauani = new Pessoas("Kauani", 59, 1.65);
console.log(kauani.classificaIMC());
const otavio = new Pessoas("Otavio", 60, 1.77);
console.log(otavio.classificaIMC());

/*
`${this.nome}, você tem ${this.altura.toFixed(
  2
)}m de altura, pesa cerca de ${this.peso.toFixed(
  2
)}Kg e seu IMC é ${IMC.toFixed(2)}!`
*/
