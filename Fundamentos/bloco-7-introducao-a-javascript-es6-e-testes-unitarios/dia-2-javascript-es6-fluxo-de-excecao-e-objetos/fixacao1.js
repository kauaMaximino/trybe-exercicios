// const sum = (value1, value2) => (typeof value1 !== 'number' || typeof value2 !== 'number') ? 'Os valores devem ser numéricos' : value1 + value2;

//   console.log(sum(2, 3));

// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
// };

// const sum = (value1, value2) => {
//   try {
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     throw error.message;
//   }
// };

// console.log(sum(2, '3'));

const string = 'isso é um taste, não me leve à sério';
let counter = 0;
const letter = 'a';
for (index = 0; index < string.length; index += 1) {
  if (string[index] === letter) {
    counter += 1;
  } 
}

console.log(counter)