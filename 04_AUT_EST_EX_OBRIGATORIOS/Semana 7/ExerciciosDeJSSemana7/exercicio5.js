var qtdAlunos = document.getElementById("quantidade-de-alunos")
var campos = document.getElementById("campos-notas")
var botao = document.getElementById("botao-confirma")
var todasNotasProva = []
var todasNotasTrabalho = []

class NovoInput {
    criaInput (id, className) {
       var notaAluno = document.createElement("input")
       var trabalhoEscola = document.createElement("input")
       notaAluno.placeholder = `Nota da prova ${id}`
       notaAluno.id = id
       trabalhoEscola.placeholder = `Nota do trabalho ${className}`
       trabalhoEscola.className = `classe${className}`
       campos.appendChild(notaAluno)
       campos.appendChild(trabalhoEscola)
    }
}

function pegaValorNotasProva (index) {
    var notaProva = document.getElementById(`${index}`)
    var valorProva = notaProva.value 
    return valorProva * 2
}

function pegaValorNotasTrabalho (index) {
    var notaTrabalho = document.querySelector(`.classe${index}`)
    var valorTrabalho = notaTrabalho.value
    return valorTrabalho * 3
}

function calculaMediaDeCadaAlunoMostraResultado (todas, todasTrabalho) {
    let resultado
    for (item of todas) {
        for (item2 of todasTrabalho) {
            resultado = (item + item2)/5
            var mensagemMediaCadaAluno = document.getElementById('media-cada-aluno')
            mensagemMediaCadaAluno.innerHTML = `A média do aluno é ${resultado}`
        }
    }
}

function mediaDosAlunos (todas, todasTrabalho) {
    let resultado
    let resultadoProva
    let resultadoTrabalho
    for (item of todas) {
        for (item2 of todasTrabalho) {
            resultadoProva += item
            resultadoTrabalho += item2
        }
    }
    resultado = (resultadoProva + resultadoProva)/5
    var mensagemMediaGeral = document.getElementById('media-geral')
    mensagemMediaGeral.innerHTML = `A média geral é ${resultado}`
}

function mediaDosDois (tipo ,notas, qtdAlunos , paragrafo) {
    let resultado
    for (item of notas) {
        resultado += item
    }
    resultado = totalDois/qtdAlunos
    var mensagemMedia = document.getElementById(paragrafo)
    mensagemMedia.innerHTML = `A média de todas as notas de ${tipo} é ${resultado}`
}

function maiorEMenorNota (tipo, notas, paragrafo) {
    let maiorValor = Math.max(...notas)
    let menorValor = Math.min(...notas)
    let mensagem = document.getElementById(paragrafo)
    mensagem.innerHTML = `A maior nota de ${tipo} é ${maiorValor} e a menor nota é ${menorValor}`
}

function botaoConfirmaNotas (alunos, index = 1) {
    var botaoNotas = document.createElement("button")
    botaoNotas.id = 'botao-notas'
    campos.appendChild(botaoNotas)
    var pegaBotaoNotas = document.getElementById('botao-notas')
    pegaBotaoNotas.innerHTML = 'CONFIRMA NOTAS'
    pegaBotaoNotas.addEventListener('click', function () {
        var valorAdciona = alunos + 1
        while ( index < valorAdciona) {
            todasNotasProva.push(pegaValorNotasProva(index))
            todasNotasTrabalho.push(pegaValorNotasTrabalho(index))
        index++
        }
        calculaMediaDeCadaAlunoMostraResultado(todasNotasProva, todasNotasTrabalho)
        mediaDosAlunos(todasNotasProva, todasNotasTrabalho)
        mediaDosDois('provas', todasNotasProva, todasNotasProva.length, 'media-da-prova')
        mediaDosDois('trabalhos', todasNotasTrabalho, todasNotasProva.length, 'media-do-trabalho')
        maiorEMenorNota('provas',todasNotasProva, 'maior-nota-e-menor-nota-prova' )
        maiorEMenorNota('trabalhos', todasNotasTrabalho, 'maior-nota-e-menor-nota-trabalho')
    })
}

botao.addEventListener('click',  function () {
    var i = 0
    while (i < qtdAlunos.value) {
        new NovoInput().criaInput(i + 1, i + 1)
        i++
}
    botaoConfirmaNotas(qtdAlunos.value)
})
