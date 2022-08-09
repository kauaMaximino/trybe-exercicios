//nome, energia, vida, ataque e defesa

class Personagem {

  nome: string;
  energia: number;
  vida: number;
  ataque: number;
  defesa: number;

  constructor(nome: string, energia: number, vida: number, ataque: number, defesa: number) {
    this.nome = nome;
    this.energia = energia;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }
}

const person: Personagem = new Personagem('Personagem', 100, 100, 10, 10);

console.log(person.defesa);