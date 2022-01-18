const number = 5

const numberRandom = callback => {
    const numeroSorteado = Math.floor(Math.random() * 6)

    callback(numeroSorteado)
} 

const result = (numero) => {
    if (number === numero) {
        console.log("Parabéns você ganhou")
    } else {
        console.log("Tente novamente")
    }
}

numberRandom(result)