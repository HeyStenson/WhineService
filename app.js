var app = angular.module('whineApp', ['ngResource', 'ngAnimate']);

app.controller('WineCtrl', function($scope, $window){
	$scope.showNext = false;
	$scope.reload = function(){
		$window.location.reload();
	};
	
	$scope.wine = wines[Math.floor(Math.random() * wines.length)];

	$scope.describe = descriptors[Math.floor(Math.random() * descriptors.length)];

	$scope.hintOf1 = hintsOf[Math.floor(Math.random() * hintsOf.length)];
	$scope.hintOf2 = hintsOf[Math.floor(Math.random() * hintsOf.length)];
});

var hintsOf = ["strawberries", "cinnamon", "leather", "sunshine", "despair", "applesauce", "dungeons", "dragons", "black pepper", "truffles", "orange essence", "licorice", "cherry", "murderous rage", "bacon", "acetone"];

var descriptors =["flirtatious", "bold", "childishly playful", "savage", "mysterious", "dense", "aggressive", "demure", "motivated", "futuristic", "fanciful"];

var wines = ["Grenache", "Tepranillo", "Sauvignon blanc", "Syrah", "Pinot noir", "Merlot", "Sangiovese merlot", "Riesling", "Chardonnay", "Zinfandel", "Cabernet sauvignon"];