angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './src/templates/principal.html',
            controller: 'analiseController'
        })
});