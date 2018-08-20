
$(document).ready(function(){
    
    $('.mobile-nav').on('click', function(){
        $("nav ul li").toggleClass("mobile");
        console.log('clicking')
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#backToTop').fadeIn('slow');
        } else {
            $('#backToTop').fadeOut('slow');
        }
    });
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

});



console.log('CONNECTED!')
//particle.js

particlesJS.load('particles-js', 'particles.json', function() {
console.log('callback - particles.js config loaded');
});


                                        //MAP


 function initMap() {
    
    let brooklyn = {lat: 40.673169, lng: -73.960726};
    
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 13, center: brooklyn});
   
    let marker = new google.maps.Marker({position: brooklyn, map: map});

    console.log('map')
  }




//                         scrollmagic

// console.clear();
// console.log("ScrollMagic v%s loaded", ScrollMagic.version);

// // init
// var controller = new ScrollMagic.Controller();

// // add scene for pin
// var scene = new ScrollMagic.Scene({
//         triggerElement: "#pinContainer",
//         triggerHook: "onLeave",
//         duration: "300%"
//     })
//     .setPin("#pinContainer")
//     // .addIndicators()
//     .addTo(controller); // add indicators (requires plugin)

// // add scenes for animations
// new ScrollMagic.Scene({
//     triggerElement: "#triggers #t1",
//     triggerHook: "onLeave",
//     duration: "100%"
// })
// .setTween(TweenMax.fromTo("section.panel.project", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}))
// // .addIndicators() // add indicators (requires plugin)
// .addTo(controller);
    
// new ScrollMagic.Scene({
//     triggerElement: "#triggers #t2",
//     triggerHook: "onLeave",
//     duration: "100%"
// })
// .setTween(new TimelineMax()
//           .to("section.panel .additionalContent", 1, {y: "-100%", ease: Linear.easeNone}) // scroll Content
//           .fromTo("section.panel.about",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
//          )
// // .addIndicators() // add indicators (requires plugin)
// .addTo(controller);
    
    
// new ScrollMagic.Scene({
//     triggerElement: "#triggers #t3",
//     triggerHook: "onLeave",
//     duration: "100%"
// })
// .setTween(TweenMax.fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}))
// // .addIndicators() // add indicators (requires plugin)
// .addTo(controller);


// $('nav a').on('click',function() {
//     controller.scrollTo($(this).attr('href')); 
// });

                          