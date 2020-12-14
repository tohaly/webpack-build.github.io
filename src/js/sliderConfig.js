import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
  container: '.slider',
  items: 3,
  autoplay: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  loop: true,
  mouseDrag: true,
  swipeAngle: '45',
  gutter: 16,
  speed: 300,
  rewind: false,
  preventActionWhenRunning: true,
  autoWidth: true
});

export default slider;
