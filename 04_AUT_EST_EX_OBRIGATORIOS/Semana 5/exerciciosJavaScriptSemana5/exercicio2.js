const preco = document.getElementById('preco')
const botao = document.getElementById('botao-confirma')
var notas = [1,2,5,10,20,50,100]
var mensagem = document.getElementById('mensagem')


botao.addEventListener('click', function () {
    var qtdCem = Math.floor(preco.value/notas[6])
    var restoCem = preco.value%notas[6]
    var qtdCinquenta = Math.floor(restoCem/notas[5])
    var restoCinquenta = restoCem%notas[5]
    var qtdVinte = Math.floor(restoCinquenta/notas[4])
    var restoVinte = restoCinquenta%notas[4]
    var qtdDez = Math.floor(restoVinte/notas[3])
    var restoDez = restoVinte%notas[3]
    var qtdCinco = Math.floor(restoDez/notas[2])
    var restoCinco = restoDez%notas[2]
    var qtdDois = Math.floor(restoCinco/notas[1])
    var restoDois = restoCinco%notas[1]
    var qtdUm = Math.floor(restoDois/notas[0])

    mensagem.innerHTML = `100:${qtdCem}; 50:${qtdCinquenta}; 20:${qtdVinte}; 10:${qtdDez}; 5:${qtdCinco}; 2:${qtdDois}; 1:${qtdUm};`
})