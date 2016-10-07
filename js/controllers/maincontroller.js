app.controller("MainController", ['$scope', '$routeParams','$location', function($scope, $routeParams, $location) {

    $scope.date= new Date();
  
    //typed.js functionality
        $(".typer").typed({
            strings: ["Asbestos Testing", "Lead Testing", "Mold Testing", "Anything"],
            typeSpeed: 100
          });

	$('ul.nav li.dropdown').hover(function(){
    $(this).find('.dropdown-menu').stop(true,true).delay(200).fadeIn(500);
  }, function(){
    $(this).find('.dropdown-menu').stop(true,true).delay(200).fadeOut(500);
  });
}]);