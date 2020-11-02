const mongoose = require('mongoose')

const categoryShema = {
  name: String,
}

module.exports = mongoose.model('Category', categoryShema)
