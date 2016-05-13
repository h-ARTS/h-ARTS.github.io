app.factory('places',['$http', function($http) {
	return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&format=json&gscoord=47.374440%7C8.541822&gsradius=5000&gslimit=30&callback=JSON_CALLBACK')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);