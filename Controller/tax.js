const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile')[environment];
const knex = require('knex')(config)

//TAX:

//For getting all the tax:

tax = function(req,res){
    knex('tax')
    .select('*')
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

//For getting tax by tax_id:

tax_by_tax_id = function(req,res){
    knex('tax')
    .select('tax.tax_id','tax.tax_type','tax.tax_percentage')
    .where('tax.tax_id',req.params.tax_id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports = {tax , tax_by_tax_id}