var numeros = document.getElementById('numero')
var confirma = document.getElementById('confirma')
var mensagem = document.getElementById('mensagem')

confirma.addEventListener('click', function () {
    var resultado = 0
    var auxilia 
    for (i = 0; i < numeros.value.length; i++) {
        auxilia = parseInt(numeros.value[i])
        resultado = resultado + auxilia
    }
    mensagem.innerHTML = `A soma dos digitos e ${resultado}`
})