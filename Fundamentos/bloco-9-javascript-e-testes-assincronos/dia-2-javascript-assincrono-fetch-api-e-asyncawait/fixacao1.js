// const jsonInfo = `{
//   "muitasEmpresasUsam": [
//     "Google",
//     "Twitter",
//     "Facebook",
//     "etc..."
//   ],
//   "temVariasVantagens": [
//     "Legível",
//     "Fácil de usar",
//     "Leve",
//     "Popular",
//     "Versátil"
//   ],
//   "muitasLinguagensDaoSuporte": [
//     "Python",
//     "C",
//     "C++",
//     "Java",
//     "PHP"
//   ]
// }`;

// const usoJSONPorque = JSON.parse(jsonInfo);

// const corporationsList = document.getElementById('corporations-used-by');
// const advantagesList = document.getElementById('advantages');
// const languagesList = document.getElementById('languages-used-by');

// usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
//   const newLi = document.createElement('li');
//   newLi.innerText = empresa;
//   corporationsList.appendChild(newLi);
// });

// usoJSONPorque.temVariasVantagens.map((vantagens) => {
//   const newLi = document.createElement('li');
//   newLi.innerText = vantagens;
//   advantagesList.appendChild(newLi);
// });

// usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
//   const newLi = document.createElement('li');
//   newLi.innerText = linguagens;
//   languagesList.appendChild(newLi);
// });

// wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q

const ages = [
  {age: 18},
  {age: 19},
  {age: 15},
  {age: 15},
  {age: 19},
  {age: 18},
  {age: 18},
]

const ageFrequency = ages.reduce((accumulator, { age }) => {
  accumulator[age] = accumulator[age] + 1 || 1
  return accumulator;
}, {})

console.log(ageFrequency);