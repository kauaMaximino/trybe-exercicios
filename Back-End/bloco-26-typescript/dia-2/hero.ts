interface Hero {
  name: string;
  power: string;
  inspirador(frase: string): string;
}
class Hero implements Hero {
  name: string;
  power: string;

  constructor(name: string, power: string) {
    this.name = name;
    this.power = power;
  }

  inspirador(frase: string) {
    return `${this.name}, com o poder ${this.power}, diz: ${frase}`;
  }
}

const Hero1 = new Hero('Batman', 'Dinheiro');
const Hero2 = new Hero('Superman', 'Laser');

console.log(Hero2.inspirador('Você é o melhor, até sem dinheiro'));