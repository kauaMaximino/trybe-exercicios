from personagem import Personagem
from random import choice
from light_saber import SabreDeLuz


class Sith(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.sabre_de_luz = SabreDeLuz('vermelho', 20)

    def atacar(self, personagem):
      if not personagem.defender:
        personagem.damage_hp(self.sabre_de_luz.forca)



class Jedi(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.sabre_de_luz = SabreDeLuz('azul', 25)

    def defender(self):
        defesa = choice([True, False])
        if defesa:
          print(f"{self.nome} defendeu o ataque!")
        return defesa
