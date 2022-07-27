interface Hero {
  _name: string;
  _power: string;
  inspirador(frase: string): string;
}
class Hero {
  _name: string;
  _power: string;

  constructor(name: string, power: string) {
    this._name = name;
    this._power = power;
  }

  inspirador(frase: string) {
    return `${this._name}, com o poder ${this._power}, diz: ${frase}`;
  }
}

const Hero1 = new Hero('Batman', 'Dinheiro');
const Hero2 = new Hero('Superman', 'Laser');

console.log(Hero2.inspirador('Você é o melhor, até sem dinheiro'));