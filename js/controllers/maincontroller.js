app.controller("MainController", ['$scope', '$routeParams','$location', function($scope, $routeParams, $location) {
	
	$(function toggleSideNav(){
		$('#toggleMenuButtonId').on("click", function(){
			$('.sidebar-offcanvas').toggle();
			$('#toggleMenuButtonId').hide();
		})
	})
	$(function toggleSideNav(){
		$('#closeMenu').on("click", function(){
			$('.sidebar-offcanvas').toggle();
			$('#toggleMenuButtonId').show();
		})
	})
}]);