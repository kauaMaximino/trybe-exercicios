function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}. Array completo: ${array}`);
}

[2, 5, 9].forEach((element, index, array) => {
  console.log(`a[${index}] = ${element}. Array completo: ${array}`);
});
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
