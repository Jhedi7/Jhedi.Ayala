


console.log('CONNECTED!')
//particle.js

particlesJS.load('particles-js', 'particles.json', function() {
console.log('callback - particles.js config loaded');
});


                                        //MAP

//  // Initialize and add the map
//  function initMap() {
//     // The location of Uluru
//     let brooklyn = {lat: 40.673169, lng: -73.960726};
//     // The map, centered at Uluru
//     let map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 13, center: brooklyn});
//     // The marker, positioned at Uluru
//     let marker = new google.maps.Marker({position: brooklyn, map: map});
//   }




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

                          