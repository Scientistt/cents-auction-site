var api = {};
var mongoose = require('mongoose');
var model = mongoose.model("Foto");

api.lista = function (req, ans) {
    model.find().then(function (fotos) {
        ans.json(fotos);
    }, function (error) {
        console.log(error);
        ans.status(500).json(error);
    });
};

api.buscaPorId = function (req, ans) {
    model.findById(req.params.id).then(function (foto) {
        if(!foto)
            throw Error('Foto não encontrada');
        ans.json(foto);

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
    model.create(req.body).then(function (foto) {
        ans.json(foto);
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