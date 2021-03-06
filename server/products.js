const router = require('express').Router()
const Product = require('./Models/Product.js')

router.get('/products', (req, res) => {
  Product.find()
    .then((products) => {
      /* let categoriesArray = []
      categories.forEach((category) => {
        categoriesArray.push(category.name)
      }) */
      res.json(products)
    })
    .catch((err) => res.json(err))
})
router.post('/products', (req, res) => {
  Product.create(req.body)
    .then((products) => res.json(products))
    .catch((err) => res.json(err))
})
module.exports = router
