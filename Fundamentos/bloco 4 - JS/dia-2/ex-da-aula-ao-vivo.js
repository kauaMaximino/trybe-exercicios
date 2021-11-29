let primeiroNumber = Math.floor(Math.random() * 60) + 1;
let segundoNumber = Math.floor(Math.random() * 60) + 1;
let terceiroNumber = Math.floor(Math.random() * 60) + 1;
let quartoNumber = Math.floor(Math.random() * 60) + 1;
let quintoNumber = Math.floor(Math.random() * 60) + 1;
let sextoNumber = Math.floor(Math.random() * 60) + 1;

let numerosLoteria = [
  primeiroNumber,
  segundoNumber,
  terceiroNumber,
  quartoNumber,
  quintoNumber,
  sextoNumber,
];
let meusNumeros = [1, 2, 3, 4, 5, 6];

let contador = 0;

for (let iLoteria = 0; iLoteria < numerosLoteria.length; iLoteria += 1) {
  for (
    let iMeusNumeros = 0;
    meusNumeros < meusNumeros.length;
    iMeusNumeros += 1
  ) {
    if (numerosLoteria[iLoteria] === meusNumeros[iMeusNumeros]) {
      console.log("Acertou");
      contador += 1;
    }
  }
}

console.log(numerosLoteria);
console.log(meusNumeros);
