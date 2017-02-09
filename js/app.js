$(document).foundation();

$(document).ready(function() {
    
    /////////  Menu Overlay  /////////////
    
    $( '.overlay-menu' ).click(function() {
        $( '.overlay' ).addClass('overlay-open');
        $( this ).addClass('animated rotateOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
        function() {
          $( 'body' ).find( '.overlay-menu' ).hide();
        });
        $( '#menuClose' ).addClass('animated rotateIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
        function() {
          $( this ).removeClass('animated rotateIn');
        });
    });
    
    $( '.overlay-close' ).click(function() {
        $('.overlay-menu').show();
        $( '.overlay' ).removeClass('overlay-open');
        $('.overlay-menu').removeClass('animated rotateOut');
        $( '#menuClose' ).addClass('animated rotateOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
          function() {
            $('#menuClose').removeClass('animated rotateOut');
          });
        $('.overlay-menu').addClass('animated rotateIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
          function() {
            $('.overlay-menu').removeClass('animated rotateIn');
          });
    });
    
    ////////// Menu Icon Rotation /////////
    
    $( 'body' ).find( '.menu-holder' ).hover( 
        function() {
        $( '.menu-holder' ).addClass( 'hover-spin' );
        }, function() {
        $( '.menu-holder' ).removeClass( 'hover-spin' );
        }
    );
    
    ///////// Footer Icon Hover /////////
        
    $('.hover-icon').hover(
      function() {
        $( 'span', this ).removeClass('hide fadeOut').addClass( 'animated fadeIn' );
      }, function() {
      $( 'span', this ).addClass('fadeOut').removeClass( 'fadeIn' );
      }
    );

    //////////  Back to Top ///////////
 
    $("#toTop").click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
    });
    
});