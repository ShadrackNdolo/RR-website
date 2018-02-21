// JavaScript Document

$(document).ready(function(){
    
    
    
    // slick
    $('.hero.home').slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay:true
    });
    
    
    // menu functions
    function openMenu(){
        $('body').addClass('menu-active');
        $('.container a').css({"pointer-events":"none"});
        if($('body').hasClass('home-page')){
            //console.log('open');
        	$('.hero').slick('slickPause');
        }
        
    }
    function closeMenu(){
        $('body').removeClass('menu-active');
        $('.container a').css({"pointer-events":"initial"});
        if($('body').hasClass('home-page')){
            //console.log('close');
        	 $('.hero').slick('slickPlay');
        }
       
    }
    
    // window height
    var winHeight = $(window).height();
    $('.hero, .menus > .col, .home-wrapper').height(winHeight);
    $('.hero, .giftcards > .col, .home-wrapper').height(winHeight);

  	//setup reservations link
    $('li.link-pop a').attr("data-lity","");
    
    
    // menu trigger
    $('#trigger').click(function(event){
        if($('body').hasClass('menu-active')){
        	closeMenu();
        
        }else{
        	openMenu();
           
        }
    });
  
    $(document).click(function(event) { 
        if(!$(event.target).closest('nav, header').length) {
            if($('body').hasClass("menu-active")) {
                closeMenu();
            }
        }        
    });

    
    
});
$(window).resize(function(){
    
    // window height
    var winHeight = $(window).height();
    $('.hero, .menus > .col, .home-wrapper').height(winHeight);
    $('.hero, .giftcards > .col, .home-wrapper').height(winHeight);
    
}); 





// smooth scrolling
$(function() {
    $('a[href*="#"]:not([href="#"]):not(a[data-lity])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
