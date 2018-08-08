var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    imageurl : {
        type: String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    startprice : {
        type : Number,
        required: true
    },
    marketprice : {
        type : Number,
        required: true
    },
    user : {
        type : String,
        required: false
    },
    startdate : {
        type: String,
        required: true
    },
    starttime : {
        type: String,
        required: true
    },
    enddate : {
        type: String,
        required: false
    },
    endtime : {
        type: String,
        required: false
    },
    status : {
        type: String,
        required: false
    },description : {
        type: String,
        required: false
    }
});


mongoose.model('Item', schema);