const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../Uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

async function uploadImage(req, res) {
    try {
        console.log(req.file)
        res.sendFile(path.join(__dirname, `../Uploads/${req.file.originalname}`))
    } catch (error) {
        console.log(error)
    }
}
module.exports = { upload, uploadImage }