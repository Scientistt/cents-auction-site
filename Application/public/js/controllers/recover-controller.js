angular.module('moduloPrincipal')
    .controller('recoverController', function ($scope, $http, $location, $window, resources) {

        userResource = resources.user;


        console.log("Carregou recover");

        $scope.usuario = {};
        $scope.usuario.senha = undefined;

        userResource.get({userId : $scope.usuario.nome},
            function (user) {
                $scope.usuario.senha = user.senha;
                console.log("Found at recover: " + $scope.user.nome + " : " + $scope.user.senha);
                if(user.senha == undefined)
                    $scope.usuario.senha = "Undefined";
            }, function(error) {
                console.log("Not Logged in");
                $scope.usuario.senha = "Undefined";
            });


        setInterval(function(){

            console.log("Pesquisando " + $scope.usuario.nome);
            userResource.get({userId : $scope.usuario.nome},
                function (user) {
                    $scope.usuario.senha = user.senha;
                    console.log("Found at recover: " + $scope.user.nome + " : " + $scope.user.senha);
                    if(user.senha == undefined)
                        $scope.usuario.senha = "Undefined";
                }, function(error) {
                    console.log("Not Logged in");
                    $scope.usuario.senha = "Undefined";
                });
        }, 1000);

    });


