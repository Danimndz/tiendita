var config = require('./dbconfig')
const sql = require('mssql')

const axios = require('axios');


async function getProductos() {
    /**
     * funtion to get the products from the database
     * @param {nothing} 
     * @return {Array[object]} An array of the products in the database
    */
    try{
        let pool = await sql.connect(config)
        let personas = await pool.request().query("SELECT * from productos")
        return personas.recordsets;
    }
    catch(err){
        console.log('error')
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
        let personas = await pool.request().query(`select * from productos where id = ${id_producto}`)
        return personas.recordsets;
    }
    catch(err){
        console.log('error')
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
        console.log(err) 
    }

}


module.exports = {
    getProductos: getProductos,
    getProducto: getProducto,
    registrarVenta: registrarVenta
}