numbers = [1, 4, 67, 89, 99, 56, 34]

const numbersTwo = numbers.filter(number => number > 10 ? true : false);

console.log(numbersTwo.sort((a, b) => a-b));