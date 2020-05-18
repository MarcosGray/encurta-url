const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'marcosgray',
        password: 'Kirk!234',
        database: 'dburl'
    }
})

const app = require('./app')(db)
const port = process.env.PORT || 8081

app.listen(port, err => {
    if (err) {
        console.log('Erro ao tentar conectar...')
    } else {
        console.log('Servidor conectado a porta ' + port)
    }
})