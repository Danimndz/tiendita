var db = require('./dboperations')

var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const { request, response } = require('express')
var app = express()
var router = express.Router()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

router.use((request,response,next)=>{
    // console.log('middleware')
    next()
})

router.route('/').get((request,response)=>{
    response.json({message: 'La Tiendita'});
})

var port = process.env.port || 8090
app.listen(port)
console.log('Tiendida API is running at '+port)

