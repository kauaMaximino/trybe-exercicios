const pizzas = [
  'mussarela',
  'calabresa',
  'marguerita',
  'portuguesa',
  'brocolis',
  'pteste'
]

const array1 = [5, 12, 8, 130, 44];

const array2 = [
  {name: 'banana', quantidy: 30},
  {name: 'laranja', quantidy: 10},
  {name: 'cereja', quantidy: 50},
  {name: 'mamão', quantidy: 30},
  {name: 'amora', quantidy: 10}
]

const pizzaSelect = array1.filter(element => element <= 130)

console.log(pizzaSelect.sort((a, b) => b-a))