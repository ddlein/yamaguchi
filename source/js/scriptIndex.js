const up = document.querySelector('.button--up');
const down = document.querySelector('.button--down');


up.addEventListener(('click'), () => {
  gsap.to(".first-part", {
    y: -30,
  });
});

down.addEventListener(('click'), () => {
  gsap.to(".first-part", {
    y: 20,
  });
});
