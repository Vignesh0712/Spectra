/**    
 * 
 * ---------------------------------------------------------------------------
 *
 * Template Name: Construction - Factory / Industrial / Construction HTML5 Template
 * Template URL:	 http://lovesome.biz/Construction
 * Author : urosd
 * Description: This is industrial and factory HTML5 template
 * Version : 1.0 
 *
 * --------------------------------------------------------------------------- 
 *
 */


/*  ==================================
 *           js content
 *    ==================================
 *
 *   1. Mobile Menu
 *   2. Owl Carousel
 *   3. CounterUp
 *   4. Barfiller
 *   5. Slick Slider
 *   6. Scroll Up
 *   7. Parallax
 *   8. preloader 
 *   9. Isotope 
 *	================================== */

(function ($) {
    'use strict';

    /*  ======================================
            1. Mobile Menu
        ====================================== */
    var mobile_menu = $('ul.navigation');
    mobile_menu.slicknav({
        prependTo: '.responsive-menu-wrap'
    });

    /*  ======================================
            2. Owl Carousel
        ====================================== */

    /*---------- main slider & destination slider ---------*/
    var slider_pulse = $('.slider-wraper, .destination-img');
    slider_pulse.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        mouseDrag: true,
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Owl Carousel Animation
    slider_pulse.on('translate.owl.carousel', function () {
        $('.slider-info h1').removeClass('animated fadeInDown').css('opacity', '0');
        $('.slider-info p').removeClass('animated fadeInUp').css('opacity', '0');
        $('.slider-info .conscare-btn').removeClass('animated fadeInDown').css('opacity', '0');
    });
    slider_pulse.on('translated.owl.carousel', function () {
        $('.slider-info h1').addClass('animated fadeInDown').css('opacity', '1');
        $('.slider-info p').addClass('animated fadeInUp').css('opacity', '1');
        $('.slider-info .conscare-btn').addClass('animated fadeInDown').css('opacity', '1');
    });

    /*---------- client slider ---------*/
    var client_slider = $('.client-comment-info, .single-service-slider');
    client_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*---------- blog slider ---------*/
    var blog_slider = $('.blog-slide');
    blog_slider.owlCarousel({
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*  ======================================
            3. CounterUp
        ====================================== */
    var progress = $('.counter');
    progress.waypoint(function () {
        var CounterUp = $('.counter');
        CounterUp.each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2500,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
        });
    }, {
        offset: '100%'
    });

    /*  ======================================
            4. Barfiller
        ====================================== */
    var progress_bar = $('.barfiller');
    progress_bar.waypoint(function () {
        /*-------------------------------------
            Progress Bar
        -------------------------------------*/
        var progressbarOne = $('#bar1');
        var progressbarTwo = $('#bar2');
        var progressbarThree = $('#bar3');
        var progressbarFour = $('#bar4');
        var progressbarFive = $('#bar5');
        var progressbarSix = $('#bar6');

        progressbarOne.barfiller();
        progressbarTwo.barfiller();
        progressbarThree.barfiller();
        progressbarFour.barfiller();
        progressbarFive.barfiller();
        progressbarSix.barfiller();

    }, {
        offset: '100%'
    });

    /*  ======================================
            5. Slick Slider
        ====================================== */
    var brand_bar = $('.partners-brand');
    brand_bar.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    /*  ======================================
            6. Scroll Up
        ====================================== */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: "<a class='hvr-icon-bob click-top'></a>", // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*  ======================================
            7. Parallax 
        ====================================== */
    var parallax_effect = $('.parallax');
    parallax_effect.jarallax({
        speed: 0.5
    });

    $(window).on('load', function () {

        /*  ======================================
                8. Preloader
            ====================================== */
        var preloader = $('.preloader');
        preloader.fadeOut('500');

        /*  ======================================
                9. Isotope
            ====================================== */
        // init Isotope
        var isotope_content = $('.iso-content');
        isotope_content.isotope({
            itemSelector: '.iso-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.iso-item'
            }
        });
        // filter items on button click
        var isotope_nav = $('.iso-nav ul li');
        isotope_nav.on('click', function () {
            $('.iso-nav ul li').removeClass('portfolio-active');
            $(this).addClass('portfolio-active');
            var selector = $(this).attr('data-filter');
            $('.iso-content').isotope({
                filter: selector
            });
            return false;
        });

    });
}(jQuery));


// $(document).ready(function() {
//     $('.form_error').hide();
//     $('#submit').click(function(){
//          var name = $('#name').val();
//          var email = $('#email').val();
//          var phone = $('#phone').val();
//          var message = $('#message').val();
//          if(name== ''){
//             $('#name').next().show();
//             return false;
//           }
//           if(email== ''){
//              $('#email').next().show();
//              return false;
//           }
//           if(IsEmail(email)==false){
//               $('#invalid_email').show();
//               return false;
//           }

