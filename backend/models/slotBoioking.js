var mongoose = require("mongoose"),
var Schema = mongoose.Schema;


const slotBookingSchema= new Schema({
    startTime:{type:String},
    endTime:{type:String},
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

date :{type:Date}
},{
    timestamps:true
})
const slotBookingModel = mongoose.model("slotBookingModel", slotBookingSchema);

module.exports = slotBookingModel;