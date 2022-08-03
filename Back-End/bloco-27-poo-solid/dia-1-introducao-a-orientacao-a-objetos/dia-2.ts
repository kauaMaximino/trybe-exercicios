interface Person {
  name: string;
  info: string;
}

class Students implements Person {
  constructor(
    public name: string,
    public school: string) { }
  
  get info() {
    return `${this.name} estuda no colégio ${this.school}`;
  }
}

class Professor implements Person {
  constructor(
    public name: string,
    public school: string,
    public subject: string) { }
  
  get info() { 
    return `${this.name} é professor(a) de ${this.subject} no colégio ${this.school}`;
  }
}

const printInfo = (person: Person) => {
  console.log(person.info);
}

const student = new Students('Maximino', 'Trybe');
const professor = new Professor('Kauã', 'Trybe', 'TypeScript');

printInfo(student);
printInfo(professor);