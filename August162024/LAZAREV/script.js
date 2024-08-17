var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function () {
  var tl = gsap.timeline()
  tl.to("#nav-bottom", {
    height: "21vh"
  })
  tl.to(".nav-part2 h5", {
    display: "initial"
  })
  tl.from(".nav-part2 h5 span".{
    y: 20,
    stagger: 0.1

  })
})