const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile')[environment];
const knex = require('knex')(config)

//ATTRIBUTES:

exports.attributes = function(req,res){
    knex('attribute')
    .select('*')
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.attibutes_by_attribute_id = function(req,res){
    knex('attribute')
    .select('*')
    .where('attribute_id',req.params.attribute_id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.attributes_by_value = function(req,res){
    knex('attribute_value')
    .select('attribute_value.attribute_value_id','attribute_value.value')
    .join('attribute','attribute_value.attribute_value_id','=','attribute.attribute_id')
    .where('attribute.attribute_id',req.params.attribute_id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}


exports.attributes_by_product_id = function(req,res){
    knex('attribute')
    .select('attribute.name','product_attribute.attribute_value_id','attribute_value.value')
    .join("attribute_value", "attribute.attribute_id", "=", "attribute_value.attribute_id")
    .join("product_attribute", "attribute_value.attribute_value_id", "=", "product_attribute.attribute_value_id")
    .where('product_attribute.product_id',req.params.product_id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}