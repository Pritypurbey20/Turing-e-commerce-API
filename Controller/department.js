const environment = process.env.ENVIRONMENT || 'development'
const config = require('../knexfile')[environment];
const knex = require('knex')(config)

//For getting all the departments:

department = function(req,res){
    knex('department')
    .select('*')
    .then((posts)=>{
        res.json({
            Posts:posts
        })
    })
    .catch((err)=>{
        res.json({
            Error:err
        })
    })
}

//For getting department by department_id:

department_by_department_id = function(req,res){
    knex('department')
    .select('*')
    .where('department_id', req.params.department_id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports = {department , department_by_department_id}
