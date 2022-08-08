class Person {
  constructor(
    private name: string,
    private birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }
  
  getName(): string {
    return this.name
  }

  setName(name: string) {
    this.validateName(name);
    this.name = name;
    return 'name altered';
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  private validateName(value: string) {
    if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    
  }
}

const person = new Person('ana', new Date);
console.log(person.getName());
console.log(person.setName('maria'));
console.log(person.getName());