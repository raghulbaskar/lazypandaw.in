// $(document).ready(function() {
  // $("#button").click(function() {
  //   // $("#triangle-down").addClass("usenand");
  //   // $("#triangle-up").addClass("usenand");
  //   // $('content').addClass('krassInefade');
  //   // $("#triangle-up").delay(1500).fadeOut();
  //   // $("#title").fadeOut(500);
  //   // $("#triangle-down").delay(1500).fadeOut();
  //   // $("#button").addClass("toMenu");
  //   // $("#button").text('+');
  //   // setTimeout(function() {
  //   //   $("#button").attr("id", "menu");
  //   // }, 1);
  //   $("#menu").addClass("menuTransition");
  //   $("#menuContent").delay(500).fadeIn(1);
  //   $("#menu").text(' ');
  // });
  // setTimeout(function() {
  //   $("#menu").removeClass("menuTransition");
  //   $("#menuContent").fadeOut(300);
  //   $(".homepage").css('display','initial').fadeIn(100);
  //   // $("#menu").text('+');
  //   $("#menu.toMenu").css('transition', '.5s ease-in-out');
  //   // $("#menu").css('display','none');
  //   setTimeout(function() {
  //     t1.play(); 
  //   }, 1);
  // },10);

  // $("#menuClose, #menuContent a").click(function() {
  //   $("#menu").removeClass("menuTransition");
  //   $("#menuContent").fadeOut(300);
  //   $(".homepage").css('display','initial').fadeIn(100);
  //   // $("#menu").text('+');
  //   $("#menu.toMenu").css('transition', '.5s ease-in-out');
  //   // $("#menu").css('display','none');
  //   setTimeout(function() {
  //     t1.play(); 
  //   }, 1);
   
  // });
  
  // $('a').click(function() {
  //   $('html, body').delay(500).animate({
  //     scrollTop: $($(this).attr('href')).offset().top
  //   }, 1000);
  //   return false;
  // });

// });
window.addEventListener('load', function() {
  setTimeout(function() {
    $("#button").attr("id", "menu");
  }, 1);
  $("#menu").addClass("menuTransition");
  $("#menuContent").delay(500).fadeIn(1);
  $("#menu").css('animation','0');
  t2.from('.txt-anim',{x:0, ease:Power2.easeInOut ,display:'initial'})
  // t2.play()

  $("#menu").text(' ');


  setTimeout(function() {
    $("#menu").removeClass("menuTransition");
    $("#menuContent").fadeOut(300);
    $(".homepage").css('display','initial').fadeIn(100);
    // $("#menu").text('+');
    $("#menu.toMenu").css('transition', '.5s ease-in-out');
    // $("#menu").css('display','none');
    setTimeout(function() {
      t1.play(); 
    }, 1);
    console.log("from server");
  },2000);

  

});

const t2 = gsap.timeline();
const t1 = gsap.timeline({paused:true});
t1.to('#menu',{display:'none'});
t2.from('.txt-anim',{x:0, ease:Power2.easeInOut})

// t1.to('.preloader',{clipPath:'polygon(46% 53%, 46% 53%, 46% 53%, 45% 52%, 45% 53%)'},'+=1');

// clip-path: polygon(0% 1%, 13% 17%, 35% 5%, 44% 13%, 61% 5%, 69% 15%, 83% 5%, 87% 15%, 96% 3%, 100% 99%, 0 100%);
// 'polygon(93% 5%, 9% 5%, 9% 94%, 93% 94%)'
// window.addEventListener('mouseover',()=>{
//       t1.play();   
//     });