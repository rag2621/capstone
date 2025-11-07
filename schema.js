const mongoose = require('mongoose');

const User= new mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
});


const Pro= new mongoose.Schema({
    Name: { type: String, required: true },
   
    city: { type: String, required: true },
    price: { type: Number, required: true },
    email: { type: String, required: true },
});






module.exports = {
    User: mongoose.model('regis', User),
    Property: mongoose.model('Property', Pro)
  
};
