const up = document.querySelector('.main__button-up');
const down = document.querySelector('.main__button-down');


up.addEventListener(('click'), () => {
  gsap.to(".main__first-part", {
    y: -30,
  });
});

down.addEventListener(('click'), () => {
  gsap.to(".main__first-part", {
    y: 20,
  });
});
