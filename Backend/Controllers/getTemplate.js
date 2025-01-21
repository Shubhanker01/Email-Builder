const getTemplate = async (req, res) => {
    try {
        let blob = req.body
        res.send(blob)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getTemplate }