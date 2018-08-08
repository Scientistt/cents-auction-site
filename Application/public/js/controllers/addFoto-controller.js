angular.module('moduloPrincipal')
    .controller('addFotoController',function ($scope, $routeParams, pictureResource){
        $scope.picture = {};
        $scope.mensagem = "";

      /* if($scope.formulario.$valid)
        {*/

            console.log($routeParams.imageId);

            if($routeParams.imageId)
            {
                pictureResource.get({fotoId : $routeParams.imageId},
                    function (picture) {
                        $scope.picture = picture;
                    }, function(error) {
                        console.log(error);
                    });
            }

            $scope.submitPicture = function () {

                if($scope.picture._id)
                {
                    pictureResource.update({fotoId : $scope.picture._id},$scope.picture, function () {
                        $scope.mensagem = $scope.picture.titulo + ": Image successfully edited";
                    }, function (error) {
                        console.log("Deu ruim ao salvar: " + erro);
                        $scope.mensagem = $scope.picture.titulo + ": Could not edit the image";
                    } );
                }
                else
                {

                    pictureResource.save($scope.picture, function () {
                        console.log("Salvou a imagem: " + $scope.picture.titulo);
                        $scope.mensagem = $scope.picture.titulo + ": Image saved successfully";

                        $scope.picture = {};
                    }, function (error) {
                        console.log("Deu ruim ao salvar: " + erro);
                        $scope.mensagem = "Could not save the image";
                    });
                }
            }





        /*}/*
        else
        {
            console.log("Formulário invalido");
        }*/

    });