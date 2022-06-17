const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3')
const app = express()
const port = 3009
const hostname = '127.0.0.1'
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(cors({
    origin:'*'
}))

app.use(express.json())


app.get('/pega', function (req, res) {
    var db = new sqlite3.Database('banco.db')
    db.all(`SELECT * FROM Estado`,[], (err, rows) => {
        if (err) {
            return 'Não funcionou'
        } else {
            res.json(rows)
        }
    })
    db.close()
})

app.post('/postar',urlencodedParser, function (req, res) {
    var db = new sqlite3.Database('banco.db')
    db.run(`INSERT INTO Estado (modoDaCor) VALUES('${req.body.modoDaCor}')`, function (err, row) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(row)
        }
    })
    db.close()
})

app.put('/atualiza',urlencodedParser ,function (req, res) {
    var db = new sqlite3.Database('banco.db')
    db.run(`UPDATE Estado SET cor = "${req.body.cor}" WHERE modoDaCor = "${req.body.modoDaCor}"`, function (err, row) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(row)
        }
    })
    db.close()
})

app.delete('/deletar',urlencodedParser, function (req, res) {
    var db = new sqlite3.Database('banco.db')
    db.run(`DELETE FROM Estado WHERE modoDaCor = "${req.body.modoDaCor}"`, function (err, row) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(row)
        }
    })
    db.close()
})

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/`)
})