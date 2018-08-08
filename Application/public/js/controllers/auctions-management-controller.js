angular.module('moduloPrincipal')
    .controller('AuctionsManagementController',function ($scope, $routeParams, resources, $location){

        itemResource = resources.item;
        $scope.auction = {};
        $scope.mensagem = "";

        /* if($scope.formulario.$valid)
          {*/

        console.log($routeParams.itemId);


        if($routeParams.itemId)
        {
            itemResource.get({itemId : $routeParams.itemId},
                function (auction) {
                    $scope.auction = auction;
                    console.log(auction);
                }, function(error) {
                    console.log(error);
                });
        }

        setInterval(function(){
            if($routeParams.itemId && $routeParams.seeing)
            {
                itemResource.get({itemId : $routeParams.itemId},
                    function (auction) {
                        $scope.auction = auction;
                        console.log(auction);
                    }, function(error) {
                        console.log(error);
                    });
            }
        }, 500);


        $scope.submitItem = function () {

            if($scope.auction._id)
            {
                $scope.auction.startprice = 0.01;
                $scope.auction.enddate = $scope.auction.startdate;
                $scope.auction.endtime = $scope.auction.starttime;

                itemResource.update({itemId : $scope.auction._id},$scope.auction, function () {
                    $location.path('/');
                }, function (error) {
                } );
            }
            else
            {
                console.log("Okay");
                $scope.auction.startprice = 0.01;
                $scope.auction.status = "Available";
                $scope.auction.user = "Available";
                $scope.auction.enddate = $scope.auction.startdate;
                $scope.auction.endtime = $scope.auction.starttime;

                itemResource.save($scope.auction, function () {
                    $scope.auction = {};
                    $location.path('/');
                }, function (error) {
                });
            }

        };

        $scope.formatDate = function (dat) {
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];
            var date = new Date(dat);
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            return day + ' of ' + monthNames[monthIndex] + ' of ' + year;
        };

        $scope.formatTime = function (tim) {
            var date = new Date(tim);
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();

            return $scope.getDoubleDigits(hour) + ':' + $scope.getDoubleDigits(min) + ':' + $scope.getDoubleDigits(sec);
        };

        $scope.getDoubleDigits = function (number) {
            return ("0" + number).slice(-2);
        };

        $scope.getTimeLeft = function (startdate, starttime, enddate, endtime) {
            var maxCoolDown = 26;
            var received = new Date(endtime);
            var hour1 = received.getHours();
            var min1 = received.getMinutes();
            var sec1 = received.getSeconds();

            var now = new Date();
            var hour2 = now.getHours();
            var min2 = now.getMinutes();
            var sec2 = now.getSeconds();

            var inicio = new Date(startdate);
            var tempo = new Date(starttime);


            /*console.log("Received = " + inicio.getFullYear() + "/" + inicio.getMonth() + "/" + inicio.getDay());
            console.log("Now = " + now.getFullYear() + "/" + now.getMonth() + "/" + now.getDay());*/
            if(inicio.getFullYear() > now.getFullYear())
            {
                return maxCoolDown;
            }
            else
            {
                if(inicio.getMonth() > now.getMonth())
                {
                    return maxCoolDown;
                }
                else
                {
                    if(inicio.getDay() > now.getDay())
                    {
                        return maxCoolDown;
                    }
                    else
                    {
                        if(tempo.getHours() > now.getHours())
                        {
                            return maxCoolDown;
                        }
                        else
                        {
                            if(((tempo.getMinutes() * 60 + tempo.getSeconds()) > (now.getSeconds() + now.getMinutes() * 60)))
                            {
                                return maxCoolDown;
                            }
                            else
                            {
                                return ((min1 * 60 + sec1) - (min2 * 60 + sec2)) + maxCoolDown - 1;
                            }
                        }
                    }
                }
            }
        };




        /*}/*
        else
        {
            console.log("Formulário invalido");
        }*/

    });