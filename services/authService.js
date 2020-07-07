// here we'll add signup and login methods
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");


const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

}
exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    });
   const token = signToken(newUser._id)

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
      return next()
  }

  //2) check if user exist and password is correct
    const user = await User.findOne({email}) 
   
    if (!user || ! await user.correctPassword(password,user.password)) return next() 

  //3)check if everything is okay then send tokecn to client
  const token = signToken(user._id);

  res.status(200).json({
      status:"success",
      token
      
  });

}