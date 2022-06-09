const quantidade = document.getElementById('quantidade')
const aumenta = document.getElementById("aumenta")
const diminui = document.getElementById("diminui")

aumenta.addEventListener('click', () => {
    ++quantidade.value
})

diminui.addEventListener('click', () => {
    --quantidade.value
})