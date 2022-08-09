//nome, energia, vida, ataque e defesa

class Personagem {

  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {
    this.nome = nome;
    this.energia = energia;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }
}

const person: Personagem = new Personagem('Personagem', 100, 100, 10, 10);

console.log(person.defesa);