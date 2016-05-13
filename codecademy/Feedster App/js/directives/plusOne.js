app.directive("plusOne", function() {
	return {
    scope: {},
    templateUrl: "js/directives/plusOne.html",
    link: function(scope, element, attrs) {
    	scope.like = function() {
    		element.toggleClass("btn-like");
  		}
		}
  };
});