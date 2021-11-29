let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
valorDividido = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] ) {
   total = total + numbers[i]
  }
}

valorDividido = total / numbers.length

if(valorDividido > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor que 20")
}

