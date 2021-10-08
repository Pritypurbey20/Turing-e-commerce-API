const express = require('express')
const app = express()

const attributes = require('./Routes/attributes')
const categories = require('./Routes/categories')
const products = require('./Routes/products')
const department = require('./Routes/department')
const shipping = require('./Routes/shipping')
const tax = require('./Routes/tax')

app.use(express.json())
app.use('/',attributes,categories,products,department,shipping,tax)

app.listen(3030,()=>console.log('Listening to the port..'))

