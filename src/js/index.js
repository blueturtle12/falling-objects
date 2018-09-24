import '../styles/App.scss';
import carousel from './components/carousel';
import dropBox from './components/FallingAnimation';

window.onload = function() {
  carousel();
  for (let i = 0; i < 50; i++) {
    dropBox();
  }
};
