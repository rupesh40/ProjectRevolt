// here we'll add signup and login methods
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};


exports.login = async(req,res,next)=>{
    const {email,password} = req.body

    //1) checking if email and password exist
  if (!email || !password){
      return next(err)
  }

  //2) check if user exist and password is correct


  //3)check if everything is okay then send tokecn to client
  const token = " ";

  res.status(200).json({
      status:"success",
      token
  });
 }