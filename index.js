const express = require('express');
const app  = express();
const path = require('path');

const { error } = require('console');
const { title } = require('process');
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
