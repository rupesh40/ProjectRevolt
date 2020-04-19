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

const gridStationSchema = new Schema({
    Name = requiredString,
    email: {
        type: String,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    phoneNumber: Number,
    StationAddress: {
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
    stationNumber: requiredNumber,
    NoOfChargingPoint= requiredNumber,
    
     {
        timestamps: true
    }
});


const GridStation = mongoose.model('GridStation', gridStationSchema);

module.exports = GridStation; 