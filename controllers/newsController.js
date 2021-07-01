
const newsService = require('../services/newsService')

const renderHome = (req, res) => {
    let articles = [],
        message = ''
        newsService.getNews().then(response => {
            articles = response.articles    
        })
        .catch(err => {
            message = 'Error from retrievieng News from API'
        })
        .then(() => {
            res.render('home', {
                title: 'News',
                heading: 'Welcome to the news dashboard',
                homeActive: true,
                articles,
                message
            })
        })
}

module.exports = {
    renderHome
}