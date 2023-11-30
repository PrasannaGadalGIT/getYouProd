
const User = require("../Model/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const registerNewUser = async (req, res) => {

  const saltrounds = 10;

  const hashPassword = await bcrypt.hash(req.body.password, saltrounds);

  req.body.password = hashPassword

  //checking whther username and email exists in the database or not
  const data = await User.create(req.body);
   if (data) {
     res.json({
       msg: "registration succes",
     });
   }
};

const loginUser = async (req, res) => {
  const data = await User.findOne({email : req.body.email}) // checking whether the email exists or not 

  if(data){
    const passwordMatches = await bcrypt.compare(req.body.password, data.password)
      if(passwordMatches){
        const token = jwt.sign(
          {
            email : req.body.email
          },
          process.env.SECRET_KEY
        )
        res.json({
          logedIn: true,
          msg: "successfully logned into account",
          id: data._id,
          userToken: token,
          email : data.email
        });
        
        }
      }
  }

 


module.exports = {registerNewUser, loginUser}