const init = db => {
    const router = require('express').Router()
    const urlsController = require('../controllers/urls')

    router.get('/', urlsController.getControllerUrl(db))
    router.post('/encurtar-url', urlsController.insertUrl(db))
    router.get('/excluir/:id', urlsController.removeUrl(db))
    router.get('/:code', urlsController.getUrlCode(db))
    router.get('/404', (req, res) => {
        res.render('404')
    })
    return router
}

module.exports = init