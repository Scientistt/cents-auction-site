angular.module('moduloPrincipal')
    .controller('AuctionsController',function ($scope, resources, $window) {

        itemResource = resources.item;


        $scope.auctions = [];
        $scope.myfilter = '';
        $scope.mySorter = 'startdate';


        itemResource.query(
            function (auctions) {
                console.log(auctions);
                $scope.auctions = auctions;
            }, function (error) {
                console.log(error);
            });

        $scope.setFilter = function (filter) {
            $scope.myfilter = filter;
        };





        $scope.bidNow = function (auction, username) {

            resources.user.get({userId : $window.localStorage.username},
                function (user) {

                    $scope.user = user;

                }, function(error) {
                    console.log(error);
                });

            if($scope.user.bids <= 0)
            {
                window.alert("You're out of bids.\nPlease buy more to continue.");
                return;
            }

            if($scope.user.status == "Blocked")
            {
                window.alert("You're BLOCKED :(\nPlease contact support.");
                return;
            }

            $scope.user.bids--;

            userResource.update({userId : $scope.user._id}, $scope.user, function () {
                console.log("FOI");
            }, function (error) {
            });


            if(auction.status == "Sold") return;

            console.log("USUARIO " + username + " Fez um lance em " + auction.title);
            if ($scope.getTimeLeft(auction) != 26)
            {
                auction.enddate = new Date();
                auction.endtime = new Date();
            }
            auction.user = username;
            auction.price = (parseFloat(auction.price) + 0.01).toFixed(2);


            itemResource.update({itemId : auction._id}, auction, function () {
            }, function (error) {
            } );


            resources.user.get({userId : $window.localStorage.username},
                function (user) {

                    $scope.user = user;

                }, function(error) {
                    console.log(error);
                });

        };

        $scope.sellItem = function (auction) {

            auction.enddate = new Date();
            auction.endtime = new Date();
            auction.status = "Sold";

            itemResource.update({itemId : auction._id}, auction, function () {
            }, function (error) {
            } );
        };










        setInterval(function(){
            console.log("Auctions-controller");
            itemResource.query(
                function (auctions) {
                    console.log(auctions);
                    $scope.auctions = auctions;
                }, function(error) {
                    console.log(error);
                });
        }, 1000);



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


        $scope.getTimeLeft = function (auction) {
            startdate = auction.startdate;
            starttime = auction.starttime;
            enddate = auction.enddate;
            endtime = auction.endtime;

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
                                var time = ((min1 * 60 + sec1) - (min2 * 60 + sec2)) + maxCoolDown - 1;

                                if(time == 0)
                                {
                                    $scope.sellItem(auction);
                                    return maxCoolDown;
                                }
                                return time;

                            }
                        }
                    }
                }
            }
        };




        $scope.getDoubleDigits = function (number) {
            return ("0" + number).slice(-2);
        };




        $scope.removeItem = function (item) {
            itemResource.delete({itemId : item._id}, function () {
                var removedItem = $scope.auctions.indexOf(item);
                $scope.auctions.splice(removedItem, 1);
            }, function (error) {
            });
        }
    });