const path = require('path')
const getEmailTemplate = async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../Layouts/index.html'))

    } catch (error) {
        console.log(error)
    }
}

module.exports = { getEmailTemplate }