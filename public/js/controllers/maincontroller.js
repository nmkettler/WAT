app.controller("MainController", ['$scope', '$routeParams','$location', function($scope, $routeParams, $location) {

    $scope.date= new Date();
    $scope.newTraining = "Training Page";
    $scope.go = function(path){
      $location.path(path);
    }


}]);

app.directive("animatedFunctionality", ["$interval", function($interval){
  return{
    restrict: "A",
    link: function(scope, elem, attrs){
      //typed.js functionality
        $(".typer").typed({
            strings: ["Asbestos Testing", "Lead Testing", "Mold Testing", "Asbestos Testing"],
            typeSpeed: 50
          });

             //animated.js post animation
        $('.post').addClass('.hide_me').viewportChecker({
          classToAdd: 'visible animated fadeIn',
          offset: 100
        });
        //flip in Meet the Team
        $('.flipInDiv').addClass('.hide_me').viewportChecker({
          classToAdd: 'visible animated flipInX',
          offset: 100
        });

        $('.shakeDiv').addClass('.hide_me').viewportChecker({
          classToAdd: 'visible animated wobble',
          offset: 100
        });
    }
  }
}])

app.directive("navMenuHover", ["$interval", function($interval){
  return{
    restrict: "A",
    link: function(scope, elem, attrs) {   
      $('ul.nav li.dropdown').hover(function(){
        $(this).find('.dropdown-menu').stop(true,true).delay(200).fadeIn(500);
      }, function(){
        $(this).find('.dropdown-menu').stop(true,true).delay(200).fadeOut(500);
    });

    }
  }
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
});

app.directive('myMap', function() {
    // directive link function
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        
        // map config
        var mapOptions = {
            center: new google.maps.LatLng(47.678663, -122.186298),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        
        // init the map
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // place a marker
        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array
            
            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }
        
        // show the map and place some markers
        initMap();
        
        setMarker(map, new google.maps.LatLng(47.678663, -122.186298), 'Kirkland', 'Washington Asbestos Testing LLC');
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
});

