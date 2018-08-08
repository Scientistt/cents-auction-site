angular.module('moduloPrincipal', ['diretivas', 'ngAnimate', 'ngRoute', 'myServices', 'tokenInterceptorService'])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {

        $httpProvider.interceptors.push('tokenInterceptor');

        $locationProvider.html5Mode(true);




        $routeProvider.when('/about', {
            templateUrl : 'partials/about.html',
            controller : 'SimpleContentController'
        });

        $routeProvider.when('/contact', {
            templateUrl : 'partials/contact.html',
            controller : 'SimpleContentController'
        });

        $routeProvider.when('/welcome', {
            templateUrl : 'partials/welcome.html',
            controller : 'SimpleContentController'
        });

        $routeProvider.when('/terms', {
            templateUrl : 'partials/terms.html',
            controller : 'SimpleContentController'
        });

        $routeProvider.when('/home', {
            templateUrl : 'partials/home.html',
            controller : 'AuctionsController'
        });

        $routeProvider.when('/addItem', {
            templateUrl : 'partials/addItem.html',
            controller : 'AuctionsManagementController'
        });

        $routeProvider.when('/seeItem/:itemId&:seeing', {
            templateUrl : 'partials/seeItem.html',
            controller : 'AuctionsManagementController'
        });

        $routeProvider.when('/auctioned', {
            templateUrl : 'partials/auctioned.html',
            controller : 'AuctionsController'
        });

        $routeProvider.when('/users', {
            templateUrl : 'partials/users.html',
            controller : 'usersController'
        });

        $routeProvider.when('/editItem/:itemId', {
            templateUrl : 'partials/addItem.html',
            controller : 'AuctionsManagementController'
        });

        $routeProvider.when('/edituser/:userId', {
            templateUrl : 'partials/addUser.html',
            controller : 'UsersManagementController'
        });

        $routeProvider.when('/bids', {
            templateUrl : 'partials/bids.html',
            controller : 'loginController'
        });

        $routeProvider.when('/register', {
            templateUrl : 'partials/addUser.html',
            controller : 'UsersManagementController'
        });

        $routeProvider.when('/profile/:userId', {
            templateUrl : 'partials/seeUser.html',
            controller : 'UsersManagementController'
        });

        $routeProvider.when('/pictures', {
            templateUrl : 'partials/main.html',
            controller : 'FotosController'
        });

        $routeProvider.when('/pictures/new', {
            templateUrl : 'partials/addPicture.html',
            controller : 'addFotoController'
        });

        $routeProvider.when('/pictures/edit/:imageId', {
            templateUrl : 'partials/addPicture.html',
            controller : 'addFotoController'
        });

        $routeProvider.when('/login', {
            templateUrl : 'partials/login.html',
            controller : 'loginController'
        });

        $routeProvider.when('/password', {
            templateUrl : 'partials/password.html',
            controller : 'recoverController'
        });

        $routeProvider.when('/logout', {
            templateUrl : 'partials/logout.html',
            controller : 'loginController'
        });

        $routeProvider.otherwise({
            redirectTo : '/home'
        });


    });

