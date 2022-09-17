class Carro {
  marca;
  cor;
  kmPorLitro;

  constructor(marca, cor, kmPorLitro) {
    this.marca = marca;
    this.cor = cor;
    this.kmPorLitro = kmPorLitro;
  }

  calculoGasto(distanciaEmKm, precoCombustivel) {
    return `O ${this.marca} Ka ${this.cor}, fazendo ${
      this.kmPorLitro
    }Km por litro irá consumir em média em uma viagem de ${distanciaEmKm}Km, ${
      distanciaEmKm * this.kmPorLitro.toFixed(2)
    } litros de combustível, estando a R$${precoCombustivel} o combustível, gastará no total R$${(
      (distanciaEmKm / this.kmPorLitro) *
      precoCombustivel
    ).toFixed(2)}.`;
  }
}
const Ka = new Carro("Ford", "Vermelho", 15);
console.log(Ka.calculoGasto(100, 5.59));
const Uno = new Carro("Fiat", "Branco", 10);
console.log(Uno.calculoGasto(100, 5, 59));
