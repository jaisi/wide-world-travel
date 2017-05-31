"use strict";

app.controller("BookCtrl", function($scope, BookFactory){
	BookFactory.getBooks()
	.then(function(itemCollection){
		$scope.books = itemCollection;
		console.log("books", $scope.books);
	});
});