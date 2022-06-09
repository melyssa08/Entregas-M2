var botao = document.getElementById('botao')
var main = document.getElementById('main')
var footer = document.getElementById('footer')
var header = document.getElementById('header')

document.body.style.color = 'burlywood'

var botaoObjeto = {
    modoClaro: true
}

function mudaACorDeTudo () {
    if (botaoObjeto.modoClaro) {
        main.style.backgroundColor = 'burlywood'
        footer.style.backgroundColor = 'burlywood'
        header.style.backgroundColor = 'burlywood'
        botao.innerText = 'Dark Mode'
        document.body.style.color = 'purple'
    } else {
        main.style.backgroundColor = 'purple'
        footer.style.backgroundColor = 'purple'
        header.style.backgroundColor = 'purple'
        document.body.style.color = 'burlywood'
        botao.innerText = 'Light Mode'
    }
}

$('#botao').click( function () {
    if (botaoObjeto.modoClaro) {
        botaoObjeto.modoClaro = false
    } else {
        botaoObjeto.modoClaro = true
    }
    mudaACorDeTudo()
})

