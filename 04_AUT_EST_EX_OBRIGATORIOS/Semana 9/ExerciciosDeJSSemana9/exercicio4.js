var termo = document.getElementById('termo')
var botao = document.getElementById('confirma')
var mensagem = document.getElementById('mensagem')

var sequencia = [1,1]

function fibonacci () {
    sequencia.push(sequencia[sequencia.length -1] + sequencia[sequencia.length -2])  
}

botao.addEventListener('click', function () {
    for (i = 3; i <= termo.value; i++) {
        fibonacci()
    }
     mensagem.innerHTML = `A sequencia: ${sequencia}`
})