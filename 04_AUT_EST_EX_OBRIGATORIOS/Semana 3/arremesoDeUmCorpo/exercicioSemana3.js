const velocidadeInicial = document.getElementById('velocidade-inicial')
const gravidade = 10

function tempo (arg) {
    console.log(` O tempo e ${arg/gravidade}`)
}

function alturaMaxima (arg) {
    console.log(` A altura maxima e ${(arg*arg)/(2*gravidade)}`)
}

velocidadeInicial.addEventListener('input', function () {
    tempo(parseInt(this.value))
    alturaMaxima(parseInt(this.value))
})