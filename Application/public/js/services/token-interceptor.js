angular.module('tokenInterceptorService', []).factory('tokenInterceptor', function ($window, $location, $q) {
    var interceptor = {};
    interceptor.response = function (response) {
        var token = response.headers('x-access-token');
        if(token)
        {
            $window.localStorage.token = token;
            console.log('Token no navegador');
        }
        return response;
    };
    interceptor.request = function (config) {
        config.headers = config.headers || {};
        if($window.localStorage.token)
        {
            config.headers['x-access-token'] = $window.localStorage.token;
        }
        return config;
    };

    interceptor.responseError = function (rejection) {
        if(rejection != null && rejection.status == 401)
        {
            delete $window.localStorage.token;
            //$location.path('/login');
        }
        return $q.reject(rejection);
    };


    return interceptor;
});