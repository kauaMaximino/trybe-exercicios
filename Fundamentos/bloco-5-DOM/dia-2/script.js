let h1Create = document.createElement('h1');
h1Create.innerHTML = 'Exercício 5.2 - JavaScript DOM'
body.appendChild(h1Create);

let mainCreate = document.createElement('main')
body.appendChild(mainCreate);
mainCreate.className = 'main-content'

let main = document.querySelector('.main-content')
let sectionCreate = document.createElement('section')
main.appendChild(sectionCreate);
sectionCreate.className = 'center-content'

let section = document.querySelector('.center-content')
let pCreator = document.createElement('p')
pCreator.innerHTML = 'lorem'
section.appendChild(pCreator);

let sectionLeft = document.createElement('section')
main.appendChild(sectionLeft);
sectionLeft.className = 'left-content'

let sectionRight = document.createElement('section')
main.appendChild(sectionRight);
sectionRight.className = 'right-content'