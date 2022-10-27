from personagem import Personagem
from jedi_sith import Jedi, Sith
import time


personagem_1 = Personagem('Luke', 'Humano', 80, 180, 100)

personagem_2 = Jedi('Yoda', 'Humano', 50, 80, 100)
personagem_3 = Sith('Darth Vader', 'Humano', 100, 190, 100)

print('BATALHA INICIA ⚔️')
print('-----------------------------------')
time.sleep(1)

while personagem_3.get_hp() > 0:

  print(f"{personagem_2.nome}, hp: {personagem_2.get_hp()}")
  print(f"{personagem_3.nome}, hp: {personagem_3.get_hp()}")
  print('-----------------------------------')
  time.sleep(1)
  personagem_3.atacar(personagem_2)


  if personagem_2.get_hp() <= 0:
    print(f"{personagem_2.nome} morreu")
    break

  if personagem_2.get_hp() > 0:
    personagem_2.contra_atacar(personagem_3)
  else:
    print('Siths wins')
    break

else:
  print('Jedi wins')