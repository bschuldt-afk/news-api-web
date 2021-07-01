const expressHandlebars = require('express-handlebars')
const express = require('express')
const bodyParser = require('body-parser')
const routing = require('./routes')
require('dotenv').config()

const server = express()
server.set('viewDir', 'views')

server.use(express.static('public'))

server.engine('html', expressHandlebars({
    extname: 'html',
}))

server.set('view engine', 'html')

server.use(bodyParser.urlencoded({
    extended: false
}))

// Ein Middlewarebeispiel das den request ausgiebt.
server.use((req, res, next) => {
    console.log('middleware action: ', req.url)
    next()
})

server.use('/', routing)

server.listen(process.env.PORT, () => {
    console.log('Server listening to ' + process.env.PORT)
})