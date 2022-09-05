//nome, energia, vida, ataque e defesa

export default class Personagem {

  constructor(
    private nome: string,
    private energia: number,
    protected vida: number,
    protected ataque: number,
    private defesa: number
  ) { }
  
  status(): void {
    console.log("Guerreiro")
    console.log("Nome: ", this.nome)
    console.log("Energia: ", this.energia)
    console.log("Ataque: ", this.ataque)
    console.log("defesa: ", this.defesa)
  }

  set name(nome: string) {
    this.nome = nome;
  }
}

export class Guerreiro extends Personagem {
  constructor(nome: string, energia: number, vida: number, ataque: number, defesa: number) {
    super(nome, energia, vida, ataque, defesa);
  }

  status(): void {
    super.status();
    console.log("Guerreiro")
  }

  atacar(personagem: Guerreiro): void {
    personagem.vida -= this.ataque;
  }

}