import FallingObject from './FallingObject';

const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const dropBox = () => {
  let spiderMan = new FallingObject(
    100,
    100,
    'img/icons8-spider-man-new-filled.svg',
  );
  let thePunisher = new FallingObject(
    100,
    100,
    '../../img/icons8-punisher.svg',
  );
  let ironMan = new FallingObject(100, 100, '../../img/icons8-iron-man.svg');

  const createObject = obj => {
    let length = random(
      100,
      document.querySelector('.main-container__box').offsetWidth - 100,
    );
    let spiderManBox = document.createElement('div');
    spiderManBox.classList.add('spiderMan-box');
    spiderManBox.style.width = `${obj.width}px`;
    spiderManBox.style.height = `${obj.height}px`;
    spiderManBox.style.left = `${length}px`;
    spiderManBox.style.background = `url(${obj.backGround})`;
    spiderManBox.style.backgroundSize = 'contain';
    spiderManBox.style.transition = 'transform 500 ms linear';
    //spiderManBox.style.padding = `${spiderMan.width}px`;

    document.querySelector('.main-container__box').appendChild(spiderManBox);

    setTimeout(() => {
      spiderManBox.classList.add('move');
    }, random(0, 4000));

    spiderManBox.addEventListener(
      'transitionend',
      () => {
        document
          .querySelector('.main-container__box')
          .removeChild(spiderManBox);
      },
      false,
    );
  };

  createObject(spiderMan);
  createObject(thePunisher);
  createObject(ironMan);
};

export default dropBox;
