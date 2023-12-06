const User = require("../Model/User");

const getUserDetails = async(req, res) => {
    const data = await User.findById(req.params.id)
    if(data){
        res.json({
            user : data
        })
    }
}

module.exports = {getUserDetails}