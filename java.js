var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.height = "100vh";
    navLinks.style.width = "200px";
}    
function hideMenu(){
    navLinks.style.height = "0vh";
    navLinks.style.width = "0px";
} 

ScrollTrigger.create ({
    trigger: '.header',
    start: "50%",
    end: "90%",
    scrub: true,
    animation:gsap.to(".nav-links ul li a", {color: "black"}),
})
ScrollTrigger.create ({
    trigger: '.header',
    start: "50%",
    end: "90%",
    scrub: true,
    animation:gsap.to(".fa-bars", {color: "black"}),
})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.header',
        start: 'top',
        end: "200%",
        scrub: true,
    },
});

tl.fromTo('.nav-links ul li a' , {size:"14px"}, {size:"16px"});

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function readMore2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("readBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }