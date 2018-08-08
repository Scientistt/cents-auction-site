angular.module('moduloPrincipal')
    .controller('UsersManagementController',function ($scope, $routeParams, resources, $location, $window){

        userResource = resources.user;
        $scope.user = {};
        $scope.mensagem = "";


        /* if($scope.formulario.$valid)
          {*/



        if($routeParams.userId)
        {
            userResource.get({userId : $routeParams.userId},
                function (user) {
                    $scope.user = user;
                }, function(error) {
                });
        }

        /*setInterval(function(){
            if($routeParams.itemId && $routeParams.seeing)
            {
                console.log("Percebeu que era edição");
                itemResource.get({itemId : $routeParams.itemId},
                    function (auction) {
                        $scope.auction = auction;
                        console.log("Editando o seguinte item:");
                        console.log(auction);
                    }, function(error) {
                        console.log("Deu erro ao receber o item");
                        console.log(error);
                    });
            }
        }, 1000);*/



        $scope.submitItem = function () {

            if($scope.user._id)
            {
                userResource.update({userId : $scope.user._id}, $scope.user, function () {
                    $window.history.back();
                }, function (error) {
                });
            }
            else
            {
                $scope.user.status = "Normal";
                $scope.user.bids = 5;
                userResource.save($scope.user, function () {
                    $scope.user = {};

                    $location.path('/login');

                }, function (error) {

                });
            }

        };





        /*}/*
        else
        {
            console.log("Formulário invalido");
        }*/

    });