const mongoose = require('mongoose')

const contactScheema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    companyName :{
        type: String,
        require: true
    },
    email :{
        type: String,
        require: true
    },
    number :{
        type: String,
        require: true
    },
    message :{
        type: String,
        require: true
    }
})

module.exports = contactScheema