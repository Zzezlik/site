const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const paintingSectionsInRandomColor = () => {
  document.querySelectorAll('.section').forEach(section => {
    section.style.backgroundColor = randomColor();
  });
};

paintingSectionsInRandomColor();

const onWindowScroll = () => {
  console.log(window.scrollY);

  if (window.scrollY >= 800 && window.scrollY <= 1200) {
    const secEl = document.querySelector('.js-animated-section');
    secEl.classList.add('animated');
    window.removeEventListener('scroll', throotleWindowScroll);
  }
};
const throotleWindowScroll = _.throttle(onWindowScroll, 200);

window.addEventListener('scroll', throotleWindowScroll);
