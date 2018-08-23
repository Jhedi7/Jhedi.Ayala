
$(document).ready(function(){
    
    //mobile nav
    $('.mobile-nav').on('click', function(){
        $("nav ul li").toggleClass("mobile");
        console.log('clicking')
    });


    //side scroll button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#scroll').fadeIn('slow');
        } else {
            $('#scroll').fadeOut('slow');
        }
    });
    $('#backToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });

    //side bar
    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 150) {
    //         $('.icon-bar').fadeIn('slow');
    //     } else {
    //         $('.icon-bar').fadeOut('slow');
    //     }
    // });

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





   (function(){

    console.log('hovering')
    let isTouch = false //let to indicate current input type (is touch versus no touch) 
    let isTouchTimer 
    let curRootClass = '' //let indicating current document root class ("can-touch" or "")
     
    function addtouchclass(e){
        clearTimeout(isTouchTimer)
        isTouch = true
        if (curRootClass != 'can-touch'){ //add "can-touch' class if it's not already present
            curRootClass = 'can-touch'
            document.documentElement.classList.add(curRootClass)
        }
        isTouchTimer = setTimeout(function(){isTouch = false}, 800) //maintain "istouch" state for 500ms so removetouchclass doesn't get fired immediately following a touch event
    }
     
    function removetouchclass(e){
        if (!isTouch && curRootClass == 'can-touch'){ //remove 'can-touch' class if not triggered by a touch event and class is present
            isTouch = false
            curRootClass = ''
            document.documentElement.classList.remove('can-touch')
        }
    }
     
    document.addEventListener('touchstart', addtouchclass, false) //this event only gets called when input type is touch
    document.addEventListener('mouseover', removetouchclass, false) //this event gets called when input type is everything from touch to mouse/ trackpad
})();




//                         scrollmagic

// console.clear();
// console.log("ScrollMagic v%s loaded", ScrollMagic.version);

// // init
// let controller = new ScrollMagic.Controller();

// // add scene for pin
// let scene = new ScrollMagic.Scene({
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

                          