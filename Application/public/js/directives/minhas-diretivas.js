










angular.module('diretivas', [])
    .directive('painelDeImagensSimples', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
          titulo : '@titulo'
        };
        ddo.templateUrl = 'js/directives/painelDeImagensSimples1.html';
        ddo.transclude = true;
        return ddo;
    });







angular.module('diretivas')
    .directive('minhaFoto', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            url : '@url',
            titulo : "@titulo"
        };
        ddo.templateUrl = 'js/directives/minhaFoto.html';
        ddo.transclude = true;
        return ddo;
    });



angular.module('diretivas')
    .directive('meuBotaoPerigo', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            nome : '@nome',
            acao : "&"
        };
        //ddo.templateUrl = 'js/directives/meuBotaoPerigo.html';
        ddo.template = '<button ng-click="acao(auction)" class="btn btn-danger btn-block">{{nome}}</button>';
        ddo.transclude = true;
        return ddo;
    });


angular.module('diretivas', [])
    .directive('simpleItem', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            url : '@url',
            title : '@title',
            user: "@user",
            marketprice : "@marketprice",
            price : "@price",
            time:"@time",
            itemid : "@itemid",
            startdate : "@startdate",
            starttime : "@starttime"
        };
        ddo.templateUrl = 'js/directives/simpleItem.html';
        ddo.transclude = true;
        return ddo;
    });


angular.module('diretivas')
    .directive('simpleItemLine', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            url : '@url',
            title : '@title',
            user: "@user",
            price : "@price",
            marketprice : "@marketprice",
            startprice : "@startprice",
            time:"@time",
            itemid : "@itemid",
            startdate : "@startdate",
            starttime : "@starttime",
            enddate : "@enddate",
            endtime : "@endtime"
        };
        ddo.templateUrl = 'js/directives/simpleItemLine.html';
        ddo.transclude = true;
        return ddo;
    });




angular.module('diretivas')
    .directive('simpleUser', function () {
        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            nome : '@nome',
            fullname : '@fullname',
            status : '@status'
        };
        ddo.templateUrl = 'js/directives/simpleUser.html';
        ddo.transclude = true;
        return ddo;
    });