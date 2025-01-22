const express = require('express')
const router = express.Router()
const { upload, uploadImage, sendImage } = require('../Controllers/uploadImage')

// router to upload image to the server
router.post('/v1/upload', upload.single('image-upload'), uploadImage)
// router to send image to the frontend
router.get('/v1/sendImage/:imagename', sendImage)
module.exports = router