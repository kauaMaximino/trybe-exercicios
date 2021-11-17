function converterTemperatura(temperatura, escalaOrigem, escalaDesejada) {

let resultado;

    if (escalaOrigem === 'celsius' && escalaDesejada === 'kelvin') {
        return resultado = temperatura + 273.15
    }
    if (escalaOrigem === 'kelvin' && escalaDesejada === 'celsius') {
        return resultado = temperatura - 273.15
    }
    if (escalaOrigem === 'celsius' && escalaDesejada === 'fahrenheit') {
        return resultado = temperatura * 1.8 + 32
    }
    if (escalaOrigem === 'fahrenheit' && escalaDesejada === 'celsius') {
        return resultado = (temperatura - 32) / 1.8
    }
    if (escalaOrigem === 'kelvin' && escalaDesejada === 'fahrenheit') {
        return resultado = (temperatura - 273.15) * 1.8 + 32
    }
    if (escalaOrigem === 'fahrenheit' && escalaDesejada === 'kelvin') {
        return resultado = ((temperatura - 32) / 1.8) + 273.15
    }

}
console.log(converterTemperatura(2, 'celsius', 'fahrenheit'))