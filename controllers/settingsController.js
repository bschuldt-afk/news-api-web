const newsapi = require('newsapi-wrapper')
const settingsService = require('../services/settingsService')

const readSettings = () => {
    try {
        return JSON.parse(fs.readFileSync('settings.json'))
    } catch (e) {
        return {}
    }
}

const renderSettings = (req, res) => {
    settingsService.readSettings()
    .then(settings => {
        res.render('settings', {
            title: 'Settings',
            heading: 'Settings',
            settingsActive: true,
            newsApiKey: settings['news-api-key'] || '',
            newsApiCategories: newsapi.getCategories().map(categoryName => {
                return {
                    value: categoryName,
                    label: categoryName,
                    selected: categoryName === settings['news-api-category']
                }
            })
        })
    })
    
}

const receiveSettings = (req, res) => {
    settingsService.writeSettings(req.body)
    renderSettings(req, res)
}


module.exports = {
    renderSettings,
    receiveSettings
}