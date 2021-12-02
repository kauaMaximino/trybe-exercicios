let numbers = [3, 5, 9, 7, 70, 8, 100, 2, 2];
let impares = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    impares.push(numbers[i]);
  }
}

if (impares.length === 0) {
  console.log("Não existe valores ímpares");
}

if (impares.length > 0) {
  console.log(impares)
}