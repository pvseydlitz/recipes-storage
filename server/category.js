const router = require('express').Router()
const Category = require('./Models/Category.js')

router.get('/categories', (req, res) => {
  Category.find()
    .then((categories) => {
      let categoriesArray = []
      categories.forEach((category) => {
        categoriesArray.push(category.name)
      })
      res.json(categoriesArray)
    })
    .catch((err) => res.json(err))
})
router.post('/categories', (req, res) => {
  Category.create(req.body)
    .then((categories) => res.json(categories))
    .catch((err) => res.json(err))
})
module.exports = router
