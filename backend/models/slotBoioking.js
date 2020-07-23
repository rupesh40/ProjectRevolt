var mongoose = require("mongoose"),
var Schema = mongoose.Schema;


const slotBookingSchema= new Schema({
    startTime:timestamps,
    endTime:timestamps,
    typeOfcharger:String,
    status:Boolean,
    User:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"User"
        }
    ],
    Station:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"gridStationModel"
        }
    ]

},{
    timestamps:true
})
const slotBookingModel = mongoose.model("slotBookingModel", slotBookingSchema);

module.exports = slotBookingModel;