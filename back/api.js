var db = require('./dboperations')
const logger = require('./logger')

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
    next()
})

router.route('/').get((request,response)=>{
    logger.info('La Tiendita');
    response.json({message: 'La Tiendita'});
})

router.route('/getProductos').get((request,response)=>{
    logger.verbose('Request list of products');
    db.getProductos().then(result=>{
        response.json(result[0])    
    })
})

router.route('/getProducto/:id_producto').get((request,response)=>{
    logger.verbose(`Request product with id = ${request.params.id_producto}`);
    db.getProducto(request.params.id_producto).then(result=>{
        response.json(result[0][0])    
    })
})

router.route('/registrarVenta/:id_producto').put((request,response)=>{
    let producto = {... request.body}

    db.registrarVenta(producto).then(result=>{
        return response.status(201).json({message:"venta realizada"})
    })  
})

module.exports = app;

var port = process.env.port || 8090
app.listen(port)
logger.info('Tiendida API is running at '+port)

