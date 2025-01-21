const express = require('express')
const router = express.Router()

const { saveTemplate } = require('../Controllers/saveTemplate')

router.route('/v1/saveTemplate').post(saveTemplate)

module.exports = router