const mongoose = require("mongoose");

const reservationsSchema =  new mongoose.Schema({

    table_number:
    {
    type:Number  
    },
    place_number:
    {
    type:Number 
    },
    table_status:
    {
     type:String  
    }
    
});

const Reservation = mongoose.model('Reservation', reservationsSchema);
module.exports = Reservation;
