const express = require('express')
const router = express.Router()
const { getTemplate } = require('../Controllers/getTemplate')

router.route('/v1/download').post(getTemplate)

module.exports = router