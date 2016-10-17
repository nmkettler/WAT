app.controller("MainController", ['$scope', '$routeParams','$location', function($scope, $routeParams, $location) {

    $scope.date= new Date();
    $scope.newTraining = "Training Page";

    $scope.go = function(path){
      $location.path(path);
    }

    //typed.js functionality
        $(".typer").typed({
            strings: ["Asbestos Testing", "Lead Testing", "Mold Testing", "Asbestos Testing"],
            typeSpeed: 50
          });

        //animated.js animation
        $('.post').addClass('.hide_me').viewportChecker({
          classToAdd: 'visible animated fadeIn',
          offset: 100
        });

        $('.flipInDiv').addClass('.hide_me').viewportChecker({
          classToAdd: 'visible animated flipInX',
          offset: 100
        });

        $('.shakeDiv').addClass('.hide_me').viewportChecker({
          classToAdd: 'visible animated wobble',
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

      $('.menu').click(function(event){
        event.preventDefault();
        var defaultAnchorOffset = 0;
        var anchor = $(this).attr('data-attr-scroll');
        var anchorOffset = $('#' + anchor).attr('data-scroll-offset');

        if(!anchorOffset)
          anchorOffset = defaultAnchorOffset;

        $('html, body').animate({
          scrollTop: $('#'+anchor).offset().top - anchorOffset
        }, 500);

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

      $('.faq_question').click(function(){
        if($(this).next("div").is(":hidden")) {
          $(this).next("div").slideDown("slow");
        }else{
          $(this).next("div").slideUp("slow");
        }
      });
    }
  }
})