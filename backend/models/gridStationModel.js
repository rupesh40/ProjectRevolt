//task 2 /create schema for gridStation

const mongoose = require("mongoose");

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

// Add StationAddress, TotalCapacity, AvailableCapacity, isOpen, WorkingTimes e.g. 9AM-5PM, Owner.

const gridStationSchema = new Schema(
  {
    Name: requiredString,
    email: {
      type: String,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      unique: true,
    },
    phoneNumber: Number,
    isOpen:{
      type:String,
      enum:["open","closed"],
      default:"open"
    },
    WorkingTime:{
      type:String
    },
    totalCapacity:{
      type:String
    },
    availableCapacity:{
      type:String
    },

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
    NoOfChargingPoint: {
      type:Number
    },
  },
  {
    timestamps: true,
  }
);

const GridStationModel = mongoose.model("GridStationModel", gridStationSchema);

module.exports = GridStationModel;
