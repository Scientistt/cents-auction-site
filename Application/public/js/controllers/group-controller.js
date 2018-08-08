angular.module('moduloPrincipal').controller("groupsController", function ($scope, $http) {

    $scope.groups = [];

    $http.get("v1/grupos")
        .success(function (grupos) {
        $scope.groups = grupos;
    })
        .error(function (error) {
            console.log(error);
        });


});