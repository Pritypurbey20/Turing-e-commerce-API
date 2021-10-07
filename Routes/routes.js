const router =require('express').Router()
const auth = require('../auth')

//DEPARTMENT:
const department = require('../Controller/department')
router.get('/department',department.department)
router.get('/department/:department_id',department.department_by_department_id)

//CATEGORY:

categories = require('../Controller/categories')
router.get('/categories',categories.categories)
router.get('/categories/:category_id',categories.categories_by_category_id)
router.get('/categories/inProduct/:product_id',categories.categories_by_product_id)
router.get('/categories/inDepartment/:department_id',categories.categories_by_department_id)

//ATTRIBUTES:

attributes = require('../Controller/attributes')
router.get('/attributes', attributes.attributes)
router.get('/attributes/:attribute_id',attributes.attibutes_by_attribute_id)
router.get('/attributes/value/:attribute_id',attributes.attributes_by_value)
router.get('/attributes/inProject/:product_id',attributes.attributes_by_product_id)

//PRODUCTS:

products = require('../Controller/products')
router.get('/products',products.products)
router.get('/products/:product_id',products.products_by_products_id)
router.get('/products/inCategory/:category_id',products.products_by_category_id)
router.get('/products/inDepartment/:department_id',products.products_by_department_id)
router.get('/products/:product_id/details',products.product_by_details)
router.get('/products/:product_id/location',products.products_by_location)
router.get('/products/:product_id/reviews',products.products_by_review)
router.post('/products/:product_id/reviews',products.products_post_review)

//TAX:

tax = require('../Controller/tax')
router.get('/tax',tax.tax)
router.get('/tax/:tax_id',tax.tax_by_tax_id)

//SHIPPING:

shipping = require('../Controller/shipping')
router.get('/shipping/region',shipping.shipping)
router.get('/shipping/region/:shipping_id',shipping.shipping_by_shipping_region_id)

module.exports = router

