const numeros = document.getElementById('numeros')
const botao = document.getElementById('botao')
const valorFoco = document.getElementById('valor-foco')
var numerosComVirgulas = []
var lista = document.getElementById('lista-ordenada')
var posicao = document.getElementById('posicao')

botao.addEventListener('click', function () {
    for (item of numeros.value) {
        numerosComVirgulas.push(item)
    }
    bubbleSort(numerosComVirgulas)
    binarySearch(valorFoco.value)
})

function bubbleSort (arr) {
    for (j = 0; j <= arr.length; j++) {
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            var auxilia = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = auxilia
        }
    }
    } lista.innerHTML= `${arr}`
}

function binarySearch (valorFoco) {
    var index = meio(numerosComVirgulas)
    for (item of numerosComVirgulas) {
    if (numerosComVirgulas[index] < valorFoco) {
        index += 1
    } else if (numerosComVirgulas[index] > valorFoco) {
        index -= 1
    } else {
        posicao.innerHTML = `${index}`
    }
    } posicao.innerHTML = `${index}`
}

function meio (listaOrdenada) {
    if (listaOrdenada.length%2 != 0) {
        var meio = Math.floor(listaOrdenada.length/2)
    } else {
        var meio = listaOrdenada.length/2
    }
    return meio
}