const { check } = require("express-validator")

const signupValidator = [
    check('name').notEmpty().withMessage("Name can not be blank"),
    check('email').isEmail().withMessage("Email is invalid can not be blank").isEmpty().withMessage("Email can not be blank"),
    check('password').isLength({ min: 6 }).withMessage("password should be more than 6 char long").isEmpty().withMessage("Password is required")
]

module.exports = { signupValidator }