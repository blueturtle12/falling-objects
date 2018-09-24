const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export default class FallingObject {
  constructor(width, height, backGround) {
    this.height = height;
    this.width = width;
    this.backGround = backGround;
  }

  createObject() {
    let length = random(
      100,
      document.querySelector('.main-container__box').offsetWidth - 100,
    );
    let marvelBox = document.createElement('div');
    marvelBox.classList.add('spiderMan-box');
    marvelBox.style.width = `${this.width}px`;
    marvelBox.style.height = `${this.height}px`;
    marvelBox.style.left = `${length}px`;
    marvelBox.style.background = `url(${this.backGround})`;
    marvelBox.style.backgroundSize = 'contain';
    marvelBox.style.transition = 'transform 4s linear';

    document.querySelector('.main-container__box').appendChild(marvelBox);

    setTimeout(() => {
      marvelBox.classList.add('move');
    }, random(0, 5000));

    marvelBox.addEventListener(
      'transitionend',
      () => {
        document.querySelector('.main-container__box').removeChild(marvelBox);
      },
      false,
    );
  }
}
