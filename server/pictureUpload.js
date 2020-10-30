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

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Nur Bilddateien dürfen hochgeladen werden!'
    return cb(new Error('Nur Bilddateien dürfen hochgeladen werden!'), false)
  }
  cb(null, true)
}

router.post('/uploadPicture', (req, res) => {
  let upload = multer({ storage: storage, fileFilter: imageFilter }).single(
    'photoUpload'
  )
  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.json(req.fileValidationError)
    } else if (!req.file) {
      return res.json('Kein Bild ausgewählt')
    } else if (err instanceof multer.MulterError) {
      return res.send(err)
    } else if (err) {
      return res.send(err)
    }
    res.json(req.file)
  })
})

module.exports = router
