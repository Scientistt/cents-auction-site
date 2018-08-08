var mongoose = require('mongoose');

var schema = mongoose.Schema({
    nome : {
        type : String,
        required : true
    },
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    senha :{
        type : String,
        required : true
    },
    status :{
        type : String,
        required : true
    },
    cpf :{
        type : String,
        required : true
    },
    rg :{
        type : String,
        required : true
    },
    birthday :{
        type : String,
        required : true
    },
    phone1 :{
        type : String,
        required : false
    },
    phone2 :{
        type : String,
        required : false
    },
    sex :{
        type : String,
        required : false
    },
    cep :{
        type : String,
        required : true
    },
    city :{
        type : String,
        required : true
    },
    state :{
        type : String,
        required : true
    },
    address :{
        type : String,
        required : true
    },
    number :{
        type : String,
        required : true
    },
    compliment :{
        type : String,
        required : false
    },
    neighood :{
        type : String,
        required : true
    },
    country :{
        type : String,
        required : true
    },
    where :{
        type : String,
        required : false
    },
    bids :{
        type : Number,
        required : true
    }
});

mongoose.model('Usuario', schema);