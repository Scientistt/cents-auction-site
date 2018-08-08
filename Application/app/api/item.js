var api = {};
var mongoose = require('mongoose');
var model = mongoose.model("Item");

api.lista = function (req, ans) {

    model.find().then(function (items) {
        ans.json(items);
    }, function (error) {
        console.log(error);
        ans.status(500).json(error);
    });
};






api.buscaPorId = function (req, ans) {
    model.findById(req.params.id).then(function (item) {
        if(!item)
            throw Error('Item não encontrada');
        ans.json(item);

    }, function (error) {
        console.log(error);
        ans.status(404).json(error);
    });
};

api.removePorId = function (req, ans) {
    model.remove({_id : req.params.id}).then(function () {

        ans.sendStatus(204);

    }, function (error) {
        console.log(error);
        ans.status(500).json(error);
    });
};

api.adiciona = function (req, ans) {
    model.create(req.body).then(function (item) {
        ans.json(item);
    }, function (error) {
        console.log(error);
        ans.status(500).json(error);
    });
};

api.atualiza = function (req, ans) {
    model.findByIdAndUpdate(req.params.id, req.body).then(function (foto) {
        ans.json(foto);
    }, function (error) {
        console.log(error);
        ans.status(404).json(error);
    });
};

module.exports = api;