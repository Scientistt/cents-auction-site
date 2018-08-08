
module.exports = function (app) {
    var api = {};
    var mongoose = require('mongoose');

    var jwt = require('jsonwebtoken');

    var model = mongoose.model('Usuario');


    api.autentica = function (req, ans) {
        model.findOne({nome: req.body.nome, senha : req.body.senha})
            .then(function (usuario) {
                if(!usuario)
                {
                    res.sendStatus(401);
                }
                else
                {
                    // criar o token
                    var token = jwt.sign({nome: usuario.nome}, app.get('secret'), {expiresIn : 999999});
                    ans.set('x-access-token', token);
                    ans.set('user-name', usuario.nome);
                    ans.set('user-status', usuario.status);
                    ans.end();
                }
            }, function (error) {
                res.sendStatus(401);
            });
    };


    api.verificaToken = function (req, ans, next) {
        var token = req.headers['x-access-token'];
        if(token)
        {
            jwt.verify(token, app.get('secret'), function (err, decoded) {
                if(err) {

                    ans.sendStatus(401);

                }
                req.usuario = decoded;
                next();
            });
        }
        else
        {
            ans.sendStatus(401);
        }

    };
    return api;
};
