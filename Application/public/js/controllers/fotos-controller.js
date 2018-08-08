angular.module('moduloPrincipal')
    .controller('FotosController',function ($scope, pictureResource){

    $scope.images = [];
    $scope.mensagem = "";
    $scope.filtro = '';

    pictureResource.query(
        function (images) {
        $scope.images = images;
    }, function(error) {
        console.log(error);
    });

    $scope.removePicture = function (image) {
        pictureResource.delete({fotoId : image._id}, function () {
            var removedImage = $scope.images.indexOf(image);
            $scope.images.splice(removedImage, 1);
            $scope.mensagem = image.titulo + ": Successfully removed";
        }, function (error) {
            console.log("Não deu para remover a foto: " + error.mensagem);
        });
    }




});