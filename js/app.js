$(document).foundation();

$(function() {
    
    $( '.overlay-menu' ).click(function() {
        $( '.overlay' ).addClass('overlay-open');
    });
    
    $( '.overlay-close' ).click(function() {
        $('.menuButton').show();
        $( '.overlay' ).removeClass('overlay-open');
        $('.menuButton').removeClass('animated rotateOut');
        $( '#menuClose' ).addClass('animated rotateOut');
            $('#menuClose').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('#menuClose').removeClass('animated rotateOut');
            });
        $('.menuButton').addClass('animated rotateIn');
            $('.menuButton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.menuButton').removeClass('animated rotateIn');
            });
    });
    
    $( '.menuButton' ).click(function() {
        $( '.menuButton' ).addClass('animated rotateOut');
            $('.menuButton').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.menuButton').hide();
            });
        $('#menuClose').addClass('animated rotateIn');
            $('#menuClose').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#menuClose').removeClass('animated rotateIn');
            });
    });
    
    $( 'body' ).find( '.menu-holder' ).hover( 
        function() {
        $( '.menu-holder' ).addClass( 'hover-spin' );
        }, function() {
        $( '.menu-holder' ).removeClass( 'hover-spin' );
        }
    );
    
    $( '.footer-home-link' ).hover( 
        function() {
        $( '#icoHomeText' ).removeClass('hide fadeOut');
        $( '#icoHomeText' ).addClass( 'animated fadeIn' );
        }, function() {
        $( '#icoHomeText' ).addClass('fadeOut');
        $( '#icoHomeText' ).removeClass( 'fadeIn' );
        }
    );    
    $( '.footer-back-link' ).hover( 
        function() {
        $( '#icoBackText' ).removeClass('hide fadeOut');
        $( '#icoBackText' ).addClass( 'animated fadeIn' );
        }, function() {
        $( '#icoBackText' ).addClass('fadeOut');
        $( '#icoBackText' ).removeClass( 'fadeIn' );
        }
    );    
    $( '.footer-grid-link' ).hover( 
        function() {
        $( '#icoGridText' ).removeClass('hide fadeOut');
        $( '#icoGridText' ).addClass( 'animated fadeIn' );
        }, function() {
        $( '#icoGridText' ).addClass('fadeOut');
        $( '#icoGridText' ).removeClass( 'fadeIn' );
        }
    );
    
    $("#toTop").click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
    });
    
});