import userModel from '../models/userModel.js' //TODO:
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// login user
const loginUser = async (req,res) => {

}

// register user
const registerUser = async (req,res) => {
    const {name, password, email} = req.body;
    try {
        //CHECKING IF USER EXIST
        const exist = await userModel.findOne({email});
        if (exist) {
            return res.json({succes:false, message:"User already exists"})
        }

        //VALIDATING EMAIL FORMAT & STRONG PASSWORD
        if(!validator.isEmail(email)) {
            return res.json({succes:false, message:"Please enter a valid email"})
        }

        if (password.length<8){
            return res.json({succes:false, message:"Password enter a strong password"})
        }
    } catch (error) {
        console.log(error)
    }
}

export {loginUser, registerUser}