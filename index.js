const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'marcosgray.com.br',
        user: 'marco036_marcos',
        password: 'Kirk!234',
        database: 'marco036_dburl'
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