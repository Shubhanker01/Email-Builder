const express = require('express')
const router = express.Router()
const { upload, uploadImage } = require('../Controllers/uploadImage')

router.post('/v1/upload', upload.single('image-upload'), uploadImage)

module.exports = router