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