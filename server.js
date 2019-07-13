var express = require('express')
var http = require('http')
var path = require('path')
var app = express()
const port = 3000

var publicDir = path.join(__dirname, 'public')

app.set('port', process.env.PORT || 3000)
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))