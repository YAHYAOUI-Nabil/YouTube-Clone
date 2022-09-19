const router = require('express').Router()
const videoController = require('../controllers/video')

router.post('/videos', videoController.addVideo)
router.get('/videos', videoController.getVideos)
router.get('/videos/:id', videoController.getOneVideo)
module.exports = router