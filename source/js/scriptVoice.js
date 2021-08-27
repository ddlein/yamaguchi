gsap
  .timeline()
  .from(".main__woman-img", {
    y: 900,
    opacity: 0,
    duration: 7, //7
  })
  .to(".main__woman-img", {
    y: 40,
    duration: 2,
    yoyo: true,
    repeatDelay: 0.1,
    repeat: -1,
  });

gsap
  .timeline()
  .to(".main__blur", {
    duration: 1,
    opacity: 1,
  })
  .to(".main__blur", {
    delay: 3.5,
    duration: 6,
    scale: 0.1,
    opacity: 0,
  });

gsap
  .timeline()
  .to(".main__ellipse-img", {
    duration: 1.5,
    scale: 1.8,
  })
  .to(".main__ellipse-img", {
    delay: 1.6, //1.6
    duration: 6,
    x: 0,
    scale: 0.5,
  });

