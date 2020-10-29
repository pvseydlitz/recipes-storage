const mongoose = require('mongoose')

const recipeShema = {
  titel: String,
  beschreibung: String,
  zutaten: Array,
  arbeitsschritte: Array,
  kategorien: Array,
  aufwand: String,
  kosten: String,
  picture: Object,
}

module.exports = mongoose.model('Recipe', recipeShema)
