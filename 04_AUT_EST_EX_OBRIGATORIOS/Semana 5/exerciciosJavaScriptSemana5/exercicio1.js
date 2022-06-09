var primeiroValor = document.getElementById('primeiro-valor')
var segundoValor = document.getElementById('segundo-valor')
var selecao = document.getElementById('selecionado')
var botao = document.getElementById('botao')
var resultado
var saida = document.getElementById('saida')

function calcula () {
    switch (selecao.value){
        case '+':
            return resultado = parseFloat(primeiroValor.value) + parseFloat(segundoValor.value)
            break;
        case '-':
            return resultado = parseFloat(primeiroValor.value) - parseFloat(segundoValor.value)
            break;
        case '/':
            return resultado = parseFloat(primeiroValor.value) / parseFloat(segundoValor.value)
            break;
        case '*':
            return resultado = parseFloat(primeiroValor.value) * parseFloat(segundoValor.value)
            break;
        case '%':
            return resultado = parseFloat(primeiroValor.value) % parseFloat(segundoValor.value)
            break;
    }

}

botao.onclick = function () {
    saida.innerHTML = `Resultado: ${calcula()}`

}

var obj = {
    nome:'Maria'
}
