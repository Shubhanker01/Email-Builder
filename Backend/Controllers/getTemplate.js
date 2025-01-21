const path = require('path')
const getTemplate = async (req, res) => {
    try {
        // req.headers['content-type'] = 'text/html'
        // let blob = req.body
        // res.setHeader('Content-Type', 'text/html')
        res.download(path.join(__dirname, '../Layouts/layout1.html'), 'Layout1.html', (err) => {
            if (err) {
                console.log(err)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getTemplate }