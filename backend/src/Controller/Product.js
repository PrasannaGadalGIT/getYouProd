const Product = require('../Model/Product');

const addNewProducts = (req, res) => {
    const data = Product.create(req.body)

    if(data){
       
            res.json({
              msg: "product add success"
            })
    }
}
const getProductImage = async (req, res) => {
    try {
      const data = await Order.findById(req?.params?.id); //getting vehicles by id
      
      const imagePath = path.join(
        __dirname,
        "../../uploads/order",
        data.foodImage
      ); //acessing the imagePath
      const defaultPath = path.join(
        __dirname,
        "../../uploads/order",
        "pizza.jpg"
      ); //giving the default image if not uploaded
  
      if (fs.existsSync(imagePath) && data.foodImage) {
        res.sendFile(imagePath);
      } else {
        res.sendFile(defaultPath);
      }
    } catch (err) {
      console.log(err);
    }
  };

module.exports = {addNewProducts, getProductImage}