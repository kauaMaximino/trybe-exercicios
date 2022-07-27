enum Cores {
  Vermelho = 10,
  Verde = 20,
  Azul = 30,
}

const selectColor = (cor: number): string => {
  if (!Cores[cor]) return 'moio truta';
  return (Cores[cor]);
}

console.log(selectColor(20));