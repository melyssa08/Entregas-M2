var telefone = document.getElementById("telefone")
var mensagem = document.getElementById("mensagem")

function mensagemPositiva () {
    mensagem.innerHTML = "O numero de telefone esta no formato certo"
    mensagem.style.color = "green"
}

function mensagemDeErro () {
    mensagem.innerHTML = "O numero de telefone tem que estar neste formato: (XX)XXXXX-XXXX"
    mensagem.style.color = "red"
}

function validador (entrada) {
    if ((entrada.length < 14 ||
        entrada.length > 14 ) ||
        entrada[0] != "(" ||
        entrada[3] != ")" ||
        entrada[9] != "-") {
        mensagemDeErro()
    } else {
        console.log("mensagem aqui")
        mensagemPositiva()
    }
}

telefone.addEventListener("input", function () {
    validador(this.value)
} )
