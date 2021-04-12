const {describe} = require('mocha');
const request = require('supertest');
const {expect} = require('chai');

const app = require('./api');
const db = require('./dboperations');

describe('GET /getProductos', () => {

    it('OK, we have at least 1 valid product', (done)=>{
        
        db.getProductos().then(result=>{
            expect(result[0].length).to.greaterThan(0)
            expect(result[0][0]).to.contain.property('id')
            expect(result[0][0]).to.contain.property('nombre')
            expect(result[0][0]).to.contain.property('precio')
            expect(result[0][0]).to.contain.property('cantidad')
            done();
        })
   
    })

});

describe('GET /getProducto', () => {

    it('OK, we can call a product by id', (done)=>{
        
        db.getProductos().then(result => {
            expect(result[0].length).to.greaterThan(0)
            expect(result[0][0]).to.contain.property('id')
            db.getProducto(result[0][0].id).then(res => {
                expect(res[0][0]).to.contain.property('id')
                expect(res[0][0]).to.contain.property('nombre')
                expect(res[0][0]).to.contain.property('precio')
                expect(res[0][0]).to.contain.property('cantidad')
                done();
            })
        })
   
    })

});

