let h1Create = document.createElement('h1');
h1Create.innerHTML = 'Exercício 5.2 - JavaScript DOM'
body.appendChild(h1Create);

let mainCreate = document.createElement('main')
mainCreate.className = 'main-content'
body.appendChild(mainCreate);

let main = document.querySelector('.main-content')
let sectionCreate = document.createElement('section')
sectionCreate.className = 'center-content'
main.appendChild(sectionCreate);

let section = document.querySelector('.center-content')
let pCreator = document.createElement('p')
pCreator.innerHTML = 'lorem'
section.appendChild(pCreator);

let sectionLeft = document.createElement('section')
sectionLeft.className = 'left-content'
main.appendChild(sectionLeft);

let sectionRight = document.createElement('section')
sectionRight.className = 'right-content'
main.appendChild(sectionRight);

let img = document.createElement('img')
img.className = 'small-image'
img.src = 'https://picsum.photos/200'
sectionLeft.appendChild(img)

let list = document.createElement('ul')
list.className = 'list-right'
sectionRight.appendChild(list)

let = listNumbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
let ulList = document.querySelector('.list-right')

for (let i = 0; i < listNumbers.length; i +=1) {
    let number = listNumbers[i]

    let numbersResults = document.createElement('li')
    numbersResults.innerHTML = number

    ulList.appendChild(numbersResults)
}
