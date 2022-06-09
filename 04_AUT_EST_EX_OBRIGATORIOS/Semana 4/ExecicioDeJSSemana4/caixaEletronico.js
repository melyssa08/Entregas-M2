function fraseDeResultado (nota5, nota10, nota1) {
    return `Notas de 5 :${nota5}; Notas de 10: ${nota10}; Notas de 1:${nota1}`
}

function contador (dinheiro) {
    let dinheiroEmString = dinheiro.toString()
    let ultimoIndiceDinheiro = parseInt(dinheiroString[dinheiroString.length - 1])
    if (ultimoIndiceDinheiro == 5) {
        return fraseDeResultado(1,(dinheiro - 5)/10, 0)

    } else if (ultimoIndiceDinheiro == 0) {
        return fraseDeResultado(0, dinheiro/10, 0)

    } else if (ultimoIndiceDinheiro > 5) {
        return fraseDeResultado(1,(dinheiro - ultimoIndiceDinheiro)/10, ultimoIndiceDinheiro -5)

    } else {
        return fraseDeResultado(0,(dinheiro - ultimoIndiceDinheiro)/10, ultimoIndiceDinheiro)

    }
}

