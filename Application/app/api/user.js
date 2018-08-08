var api = {};
var mongoose = require('mongoose');
var model = mongoose.model("Usuario");

api.lista = function (req, ans) {

    model.find().then(function (users) {
        ans.json(users);
    }, function (error) {
        console.log(error);
        ans.status(500).json(error);
    });
};






api.buscaPorId = function (req, ans) {
    console.log("Calling for the user " + req.params.id + " at " + new Date());
    model.find({"nome" : ("" + req.params.id)}).then(function (user) {

        if(!user)
            throw Error('USER não encontrada');
        ans.json(user[0]);
    }
    /*model.findById(req.params.id).then(function (user) {
        if(!user)
            throw Error('Item não encontrada');
        console.log("Encontrou um item");
        ans.json(user);

    }*/, function (error) {
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
    model.create(req.body).then(function (user) {
        ans.json(user);
    }, function (error) {
        console.log(error);
        ans.status(500).json(error);
    });
};

api.atualiza = function (req, ans) {
    model.findByIdAndUpdate(req.params.id, req.body).then(function (user) {
        ans.json(user);
    }, function (error) {
        console.log(error);
        ans.status(404).json(error);
    });
};

module.exports = api;