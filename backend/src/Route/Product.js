const express=require('express')
const app=express.Router()
const ProductController = require('../Controller/Product')
const multer  = require('multer')
const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  const upload = multer({ storage: storage1 })

app.post('/addNewProducts', upload.single('productPic'), ProductController.addNewProducts)
app.get('/getProducts/:id', ProductController.getProductImage)


module.exports = app