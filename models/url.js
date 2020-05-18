
const getUrls = db => async() => {
    const urls = await db('urls').select('*')
    return urls;
}

const getUrlCode = db => async(code) => {
    const url = await db('urls').select('url_normal').where('code', code)
    return url
}

const insertUrls = db => async(urlnormal, urlencurtada, code) => {
    const url = {
        url_normal: urlnormal,
        url_encurtada: urlencurtada,
        code
    }
    
    const urlInsert = await db('urls').insert(url)
    return urlInsert
}

const removeUrl = db => async(id) =>{
    await db('urls').where({ id }).del()
} 



module.exports = {
    getUrls,
    insertUrls,
    removeUrl,
    getUrlCode
}