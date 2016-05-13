app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [
  						{
							series: "Sherlock",
							series_img: "img/sherlock.jpg",
							genre: "Crime drama",
							season: 3,
							episode: "The Empty Hearse",
							description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
							datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
						},
						{
							series: "Let's be Cops",
							series_img: "http://upload.wikimedia.org/wikipedia/en/0/08/Let%27s_Be_Cops_poster.jpg",
							genre: "Comedy",
							season: 1,
							episode: "Fake Cops, Real Trouble",
							description: "Two struggling pals dress as police officers for a costume party and become neighborhood sensations. But when these newly-minted 'heroes' get tangled in a real life web of mobsters and dirty detectives, they must put their fake badges on the line.",
							datetime: new Date(2014, 07, 13, 12, 00, 01, 00)
						}
					];
}]);