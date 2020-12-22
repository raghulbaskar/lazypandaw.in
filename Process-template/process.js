// const tween=new TimelineMax({delay:0.5});
// var=document.QuerySee
// tween.fromTo('.content',1,{y:-50,opacity:0},{y:0,opacity:1});
// console.log("heo ia m done");

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".heading",2,{y:-50, opacity: 0 }, { y:0,opacity: 1 });
// tl.fromTo(".services",1,{y:50, opacity: 0 }, { y:0,opacity: 1 },"-=2");





tl.fromTo(".discover",1,{y:-50, opacity: 0 }, { y:0,opacity: 1 },"-=2");
// tl.fromTo(".description",1,{y:-50, opacity: 0 }, { y:0,opacity: 1 },"-=2");
tl.fromTo(".desk",1,{y:-20, opacity: 0 }, { y:0,opacity: 1 },"-=1.4");

// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// t1.from(".services",5,{motionpath:{curviness:1.25,values:[{x:100,y:250},{x:300,y:320},{x:500,y:400}],autoRotate:true},ease:power3.easeInOut});


gsap.registerPlugin(MotionPathPlugin);
gsap.set(".services");

gsap.to(".services",2,{motionpath:"#path"});


