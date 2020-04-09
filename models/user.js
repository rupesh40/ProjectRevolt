const mongoose = require('mongoose');

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
    userName: requiredString,
    email: {
        type: String,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    phoneNumber: Number,
    Address: {
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
    },
    ownedVehicals: [Number] // TODO: after creating vehical schema we'll change it to [vehicalSchema]
}, {
        timestamps: true
    }
);


const User = mongoose.model('User', userSchema);

module.exports = User; 