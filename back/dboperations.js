var config = require('./dbconfig')
const sql = require('mssql')
const logger = require('./logger')

const axios = require('axios');


async function getProductos() {
    /**
     * funtion to get the products from the database
     * @param {nothing} 
     * @return {Array[object]} An array of the products in the database
    */
    try{
        let pool = await sql.connect(config)
        let productos = await pool.request().query("SELECT * from productos")
        logger.debug(productos.recordsets);
        return productos.recordsets;
    }
    catch(err){
        logger.error('error')
    }
}


async function getProducto(id_producto) {
    /**
     * funtion to get the products from the database
     * @param {int} id_producto the id of the product
     * @return {object} the product with the selected id
    */
    try{
        let pool = await sql.connect(config)
        let productos = await pool.request().query(`select * from productos where id = ${id_producto}`)
        logger.debug(productos.recordsets);
        return productos.recordsets;
    }
    catch(err){
        logger.error('error')
    }
}



async function registrarVenta(producto){
    /**
     * funtion to save the sales int the database
     * @param {object} Producto The product with the info of the quantity
     * @return {nothing}
    */
    try{
        let pool = await sql.connect(config)
        let nueva_venta = await pool.request()
        .query(`update productos set cantidad = ${producto.cantidad} where id = ${producto.id}`)

    }catch(err){
        logger.error(err) 
    }

}


module.exports = {
    getProductos: getProductos,
    getProducto: getProducto,
    registrarVenta: registrarVenta
}