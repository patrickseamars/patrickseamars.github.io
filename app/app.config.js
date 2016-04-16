// this is an attempt to follow John Papa Style guide. Will refactor to use this later
//TODO: Refactor app to use this

var app = angular.module('cajaDeArena',
	['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'WelcomeController',
		templateUrl: 'welcome/intro.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})