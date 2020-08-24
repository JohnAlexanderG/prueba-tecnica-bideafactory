var express = require('express')
var cors = require('cors')
var app = express()
require('es6-promise').polyfill();
require('isomorphic-fetch');    

app.use(cors())

app.use(express.static('public'));

app.get('/', function (req, res, next) {
    res.sendFile('index.html')
})
    
app.get('/products', function (req, res, next) {
    fetch('https://www.plazavea.com.pe/api/catalog_system/pub/products/search/?sc=1&fq=H:2629')
    .then((data) => data.json())
    .then((result) => {
        res.json(result)
    })
})
 
app.listen(3000, function () {
  console.log('Web server listening on port 3000')
})
