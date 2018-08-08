var api = {};
var mongoose = require('mongoose');
var model = mongoose.model("Grupo");

api.lista = function (req, ans) {
    model.find().then(function (grupos) {
        console.log(grupos);
        ans.json(grupos);
    }, function (error) {
        console.log(error);
        ans.status(500).json(error);
    });
};

module.exports = api;