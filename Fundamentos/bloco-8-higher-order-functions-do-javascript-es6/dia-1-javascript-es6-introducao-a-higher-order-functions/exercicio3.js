// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const compare = (rightAnswers, studentAnswers) => {
//   if (rightAnswers === studentAnswers) {
//     return 1;
//   } if (studentAnswers === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const countPoints = (rightAnswers, studentAnswers, callback) => {
//   let count = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = callback(rightAnswers[index], studentAnswers[index]);
//     count =+ actionReturn
//   }

//   return `Resultado final: ${count} pontos`
// };

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));