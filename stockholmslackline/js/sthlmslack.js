
var sthlmslack = angular.module('sthlmslack', ['ngRoute']);

sthlmslack.config(function($routeProvider, $locationProvider) {

    $routeProvider.
        when('/', {templateUrl:'pages/home.html'}).
        when('/slackspots', {templateUrl:'pages/slackspots.html'}).
        when('/directory', {templateUrl:'pages/directory.html'}).
        otherwise({redirectTo:'/'});

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
});

function menuCtrl($scope, $location) {
    $scope.isActive = function (page) {
        return $location.path() == page;
    }
}
