const express = require('express')
const app = express()
const port = 3000

function hashCode(length) {
    var code = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxz1023456789'
    var charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * charactersLength)) 
        console.log('Code: ' + code)      
    }    
    return code
}

app.get('/', (req, res) => {
    let code = hashCode(8)
    console.log('Code: ' + code)
    res.send('Code: ' + code)
})


app.listen(port, err => {
    if (err) {
        console.log('Erro ao tentar conectar...')
    } else {
        console.log('Servidor conectado a porta ' + port)
    }
})