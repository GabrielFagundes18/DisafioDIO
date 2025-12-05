class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroiMago = new Heroi("Merlin", 100, "Mago");
const heroiGuerreiro = new Heroi("Leonidas", 35, "Guerreiro");
const heroiMonge = new Heroi("Po", 28, "Monge");
const heroiNinja = new Heroi("Sub-Zero", 22, "Ninja");



const herois = [heroiMago, heroiGuerreiro, heroiMonge, heroiNinja];

for (let heroi of herois) {
  heroi.atacar();
}
