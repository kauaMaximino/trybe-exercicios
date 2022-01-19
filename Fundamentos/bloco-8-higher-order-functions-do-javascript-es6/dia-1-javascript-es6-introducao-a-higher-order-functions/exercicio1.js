const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra 
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond
      id3: callback('Carla Paiva'), // Nome: Carla Paiva
    }
    return employees;
  };

const createEmployee = (name) => {
const email = name.replace(" ", "_").toLowerCase()

return {
    nome: name,
    email: `${email}@trybe.com`
}
}

console.log(newEmployees(createEmployee))