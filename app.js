const init = db => {
    const express = require('express')
    const app = express()
    const routes = require('./routes')
    const bodyParser = require('body-parser')
    
    app.set('view engine', 'ejs')
    
    app.use(bodyParser.json({ extended: true }))
    app.use(bodyParser.urlencoded())
    
    app.use(express.static('public'))
    app.use(routes(db))

    return app
}

module.exports = init