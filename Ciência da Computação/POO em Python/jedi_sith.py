from personagem import Personagem
from random import choice
from light_saber import SabreDeLuz


class Sith(Personagem):
  def __init__(self, nome, especie, peso, altura, hp):
    super().__init__(nome, especie, peso, altura, hp)
    self.sabre_de_luz = SabreDeLuz('Vermelho', 40)

  def atacar(self, personagem):
    if not personagem.defender():
      personagem.damage_hp(self.sabre_de_luz.forca)

  def falar(self):
    return 'Eu sou um Sith e vou destruir a galáxia'


class Jedi(Personagem):
  def __init__(self, nome, especie, peso, altura, hp):
    super().__init__(nome, especie, peso, altura, hp)
    self.sabre_de_luz = SabreDeLuz('Azul', 20)

  def defender(self):
    defesa = choice([True, False])
    if defesa:
      print(f"{self.nome} defendeu o ataque")
    return defesa

  def contra_atacar(self, personagem):
    personagem.damage_hp(self.sabre_de_luz.forca)

  def falar(self):
    return 'Eu sou um Jedi e vou proteger a galáxia'