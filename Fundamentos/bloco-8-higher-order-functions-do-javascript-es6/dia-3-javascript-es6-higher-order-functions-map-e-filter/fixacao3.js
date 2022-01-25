const names = ['Kauã', 'Adriana', 'Heloise', 'Totti', 'Silvana'];
const search = [];
names.forEach(name => search.push(name.toLowerCase()))

search.find((name, index) => name === 'kauã' ? console.log(`${name} na posição ${index +1} do array`) : false)