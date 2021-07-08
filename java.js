window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.getElementById("outer").style.display = "none";

function myFunction() {
  var x = document.getElementById("outer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}


$(window).scroll(function() {
   var hT = $('.quickstats').offset().top,
       hH = $('.quickstats').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.1*wH)){
     $(".quickstats").removeClass("visible");
     $(".quickstats").addClass("quickstatsadd");

   }
});



$(window).scroll(function() {
   var hT = $('.aboutme').offset().top,
       hH = $('.aboutme').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.1*wH)){
     $(".aboutme").removeClass("visible");
     $(".aboutme").addClass("quickstatsadd");

   }
});

$(window).scroll(function() {
   var hT = $('.Mechatronics').offset().top,
       hH = $('.Mechatronics').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.1*wH)){
     $(".Mechatronics").removeClass("visible");
     $(".Mechatronics").addClass("quickstatsadd");

   }
});


$(window).scroll(function() {
   var hT = $('.contacts').offset().top,
       hH = $('.contacts').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.1*wH)){
     $(".contacts").removeClass("visible");
     $(".contacts").addClass("quickstatsadd");

   }
});


$(window).scroll(function() {
   var hT = $('.projects').offset().top,
       hH = $('.projects').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.1*wH)){
     $(".projects").removeClass("visible");
     $(".projects").addClass("quickstatsadd");

   }
});


$(window).scroll(function() {
   var hT = $('.otherstuff').offset().top,
       hH = $('.otherstuff').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH+0.1*wH)){
     $(".otherstuff").removeClass("visible");
     $(".otherstuff").addClass("quickstatsadd");

   }
});
