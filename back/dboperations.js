var config = require('./dbconfig')
const sql = require('mssql')

const axios = require('axios');


async function getProductos() {
    try{
        let pool = await sql.connect(config)
        let personas = await pool.request().query("SELECT * from productos")
        return personas.recordsets;
    }
    catch(err){
        console.log('error')
    }
}


module.exports = {
    getProductos: getProductos
}