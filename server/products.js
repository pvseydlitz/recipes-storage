const router = require('express').Router()
const Product = require('./Models/Product.js')

router.get('/productNames', (req, res) => {
  Product.find()
    .then((loadedProducts) => {
      let productNames = []
      loadedProducts.forEach((loadedProduct) => {
        productNames.push(loadedProduct.name)
      })
      res.json(productNames)
    })
    .catch((err) => res.json(err))
})
router.post('/products', (req, res) => {
  Product.create(req.body)
    .then((products) => res.json(products))
    .catch((err) => res.json(err))
})
module.exports = router
