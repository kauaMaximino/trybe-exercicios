function isBiggerThan10(element, index, array) {
  if (element > 10) {
    console.log(element, index);
  }
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false

const maiorQue10 = [12, 13, 8, 1, 4].every(element => element > 1); // true

// console.log(maiorQue10)

maiorQue10 ? console.log('todos os números são maiores que 10') : console.log('há números que não são maiores que 10');