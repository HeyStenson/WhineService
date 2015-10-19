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

	$scope.platitude = plat[Math.floor(Math.random() * plat.length)];
});

var hintsOf = ["strawberries", "cinnamon", "leather", "sunshine", "despair", "applesauce", "dungeons", "dragons", "black pepper", "truffles", "orange essence", "licorice", "cherry", "murderous rage", "bacon", "acetone", "cardamom", "lemon", "cantalope", "grass"];

var descriptors =["flirtatious", "bold", "childishly playful", "savage", "mysterious", "dense", "aggressive", "demure", "motivated", "futuristic", "fanciful", "childish", "immature", "rustic", "bland", "exotic", "fluffy"];

var wines = ["Grenache", "Tepranillo", "Sauvignon blanc", "Syrah", "Pinot noir", "Merlot", "Sangiovese merlot", "Riesling", "Chardonnay", "Zinfandel", "Cabernet sauvignon"];

var plat = ["Bless your heart.", "Poor baby.", "Aww, that's rough.", "So sorry to hear that.", "DANG.", "What a rough break.", "Poor thing."]