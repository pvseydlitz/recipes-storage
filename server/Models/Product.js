const mongoose = require('mongoose')

const productShema = {
  name: String,
  category: String,
}

module.exports = mongoose.model('Product', productShema)
