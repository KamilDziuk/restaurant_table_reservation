


const mongoose = require('mongoose');
const Reservation = require('./models/reservations');
mongoose.connect('mongodb://127.0.0.1:27017/table_reservations')
.then(() =>
{
    console.log('Connect to the db')
})
.catch(error =>
    {
        console.log('Error')
        console.log(error)
    })

    // const e =  new Reservation({

    //     table_number:1,
      
    //     place_number:3,
    
    //     table_status:'good'    
    // })
    // e.save();

    const seendReservation = [
{
       table_number:1,
      
        place_number:4,
    
        table_status:'free' 
},
{
    table_number:2,
   
     place_number:5,
 
     table_status:'free' 
},
{
    table_number:3,
   
     place_number:7,
 
     table_status:'free' 
},
{
    table_number:1,
   
     place_number:3,
 
     table_status:'free' 
},
{
    table_number:1,
   
     place_number:3,
 
     table_status:'free' 
}
    ]

    Reservation.insertMany(seendReservation)
