'use strict';

angular.module('myApp.welcome', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/welcome', {
        templateUrl: 'app/welcome/SeamarsResume2015_wd.html',
        controller: 'WelcomeCtrl'
    });
}])
.controller('WelcomeCtrl', [function(){

}]);
