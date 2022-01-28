function quantosParams(...args) {
  console.log('parâmetros:', args);
  return console.log(`Você passou ${args.length} parâmetros para a função.`);
}

quantosParams(0, 1, 2); // Você passou 3 parâmetros para a função.
quantosParams('string', null, [1, 2, 3], { }); // Você passou 4 parâmetros para a função.