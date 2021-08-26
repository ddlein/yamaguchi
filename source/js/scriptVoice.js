const woman = document.querySelector('.main__woman-img');
const ellipse = document.querySelector('.main__ellipse-img');
console.log(1);

gsap
  .timeline()
  .from(".main__woman-img", {
    y: 80,
    opacity: 0,
    duration: 2,
  })
  .to(".main__woman-img", {
    y: 40,
    duration: 3,
    yoyo: true,
    repeatDelay: 0.1,
    repeat: -1,
  });

  gsap
    .timeline()
    .to(".main__ellipse-img", {
      duration: 1.5,
      scale: 1.6,
    })
    .to(".main__ellipse-img", {
      duration: 1.5,
      x: 0,
      scale: 0.5,
    });

