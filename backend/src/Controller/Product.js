const Product = require('../Model/Product');
const path = require("path");
const fs = require("fs");
const addNewProducts = async(req, res) => {
   
    req.body.productPic = req.file.filename
    const data =  await Product.create(req.body)
    if(data){
      res.json({
        msg : "Product Added successfully"
      })
    }
  
   
}
const getProductImage = async (req, res) => {
    try {
      const data = await Product.findById(req?.params?.id); //getting vehicles by id
      
      const imagePath = path.join(
        __dirname,
        "../../uploads/products",
        data.productPic
      ); //acessing the imagePath
      const defaultPath = path.join(
        __dirname,
        "../../uploads/products",
        "RGIbanez.png"
      ); //giving the default image if not uploaded
  
      if (fs.existsSync(imagePath) && data.productPic) {
        res.sendFile(imagePath);
      } else {
        res.sendFile(defaultPath);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProductDetails = async (req, res) => {
    const data = await Product.find();

    res.json({
      productDetails : data
    })
  }

module.exports = {addNewProducts, getProductImage, getProductDetails}