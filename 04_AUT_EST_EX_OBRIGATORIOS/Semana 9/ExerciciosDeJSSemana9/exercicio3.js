var nomeUm = document.getElementById('nomeUm')
var nomeDois = document.getElementById('nomeDois')
var nomeTres = document.getElementById('nomeTres')
var botao = document.getElementById('confirma')
var mensagem = document.getElementById('mensagem')

botao.addEventListener('click', function () {
    var nomes = [nomeUm.value , nomeDois.value , nomeTres.value] 
    mensagem.innerHTML = `Os nomes em ordem: ${nomes.sort()}`
})