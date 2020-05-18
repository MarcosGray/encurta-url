const init = db => {
    const router = require('express').Router()
    const routeUrl = require('./routes/routeUrl')
    
    router.use(routeUrl(db))
    return router
}

module.exports = init