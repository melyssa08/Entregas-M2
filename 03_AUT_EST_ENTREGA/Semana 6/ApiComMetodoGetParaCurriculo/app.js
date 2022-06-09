const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3')
const res = require('express/lib/response')
const app = express()
const port = 3009
const hostname = '127.0.0.1'

var db = new sqlite3.Database('banco.db', (err) => {
    if (err) {
        console.log('Já foi criada')
    } else {
        console.log('Criou uma agora')
    }
})

app.use(cors({
    origin:'*'
}))

app.get('/', function (req, res) {
    db.all(`SELECT * FROM Estado`,[], (err, rows) => {
        if (err) {
            return 'Não funcionou'
        } else {
            res.json(rows)
        }
    })
    db.close()
})

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/`)
})