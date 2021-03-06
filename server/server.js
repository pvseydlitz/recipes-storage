const mongoose = require('mongoose')
const Recipe = require('./Models/Recipe')
const express = require('express')

mongoose.connect('mongodb://localhost:27017/recipes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(express.json())

const pictureUpload = require('./pictureUpload')
app.use('/api/', pictureUpload)

const categories = require('./category')
app.use(categories)

const products = require('./products')
app.use('/api/', products)

app.listen(3333, () => console.log('Express ready on port 3333'))

app.get('/recipes', (req, res) => {
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.json(err))
})

app.post('/checkIfRecipeExists', (req, res) => {
  Recipe.find()
    .then((recipes) => {
      let exists = false
      for (let i = 0; i < recipes.length; i++) {
        if (String(recipes[i]._id) === String(req.body._id)) {
          exists = true
        }
      }
      res.status(200).json(exists)
    })
    .catch((err) => res.status(404).json(err))
})

app.post('/recipes', (req, res) => {
  Recipe.create(req.body)
    .then((recipe) => res.json(recipe))
    .catch((err) => res.json(err))
})

app.patch('/recipes/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((recipe) => res.json(recipe))
    .catch((err) => res.json(err))
})

app.delete('/recipes/:id', (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(res.json('Rezept wurde gelöscht.'))
    .catch((err) => res.json(err))
})
