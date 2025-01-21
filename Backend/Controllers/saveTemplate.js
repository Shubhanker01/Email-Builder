const generateHTML = require('../utils/generateHTML')

const saveTemplate = async (req, res) => {
    try {
        let html = req.body
        generateHTML(html)
        res.send('file saved')
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = { saveTemplate }

