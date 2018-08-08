
var path = require('path');

module.exports = function (app) {
    var api = app.api.item;

    app.route('/v1/items')
        .get(api.lista)
        .post(api.adiciona);

    app.route('/v1/items/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);




    // habilitando HTML5 mode

    /*app.all('/*', function (req, ans) {
        ans.sendFile(path.resolve('public/index.html'));
    });*/
};

