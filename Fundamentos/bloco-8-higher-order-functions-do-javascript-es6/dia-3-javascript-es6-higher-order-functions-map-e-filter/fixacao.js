const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  console.log(persons)
  const fullNames = persons.map((person) => person.firstName = 'teste');
  
//   console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

console.log(fullNames)
console.log(persons);