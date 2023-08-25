document.addEventListener("DOMContentLoaded", function() {
  gsap.to(".circle", {
      rotation: 0,
      ease: "expo.inOut",
      duration: 2.5,
      onComplete: greyout
  });

  var active = 3;
  var mncircles = document.querySelectorAll(".mncircle");
  var lightenHeadings = document.querySelectorAll(".lighten"); 

  gsap.to(mncircles[active - 1], {
      opacity: 0.7
  });

  gsap.to(lightenHeadings[active - 1], { 
      opacity: 1
  });

  function greyout() {
      gsap.to(mncircles, {
          opacity: 0.08
      });

      gsap.to(lightenHeadings,{
          
          opacity : 0.08
      })
  }

  mncircles.forEach(function(val, index) {
      val.addEventListener("click", function() {
          gsap.to("#circle", {
              rotation: (3 - (index + 1)) * 20,
              ease: "expo.inOut",
              duration: 1
          });
          greyout();
          gsap.to(this, {
              opacity: 0.8
          });
          gsap.to(lightenHeadings[index], { 
              
              opacity: 1
          });
      });
  });
});
