const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000 || process.env.PORT
const cors = require('cors')

app.use(cors())
app.use(express.text())
app.use(express.static('Layouts'))
app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.use('/api', require('../Backend/Routes/getAllTemplates'))
app.use('/api', require('../Backend/Routes/downloadTemplate'))
app.use('/api', require('../Backend/Routes/saveOutput'))
app.use('/api', require('../Backend/Routes/uploadImage'))

app.listen(port, () => {
    console.log('Server is listening on port', port)
})
