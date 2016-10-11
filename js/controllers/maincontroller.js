app.controller("MainController", ['$scope', '$routeParams','$location', function($scope, $routeParams, $location) {

    $scope.date= new Date();
    $scope.newTraining = "Training Page";
  
    //typed.js functionality
        $(".typer").typed({
            strings: ["Asbestos Testing", "Lead Testing", "Mold Testing"],
            typeSpeed: 100
          });

        $('.post').addClass('.hide_me').viewportChecker({
          classToAdd: 'visible animated fadeIn',
          offset: 100
        });

  	$('ul.nav li.dropdown').hover(function(){
      $(this).find('.dropdown-menu').stop(true,true).delay(200).fadeIn(500);
    }, function(){
      $(this).find('.dropdown-menu').stop(true,true).delay(200).fadeOut(500);
    });

  

}]);

app.directive("scrollToDiv", ["$interval", function($interval){
  return{
    restrict: "A",
    link: function(scope, elem, attrs) {

      $('.scrollArrow, #learnMoreButton').click(function(){
      $('html, body').animate({
        scrollTop: $(".second-section").offset().top},
        'slow');
    });
      $('#asbestos_breadcrumb').click(function(){
      $('html, body').animate({
        scrollTop: $(".asbestos_row").offset().top},
        'slow');
    });
      $('#lead_breadcrumb').click(function(){
      $('html, body').animate({
        scrollTop: $(".lead_row").offset().top},
        'slow');
    });
      $('#mold_breadcrumb').click(function(){
      $('html, body').animate({
        scrollTop: $(".mold_row").offset().top},
        'slow');
    });
      $('#demo_breadcrumb').click(function(){
      $('html, body').animate({
        scrollTop: $(".demo_row").offset().top},
        'slow');
    });
    }
  }
}]);

app.directive("backToTop", function(){
  return{
    restrict: "A",
    link: function(scope, elem, attrs){
      if ($('#back-to-top').length){
        var scrollTrigger = 50;
        backToTop = function(){
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('#back-to-top').addClass('show');
          } else {
              $('#back-to-top').removeClass('show');
          }
        }
        backToTop();
        $(window).on("scroll", function(){
          backToTop();
        });
        $('#back-to-top').on("click", function(e){
          e.preventDefault();
          $('html, body').animate({
            scrollTop: 0
          }, 700);
        });
      }
    }
  }
});

app.directive("slideToShowDiv", function(){
  return{
    restrict: "A",
    link: function(scope, elem, attrs){
      $('.labServiceButton').click(function(){
        if($(this).next("div").is(":hidden")) {
          $(this).next("div").slideDown("slow");
        }else{
          $(this).next("div").slideUp("slow");
        }
      });
    }
  }
})