function triplica (chances) {
    
    let resultado = []

    for (let i = 0; i < chances.length; i++){
    resultado.push(chances[i] *3)
    }

    return resultado
}

console.log(triplica([2, 3, 4, 5]))