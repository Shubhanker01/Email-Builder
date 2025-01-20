const getTemplate = async (req, res) => {
    try {
        let bodyContent = req.body
        res.setHeader('Content-type', 'text/html')
        res.send(Buffer.from(bodyContent))
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getTemplate }