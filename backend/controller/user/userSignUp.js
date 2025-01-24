const userModel = require("../../models/userModel")
const bcrypt = require('bcryptjs');



async function userSignUpController(req,res) {
    try {
        const {email,name,password} = req.body

       const user = await userModel.findOne({email})

       console.log('user',user)

       if(user){
        throw new Error("User already Exist")
       }
       
        
        if(!email){
            throw new Error('Please Provide email')
        }
        if(!name){
            throw new Error('Please Provide name')
        }
        if(!password){
            throw new Error('Please Provide password')
        }
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error('somethimg is wrong')
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload)

        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : 'User Created SuccessFully'
        })
    } catch (err) {
        
        res.json({
            message: err.message || err,
            error : true,
            success : false,
        })
        
    }
    
}

module.exports = userSignUpController