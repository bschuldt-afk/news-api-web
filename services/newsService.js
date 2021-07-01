const newsapi = require('newsapi-wrapper')
const settingsService = require('./settingsService')

const getNews = () => {
    return settingsService.readSettings()
    .then(settings => {
        return newsapi 
        .setApiKey(settings['news-api-key'] || process.env.NEWS_API_KEY || '')
        .setCategory(settings['news-api-category' || 'sports'])
        .send()    
    })
}

module.exports = {
    getNews
}