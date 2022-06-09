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

app.post('/postar', function (req,res) {
    db.run(`INSERT INTO Estado (modoCor) VALUES(${req.body.modoDaCor})`,[], function (err, row) {
        if (err) {
            console.log('Não deu certo')
        } else {
            res.send('Deu certo')
        }
    })
    db.close()
})

app.put('/atualiza', function (req, res) {
    db.run(`UPDATE Estado SET modoDaCor = ${req.body.modoDaCorNovo} WHERE modoDaCor = ${req.body.modoDaCor}`,[], function (err, row) {
        if (err) {
            console.log('Não deu certo')
        } else {
            res.send('Deu certo')
        }
    })
    db.close()
})

app.delete('/deletar', function (req, res) {
    db.run(`DELETE FROM Estado WHERE modoDaCor = ${req.body.modoDaCor}`,[], function (err, row) {
        if (err) {
            console.log('Não deu certo')
        } else {
            res.send('Deu certo')
        }
    })
    db.close()
})

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/`)
})