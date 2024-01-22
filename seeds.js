


const mongoose = require('mongoose');
const Reservation = require('./models/reservations');
// mongodb+srv://server583232_hollapollaReservations:Fq3QeIfyBnksOJp8@cluster0.f6ckz3r.mongodb.net/
mongoose.connect('mongodb://server583232_hollapollaReservations:Fq3QeIfyBnksOJp8@server583232.nazwa.pl: 4192/table_reservations')
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
