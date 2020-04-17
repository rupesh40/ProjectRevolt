//task 2 /create schema for gridStation

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
    StationNumber: requiredNumber,
    Chargingports
     {
        timestamps: true
    }
});


const GridStation = mongoose.model('GridStation', userSchema);

module.exports = GridStation; 