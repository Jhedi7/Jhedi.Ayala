


console.log('CONNECTED!')
//particle.js

particlesJS.load('particles-js', 'particles.json', function() {
console.log('callback - particles.js config loaded');
});


                                        //MAP

function initMap() {
  // The location of Uluru
  let uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  let map = new google.maps.Map(
      document.getElementsByClassName('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  let marker = new google.maps.Marker({position: uluru, map: map});
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

                          