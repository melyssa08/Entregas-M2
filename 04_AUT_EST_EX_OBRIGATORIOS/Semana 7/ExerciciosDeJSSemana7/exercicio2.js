var primeiroValor = document.getElementById("primeiro-valor")
var segundoValor = document.getElementById("segundo-valor")
const botaoTroca = document.getElementById("troca")
var intermediaria

botaoTroca.addEventListener('click', () => {
    intermediaria = primeiroValor.value
    primeiroValor.value = segundoValor.value
    segundoValor.value = intermediaria
})