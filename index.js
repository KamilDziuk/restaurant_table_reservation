const express = require('express');
const app  = express();
const path = require('path');

const { error } = require('console');
const { title } = require('process');
const mongoose = require('mongoose');
const Reservation = require('./models/reservations');
// mongodb+srv://server583232_hollapollaReservations:Fq3QeIfyBnksOJp8@cluster0.f6ckz3r.mongodb.net/
mongoose.connect('mongodb://<server583232_hollapollaReservations>:<Fq3QeIfyBnksOJp8>@<mongodb.server583232.nazwa.pl>:<4192>/table_reservations')

.then(() =>
{
    console.log('Connect to the db')
})
.catch(error =>
    {
        console.log('Error')
        console.log(error)
    })
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/reservations', async (req, res) =>{
    const reservations =  await Reservation.find({})
console.log(reservations)
    res.render('reservations/index', {reservations})
})

app.listen(3000, () => {
console.log("APP is go!")
})

// const e =  new Reservation({

//     table_number:17,
  
//     place_number:2,

//     table_status:'null'    
// })
// e.save();