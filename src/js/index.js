import '../styles/App.scss';
import carousel from './components/carousel';
import dropBox from './components/FallingAnimation';
import asideControls from './components/asideControls';
import conditionalRender from './components/conditionalRender';

export let gameRunning = false;
let interval = null;

window.onload = function() {
  carousel();
  asideControls();

  let startButton = document.querySelector('.aside__start-button');

  startButton.addEventListener('click', () => {
    if (!gameRunning) {
      let startMessage = document.querySelector('.box__title');
      if (startMessage !== null) {
        document
          .querySelector('.main-container__box')
          .removeChild(startMessage);
      }
      gameRunning = true;
      interval = setInterval(() => {
        dropBox();
      }, 1000);
      startButton.innerHTML = 'stop';
    } else if (gameRunning) {
      gameRunning = false;
      clearInterval(interval);
      startButton.innerHTML = 'start';
    }
  });
};
