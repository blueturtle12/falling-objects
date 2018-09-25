import '../styles/App.scss';
import carousel from './components/carousel';
import dropBox from './components/FallingAnimation';
import asideControls from './components/asideControls';

window.onload = function() {
  carousel();
  asideControls();
  dropBox();
};
