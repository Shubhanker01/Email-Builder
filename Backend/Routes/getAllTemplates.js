const express = require('express')
const router = express.Router()
const { getEmailTemplate } = require('../Controllers/emailTemplates.controller')

router.route('/v1/getEmailLayout').get(getEmailTemplate)

module.exports = router