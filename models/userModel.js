const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

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
        index: true,
        unique:true
    },
    phoneNumber: Number,
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

const User = mongoose.model('User', userSchema);

module.exports = User; 