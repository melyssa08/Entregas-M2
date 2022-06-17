var primeiroNumero = document.getElementById('numero-minimo')
var ultimoNumero = document.getElementById('numero-maximo')
var botao = document.getElementById('confirma')
var mensagem = document.getElementById('mensagem')
var numerosNoIntervalo = []
var intervaloPrimos = []

botao.addEventListener('click', function () {
    var primeiro = parseInt(primeiroNumero.value + 1)
    var ultimo = parseInt(ultimoNumero.value)
    for (i = primeiro ; i < ultimo; i++) {
        numerosNoIntervalo.push(i)
    }
    for (j of numerosNoIntervalo) {
        if (primo(j)) {
            intervaloPrimos.push(j)
        } 
    }
    mensagem.innerHTML = `O intervalo: ${intervaloPrimos.join()}`
})

function primo (num) {
    if (num == 2) {
        return true
    } else {
        for (k = 2; k < num; k ++) {
            if (num%k == 0) {
                return false
            } else {
                return true
            }
        }
    }
}
