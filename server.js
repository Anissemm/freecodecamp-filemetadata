const express = require('express')
const cors = require('cors')
require('dotenv').config()

const multer = require('multer')

const port = process.env.PORT || 3000

var app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

app.post('/api/fileanalyse', multer().single('upfile'), (req, res) => {
  const { originalname: name, mimetype: type, size } = req.file
  res.json({ name, type, size });
})

app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
