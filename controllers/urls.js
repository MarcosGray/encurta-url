const url = require('../models/url')

function hashCode(length) {
    var code = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxz1023456789'
    var charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        code += characters.charAt(Math.floor(Math.random() * charactersLength))              
    }    
    return code
}

const getControllerUrl = db => async(req, res) => {
    const controllerUrls = await url.getUrls(db)()    
    res.render('home', {
        urls: controllerUrls
    })
}

const getUrlCode = db => async(req, res) => {
   
    if (req.params.code === '404') {
        res.redirect('/')
    } else {
        const codeUrl = await url.getUrlCode(db)(req.params.code)
        const site = codeUrl[0].url_normal
    
        if (!site || site.length <= 0) {
            res.redirect('/')
        } else {
            res.redirect(site)
        }  
    }
}

const insertUrl = db => async(req, res) => {
    let urlDigitada = req.body.urlnormal
    let http = urlDigitada.indexOf("http://")
 
    if (http === -1) {
        urlDigitada = 'http://' + urlDigitada
    }
    
    let code = hashCode(9)
    if (urlDigitada.length === 0 || urlDigitada === 'http://') {      
        res.redirect('/')
    } 
    else {
        const urlEncurtada = () => {
            return 'http://127.0.0.1:8081/' + code
        }
        
        const urlFromDb = await url.insertUrls(db)(urlDigitada, urlEncurtada(), code)
        res.redirect('/')
    }  

}

const removeUrl = db => async(req, res) => {
    const urlRemove = await url.removeUrl(db)(req.params.id)
    res.redirect('/')
}

module.exports = {
    getControllerUrl, 
    insertUrl,
    removeUrl,
    getUrlCode
}