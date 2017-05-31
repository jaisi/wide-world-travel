"use strict";

var app = angular.module("BookApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl:'partials/book-details.html',
		controller:'BookCtrl'
	}).
	otherwise('/');
});