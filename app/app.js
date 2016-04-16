'use strict';

angular.module('myApp', [
	'ngRoute',
	'myApp.welcome'
]).
config(['$routeProvider', function($routeProvider){
	// Default view is Welcome
	$routeProvider.otherwise({
		redirectTo: '/welcome'
	});
}]);

