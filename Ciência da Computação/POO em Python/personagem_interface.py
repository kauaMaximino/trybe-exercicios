from abc import ABC, abstractclassmethod

class PersonagemInterface(ABC):

    @abstractclassmethod
    def atacar(self):
        pass

    @abstractclassmethod
    def defender(self):
        pass