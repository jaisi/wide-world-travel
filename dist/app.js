(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";

app.controller("BookCtrl", function($scope, BookFactory){
	BookFactory.getBooks()
	.then(function(itemCollection){
		$scope.books = itemCollection;
		console.log("books", $scope.books);
	});
});
},{}],3:[function(require,module,exports){
"use strict";

app.factory("BookFactory", function($q,$http){
	
	let getBooks = () => {
		let items = [];
		return $q((resolve,reject) => {
			$http.get('./data/guides.json')
			.then((itemObject) => {
				console.log("itemObject", itemObject);
				console.log("itemObject.data", itemObject.data);
				console.log("itemObject.data.guides", itemObject.data.guides);
				let itemCollection = itemObject.data;
				//console.log("itemCollection", itemCollection);
				resolve(itemCollection.guides);
			})
			.catch((error) => {
				reject(error);
			});
		});

	};

	return {getBooks};
});
},{}]},{},[1,2,3]);
