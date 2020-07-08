// here we'll add signup and login methods

const { promisify } = require("util");
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const sendEmail = require("./../utilities/email");
const { hash } = require("bcryptjs");
const crypto = require("crypto");
const { create } = require("domain");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user,statusCode,res )=>{
  const token = signToken(user._id);

    res.status(statusCode).json({
      status: "success",
      token,
      data: {
        user
      },
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

    createSendToken(newUser,201,res);

  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //1) checking if email and password exist
  if (!email || !password) {
    return next();
  }

  //2) check if user exist and password is correct
  const user = await User.findOne({ email });

  if (!user || !(await user.correctPassword(password, user.password)))
    return next();

  //3)check if everything is okay then send tokecn to client
  createSendToken(user,201,res);
 
};

exports.protect = async (req, res, next) => {
  //1)getting token and check of its there

  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(token);

  if (!token) return next();

  //2) verification of token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3)check if users still exist
  const freshUser = await User.findById(decoded.id);

  if (!freshUser) return next();

  //4)check if  user changed password after token is issued

  if (freshUser.changedPasswordAfter(decoded.iat)) return next();

  req.user = freshUser;
  console.log("protect is working ")
  //Grant access to protected route
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("you do not have permission to perfrom this action"),
        403
      );
    }
    next();
  };
};

exports.forgetPassword = async (req, res, next) => {
  //1) Get user based on Posted email

  const user = await User.findOne({ email: req.body.email });
 
  if (!user) {
    return next(/*new AppError("there is no user with email adress", 404)*/);
  }
   
  //2)Genrate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({validateBeforeSave:false});
  
  //3) send it to uers email
  const resetUrl = `${req.protocol}://${req.get('host')}/api/users/reset-Password/${resetToken}`

  const message = `Forget your password ? submit a patch request with your new password and confirm password to : ${resetUrl}. \n if you didnt forget your password please ignor this email! `

 try{
  await sendEmail({
   email: user.email,
   subject: "your password reset token (valid for 10 min)",
   message
 })
 
 res.json({
   status:"success",
   message:"token send to email"
 })
}
catch(err){
user.passwordResetToken =undefined;
user.passwordResetExpires = undefined

await user.save({validateBeforeSave:false})
return next(/*new AppError("there was error sending email .Try again later",500)*/)
}

}

exports.resetPassword=async (req,res,next)=>{

  //1. get the user based on token

  const hashedToken = crypto.createHash("sha256").update(req.params.token).digest('hex')

  const user = await User.findOne({passwordResetToken:hashedToken, passwordResetExpires:{$gt: Date.now()}})
  
  //2. if he token is not expired and there is user then update the password
    if(!user){
      return next(/*new AppError("token is invalid or expired",400)*/)
    } 
    user.password = req.body.password
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
  

  //3. log the user in and send jwt
  createSendToken(user,200,res);
}



exports.updatePassword= async (req,res,next)=>{
  //1. get user from collection
    const user = await User.findById(req.user.id).select('+password');

  //2. check if posted password is current
   if(! await user.correctPassword(req.body.currentPassword,user.password)) return next(/*new AppError("your current password is wrong")*/)
   
   //3.  if update the password
   user.password= req.body.newPassword
   await user.save()
   console.log("reached here")
  //3. log user in and seend jwt
  createSendToken(user,200,res);
}