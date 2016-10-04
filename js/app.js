var app = angular.module('watApp', ['ngRoute', 'firebase']);



app.run(['$rootScope', '$location', function($rootScope, $location){
    	$rootScope.$on('$routeChangeError', function(event, next, previous, error){ //traps an error if resolve map in /success isn't resolved properly
    		if(error=='AUTH_REQUIRED'){
    			$rootScope.message = 'Sorry you must login to view that page';
    			$location.path('/login');
    		}
    	});
	}]); //run

app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	    when('/home', {
	      templateUrl: 'views/home.html',
	      controller: 'MainController'
	    }).
	    when('/test', {
	      templateUrl: 'views/test.html',
	      controller: 'MainController'
	    }).
	    otherwise({
	      redirectTo: '/home'
	    });

}]);

