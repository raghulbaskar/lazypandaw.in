const flightpath={
    curviness:1.25,
    autoRotate:true,
    values:[
        {x:100,y:-20}
    ]
};

var tl = gsap.timeline();

tl.to(".anim",{
    motionPath:{
        // path:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}],{x:500,y:100},{x:750,y:-100}
        // path:[{x:100,y:-20},{x:300,y:10},{x:500,y:100},{x:750,y:-100},{x:500,y:-50},{x:600,y:20},{x:window.innerWidth,y:-400}],
        path:[{x:300,y:-300},{x:window.innerWidth,y:-400}],
        ease:Power3.easeInOut,
        curviness:2,
        // autoRotate:true
    },
    duration:1.2,
    scrollTrigger: {
        trigger: ".section",
        // pin: true,   // pin the trigger element while active
        // start: "top top", // when the top of the trigger hits the top of the viewport
        start: "center center",
        end: "+=300", // end after scrolling 500px beyond the start
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        // }
      }
})

gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);
