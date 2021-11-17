function letras(frase, letra) {

    let resultado = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            resultado++
        }
    }

    return resultado
}
console.log(letras('cada coisa que me acontece', 'i'))