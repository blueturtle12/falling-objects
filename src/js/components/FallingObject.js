export const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export default class FallingObject {
  constructor(width, height, backGround, speed) {
    this.height = height;
    this.width = width;
    this.backGround = backGround;
    this.speed = speed;
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
    marvelBox.style.transition = `transform ${this.speed}s linear`;

    setTimeout(() => {
      document.querySelector('.main-container__box').appendChild(marvelBox);
    }, random(500, 2000));

    setTimeout(() => {
      marvelBox.classList.add('move');
    }, random(100, 5000));

    marvelBox.addEventListener(
      'transitionend',
      () => {
        document.querySelector('.main-container__box').removeChild(marvelBox);
      },
      false,
    );
  }
}
