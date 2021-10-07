const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile')[environment];
const knex = require('knex')(config)

//shipping:

exports.shipping = function(req,res){
    knex('shipping_region')
    .select('shipping_region.shipping_region_id','shipping_region.shipping_region')
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.shipping_by_shipping_region_id = function(req,res){
    knex('shipping')
    .select('shipping.shipping_id','shipping.shipping_type','shipping.shipping_cost','shipping.shipping_region_id')
    .where('shipping.shipping_id',req.params.shipping_id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}
 
