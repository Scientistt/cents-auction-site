
var path = require('path');

module.exports = function (app) {
    var api = app.api.foto;

    app.route('/v1/fotos')
        .get(api.lista)
        .post(api.adiciona);

    app.route('/v1/fotos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);


    // habilitando HTML5 mode

    /*app.all('/*', function (req, ans) {
        ans.sendFile(path.resolve('public/index.html'));
    });*/
};