//           if(phone== ''){
//               $('#phone').next().show();
//               return false;
//           }
//           if(message== ''){
//               $('#message').next().show();
//               return false;
//           }
//           //ajax call php page
//           $.post("send.php", $("#contactform").serialize(),  function(response) {
//           $('#contactform').fadeOut('slow',function(){
//               $('#success').html(response);
//               $('#success').fadeIn('slow');
//              });
//            });
//            return false;
//         });
//     });
//     function IsEmail(email) {
//       var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//       if(!regex.test(email)) {
//          return false;
//       }else{
//          return true;
//       }
//     }
// function myFunction12() {
//     var email;

//     email = document.getElementById("textEmail").value;

//         var reg = /^([A-Za-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/;

//         if (reg.test(textEmail.value) == false) 
//         {
//         document.getElementById("demo").style.color = "red";
//             document.getElementById("demo").innerHTML ="Invalid EMail ->"+ email;
//             alert('Invalid Email Address ->'+email);
//             return false;
//         } else{
//         document.getElementById("demo").style.color = "DarkGreen";      
//         document.getElementById("demo").innerHTML ="Valid Email ->"+email;
//         }

//    return true;
// }


// function checkEmail(emailAddress) {
//     var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
//     var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
//     var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
//     var sQuotedPair = '\\x5c[\\x00-\\x7f]';
//     var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
//     var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
//     var sDomain_ref = sAtom;
//     var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
//     var sWord = '(' + sAtom + '|' + sQuotedString + ')';
//     var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
//     var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
//     var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
//     var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
  
//     var reValidEmail = new RegExp(sValidEmail);
  
//     return reValidEmail.test(emailAddress);
//   }


// 

$(document).ready(function(){
    $('#email').focusout(function(){
    email_validate();
    });

    function email_validate() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $('#email').val();

        if(email !== '') {
            if(pattern.test(email)) {
            
            $('#email').css('border','2px solid green'); 
            $('#success').css('display','block');
            $('#error').css('display','none');
            $('#warning').css('display','none');
            }
            else {
            $('#email').css('border','2px solid red'); 
            $('#error').css('display','block');
            $('#success').css('display','none');
            $('#warning').css('display','none');
            }
            }
            else {
                $('#email').css('border','2px solid orange'); 
                $('#error').css('display','none');
                $('#success').css('display','none');
                $('#warning').css('display','block');
                }
            }
    });            

    $(document).ready(function(){
        $('#name').focusout(function(){
            name_validate();
            }); 
            function name_validate(){
                var name = $('#name').val();
    
                if(name !== ''){
                    $('#name').css('border','2px solid green'); 
                    $('#success1').css('display','block');
                    $('#error1').css('display','none');
                    $('#warning1').css('display','none');
                }
                else {
                    $('#name').css('border','2px solid orange'); 
                    $('#error1').css('display','none');
                    $('#success1').css('display','none');
                    $('#warning1').css('display','block');
                    }
            }   
        });

        $(document).ready(function(){
            $('#phone').focusout(function(){
                phone_validate();
                }); 
                function phone_validate(){
                    var phone = $('#phone').val();
                    if(phone == ''){
                        $('#phone').css('border','1px solid #ccc');
                        $('#error2').css('display','none');
                        $('#success2').css('display','none');
                        return true;
                    }
                    else if (isNaN(phone) ){
                        $('#phone').css('border','2px solid red'); 
                        $('#error2').css('display','block');
                        $('#success2').css('display','none');
                    }
                    else if(!phone.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)){
                        $('#phone').css('border','2px solid red'); 
                        $('#success2').css('display','none');
                        $('#error2').css('display','block');
                        // $('#warning2').css('display','none');
                    }
                    else {
                        $('#phone').css('border','2px solid green'); 
                        $('#error2').css('display','none');
                        $('#success2').css('display','block');
                        // $('#warning2').css('display','block');
                        }
                }   
            });

            $(document).ready(function(){
                $('#message').focusout(function(){
                    message_validate();
                    }); 
                    function message_validate(){
                        var message = $('#message').val();
            
                        if(message !== ''){
                            $('#message').css('border','2px solid green'); 
                            $('#success3').css('display','block');
                            $('#error3').css('display','none');
                            $('#warning3').css('display','none');
                        }
                        else {
                            $('#message').css('border','2px solid orange'); 
                            $('#error3').css('display','none');
                            $('#success3').css('display','none');
                            $('#warning3').css('display','block');
                            }
                    }   
                });









           