const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile')[environment];
const knex = require('knex')(config)

//TAX:

exports.tax = function(req,res){
    knex('tax')
    .select('*')
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}


exports.tax_by_tax_id = function(req,res){
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