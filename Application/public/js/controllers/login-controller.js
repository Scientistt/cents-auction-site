angular.module('moduloPrincipal')
    .controller('loginController', function ($scope, $http, $location, $window, resources) {

        userResource = resources.user;
        $scope.mensagem = {};


        console.log("Carregou na memória o LOGIN CONTROLLER");

        if($scope.usuario)
        {

        }
        else
        {
            $scope.usuario = {};
        }

        $scope.user = {};
        $scope.mensagem = "";
        $scope.isLogged = ($window.localStorage.token != undefined);



        $scope.addbids = function (value)
        {
            $scope.user.bids += value;
            userResource.update({userId : $scope.user._id}, $scope.user, function () {
                $scope.mensagem = value + " Sucessfully bought";
            }, function (error) {
            });
        };

        $scope.autenticar = function () {
            var usuario = $scope.usuario;
            $http.post('/autenticar', {nome: usuario.nome, senha: usuario.senha})
                .then(function () {
                    $scope.isLogged = true;
                    $window.localStorage.username = usuario.nome;
                    $location.path('/');

                }, function (error) {
                    $scope.mensagem = "Usuário e/ou senha inválidos";
                    //$scope.usuario = {};
                    $scope.isLogged = false;
                    console.log(error);
                });
        };


        resources.user.get({userId : $window.localStorage.username},
            function (user) {

                $scope.user = user;

            }, function(error) {
                console.log(error);
            });


        setInterval(function(){
            $scope.isLogged = ($window.localStorage.token != undefined).valueOf();

            userResource.get({userId : $window.localStorage.username},
                function (user) {
                    $scope.user = user;

                }, function(error) {
                    console.log("Not Logged in");
                });
        }, 1000);




        $scope.logout = function()
        {
            console.log("Logging out");
            delete $window.localStorage.token;
            delete $window.localStorage.username;
            $scope.isLogged = false;
            $location.path('/');
        };

    });


