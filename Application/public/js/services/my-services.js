angular.module('myServices', ['ngResource']).factory('resources', function ($resource) {

    var resources = {};

    resources.item = $resource('v1/items/:itemId', null, {
        'update' : {
            method : 'PUT'
        }
    });

    resources.user = $resource('v1/users/:userId', null, {
        'update' : {
            method : 'PUT'
        }
    });

    return resources;
});