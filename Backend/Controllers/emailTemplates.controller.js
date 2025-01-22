const path = require('path')
const getEmailTemplate = async (req, res) => {
    try {
        let id = req.params.id
        res.sendFile(path.join(__dirname, `../Layouts/layout${id}.html`))
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getEmailTemplate }