const router = require('express').Router()
const newsController = require('../controllers/newsController')
const settingsController = require('../controllers/settingsController')

router.get('/settings', settingsController.renderSettings)
router.get('/admin', settingsController.renderSettings)
router.post('/settings', settingsController.receiveSettings)

router.get('/', newsController.renderHome)
router.get('/home', newsController.renderHome)


module.exports = router