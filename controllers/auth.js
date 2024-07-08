const {User} = require("../models")
const hashPassword = require("../utils/hashPassword")

const signup = async(req, res, next) =>{
    try {
        const {name, email, password, role} = req.body;

        const hashedPass = await hashPassword(password);

        const newUser = new User({name, email, password: hashedPass, role})

        const isEmailExist = await User.findOne({email});

        if(isEmailExist) {
            res.code = 400;
            throw new Error("Email already exists!")
        }

        await newUser.save();

        res.status(201).json({code: 201, status: true, message: "User added successfully!"})
    } catch (error) {
        next(error) // Pass the error to the next middleware
    }
};

module.exports = {signup};