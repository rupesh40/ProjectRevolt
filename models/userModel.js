const mongoose = require('mongoose');
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const requiredString = {
    type: String,
    required: true
};

const requiredNumber = {
    type: Number,
    required: true
};

// TODO: need to add tracking fields. e.g. visited grid stations, etc.
const userSchema = new Schema({
    role: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
    firstName: requiredString,
    lastName: requiredString,
    //userName: requiredString,
    password : {
        type: String,
        required:[true, "please provide password"],
        minlength:4
    },
    email: {
        type: String,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        unique:true
        
       
    },
    phoneNumber: requiredNumber,
    /*Address: {
        latitude: {
            ...requiredNumber,
            min: -90,
            max: 90,
        },
        longitude: {
            ...requiredNumber,
            min: -180,
            max: 180
        }
    },*/
    
    passwordChangedAt : {type:Date},
    passwordResetToken : {type:String},
    passwordResetExpires :{type : Date},
    
    ownedVehicals: [Number] // TODO: after creating vehical schema we'll change it to [vehicalSchema]
}, {
        timestamps: true
    }
);

userSchema.pre('save', async function(next){
if(!this.isModified("password")) return next();

//hash the password in the cost of 12

this.password = await bcrypt.hash(this.password,12);
  next();
})


userSchema.methods.correctPassword = async (candidatePassword,userPassword)=>{
    return bcrypt.compare(candidatePassword,userPassword)
}

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if(this.passwordChangedAt){
        const changedTimeStamp = parseInt(this.passwordChangedAt.getTime()/1000,10)
        console.log(changedTimeStamp,JWTTimestamp)
    return JWTTimestamp < changedTimeStamp;
    }
 //false means no changed
    return false
}

userSchema.methods.createPasswordResetToken= function(){
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken
 
}

const User = mongoose.model('User', userSchema);

module.exports = User; 