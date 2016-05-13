app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
    	name: 'Bruschetta',
    	description: 'Grilled bread garlic, tomatoes, olive oil.',
    	price: 4.95
    }
  ];
	$scope.mains = [
		{
			name: 'Sausage Pizza',
			description: 'Tehzeeb Pizza style with sausages, olives, cheese and tomatoes.',
			price: 7.95
		},
		{
			name: 'Pizza Burger',
			description: 'A burger with pizza ingredients (see Sausage Pizza).',
			price: 6.95
		},
		{
			name: 'Pizza Margerita',
			description: 'Pizza with mozarella cheese and tomato sauce.',
			price: 7.95
		}
	];
	$scope.extras = [
		{
			name: 'Italian Salad',
			description: 'salad with cherry tomatoes and mozarelle with italian sauce.',
			price: 3.95
		},
		{
			name: 'Lasagna',
			description: 'stuffed with meat, cheese and tomato sauce.',
			price: 11.95
		},
		{
			name: 'Drinks',
			description: 'Coca-Cola, Sprite, Mirinda, Dew, Mineral Water, Red Bull.',
			price: 1.95
		}
	];
}]);