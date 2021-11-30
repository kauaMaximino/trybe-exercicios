let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];
let imparesTotais = impares.length;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    impares.push(numbers[i]);
  } else {
    console.log("Não existe números ímpares");
  }
}

console.log()
