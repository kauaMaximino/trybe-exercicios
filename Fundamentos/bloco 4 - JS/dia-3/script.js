let fruits = [3, 4, 10, 1, 12];
let valorFinal;

for (let i = 0; i < fruits.length; i++) {
  valorFinal = valorFinal + fruits[i];
}

if (valorFinal <= 15) {
  console.log("Valor menor que 16");
} else {
  console.log("valor maior que 15");
}
