const router = require('express').Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads/images')
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  },
})
const upload = multer({ storage: storage })

router.post('/uploadPicture', upload.single('photoUpload'), (req, res) => {
  if (req.file) {
    res.json(req.file)
  } else throw console.error()
})

module.exports = router
