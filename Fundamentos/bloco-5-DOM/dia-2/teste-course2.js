// let ondeEsta = document.querySelector('#elementoOndeVoceEsta')
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'green'

document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'adicionando texto'

document.querySelector('#pai').firstElementChild.innerText = 'outro texto'

// document.querySelector('#elementoOndeVoceEsta').nextSibling.style.color = 'red'

let pai = document.querySelector('#pai')

let aondeVcEsta2 = document.createElement('p')

pai.appendChild(aondeVcEsta2)