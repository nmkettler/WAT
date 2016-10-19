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
	    when('/thank-you', {
	      templateUrl: 'views/thank_you-page.html',
	      controller: 'MainController'
	    }).
	    when('/services', {
	    	templateUrl: 'views/services.html',
	    	controller: 'MainController'
	    }).
	    when('/training', {
	    	templateUrl: 'views/trainingpage.html',
	    	controller: 'MainController'
	    }).
	    when('/contact', {
	    	templateUrl: 'views/contact.html',
	    	controller: 'MainController'
	    }).
	    when('/meet_the_team', {
	    	templateUrl: 'views/meet_the_team.html',
	    	controller: 'MainController'
	    }).
	    when('/faq', {
	    	templateUrl: 'views/faq.html',
	    	controller: 'MainController'
	    }).
	    when('/forms', {
	    	templateUrl: 'views/forms.html',
	    	controller: 'MainController'
	    }).
	    when('/coming-soon', {
	    	templateUrl: 'views/coming_soon.html',
	    	controller: 'MainController'
	    }).
	    otherwise({
	      redirectTo: '/home'
	    });

}]);

$(function changeNavColorOnScroll(){
	$(window).scroll(function(){
		if($(document).scrollTop() > 50) {
			$(".navbar-fixed-top").css("background-color" , "#fff");
		}else{
			$(".navbar-fixed-top").css("background-color", "rgba(255, 255, 255, 0.5)");
		}
	})
})



    
