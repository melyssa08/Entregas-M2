var quantidadeDePessoas = document.getElementById("quantidade")
var botaoCalcula = document.getElementById("calcula")
var periodo = document.getElementById("periodo")
var mensagemTotal = document.getElementById("valor-total")
var voo = {}

function calcula (entradaCampo1, entradaCampo2) {
    voo.pessoas = entradaCampo1
    voo.turno = entradaCampo2
    if (voo.turno == "Diurno") {
        pessoasDiurno()
    } else {
        pessoasNoturno()
    }
}

function pessoasDiurno () {
    if (voo.pessoas > 50) {
        var cadaPessoaTotalDiurno = 200*0.6
        var valorFinal = voo.pessoas*cadaPessoaTotalDiurno
        mensagemTotal.innerHTML = `${valorFinal}`
    } else {
        mensagemTotal.innerHTML = `${voo.pessoas*200}`
    }
}

function pessoasNoturno () {
    if (voo.pessoas > 50) {
        var cadaPessoaTotalNoturno = 100*0.8
        var valorFinal = voo.pessoas*cadaPessoaTotalNoturno
        mensagemTotal.innerHTML = `${valorFinal}`
    } else {
        mensagemTotal.innerHTML = `${voo.pessoas*100}`
    }
}

botaoCalcula.addEventListener('click', function () {
    calcula(quantidadeDePessoas.value, periodo.value)
})