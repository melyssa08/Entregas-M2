const numeros = document.getElementById('numeros')
const botao = document.getElementById('botao')
const mensagem = document.getElementById('mensagem')

botao.addEventListener('click', function () {
    parOuImpar(parseInt(numeros.value[0]))
})

function parOuImpar (number) {
    if (number %2 == 0) {
        mensagem.innerHTML = `E par`
    } else {
        mensagem.innerHTML = `E impar`
    }
}