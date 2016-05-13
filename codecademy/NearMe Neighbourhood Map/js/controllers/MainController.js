app.controller('MainController', ['$scope', 'places', function($scope, places) {
				$scope.mapCenter = {
  						lat: 47.374440,
  						lng: 8.541822,
  						zoom: 17
				};
				
				places.success(function(data) {
						$scope.mapMarkers = geodataToMarkers(data);
				});
}]); 
 