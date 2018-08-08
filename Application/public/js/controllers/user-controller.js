angular.module('moduloPrincipal')
    .controller('usersController',function ($scope, resources, $window, $location){

        userResource = resources.user;


        $scope.users = [];




        userResource.query(
            function (users) {
                $scope.users = users;
            }, function(error) {
                console.log(error);
            });








        setInterval(function(){
            userResource.query(
                function (users) {
                    $scope.users = users;
                }, function(error) {
                    console.log(error);
                });
        }, 1000);



        $scope.removeUser = function (users) {
            userResource.delete({userId : users._id}, function () {
                var removedItem = $scope.users.indexOf(users);
                $scope.users.splice(removedItem, 1);
            }, function (error) {
            });
        }
    });