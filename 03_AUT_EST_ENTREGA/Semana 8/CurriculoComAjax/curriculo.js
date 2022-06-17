var botao = document.getElementById('botao')
var main = document.getElementById('main')
var footer = document.getElementById('footer')
var header = document.getElementById('header')

document.body.style.color = 'burlywood'

var guardaGet

function pegar () {
fetch('http://127.0.0.1:3009/pega').then((res)=> {
    return res.json()
}).then((dados) => {
    guardaGet = dados[dados.length - 1].modoDaCor
    return dados[dados.length - 1].modoDaCor
})
}

function postar (bool) {
    fetch('http://127.0.0.1:3009/postar', {method:'POST', headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        modoDaCor: `${bool}`
      })})
}

function deletar (bool) {
    fetch('http://127.0.0.1:3009/deletar', {method:'DELETE', headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
        modoDaCor: `${bool}`
    })
})
}

function atualizaBanco (bool) {
    fetch('http://127.0.0.1:3009/atualiza', {method:'PUT', headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
        modoDaCor: `${bool}`,
        cor: bool? 'burlywood': 'purple'
    })    
})
}

function mudaACorDeTudo () {
    if (guardaGet) {
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
    pegar()
    if (guardaGet) {
        postar(0)
        atualizaBanco(0)
    } else {
        postar(1)
        atualizaBanco(1)
    }
    mudaACorDeTudo()
    if (guardaGet) {
        deletar(1)
    } else {
        deletar(0)
    }
})

