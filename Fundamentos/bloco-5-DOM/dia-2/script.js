let body = document.querySelector('#body');

let h1Create = document.createElement('h1');
body.appendChild(h1Create);

let mainCreate = document.createElement('main')
body.appendChild(mainCreate);
mainCreate.className = 'main-content'

let main = document.querySelector('.main-content')
let sectionCreate = document.createElement('section')
main.appendChild(sectionCreate);
sectionCreate.className = 'center-content'