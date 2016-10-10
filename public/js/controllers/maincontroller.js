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
      $('#show_asbestos_lab').click(function(){
        if($(".asbestos_lab").is(":hidden")) {
          $(".asbestos_lab").slideDown("slow");
        }else{
          $(".asbestos_lab").slideUp("slow");
        }
      });
      $('#show_lead_lab').click(function(){
        if($(".lead_lab").is(":hidden")) {
          $(".lead_lab").slideDown("slow");
        }else{
          $(".lead_lab").slideUp("slow");
        }
      });
      $('#show_mold_lab').click(function(){
        if($(".mold_lab").is(":hidden")) {
          $(".mold_lab").slideDown("slow");
        }else{
          $(".mold_lab").slideUp("slow");
        }
      });
      $('#show_demo_lab').click(function(){
        if($(".demo_lab").is(":hidden")) {
          $(".demo_lab").slideDown("slow");
        }else{
          $(".demo_lab").slideUp("slow");
        }
      });
    }
  }
})