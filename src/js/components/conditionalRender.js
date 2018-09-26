import { objectDataType } from './carousel';

const conditionalRender = () => {
  let tabTitleSize = document.querySelector('.tab__title-size');
  let tabTitleSpeed = document.querySelector('.tab__title-speed');
  let speedRangeMin = document.querySelector('#speed-min');
  let speedRangeMax = document.querySelector('#speed-max');

  if (objectDataType === 'iron') {
    tabTitleSize.innerHTML = `Adjust Ironman's size`;
    tabTitleSpeed.innerHTML = `Adjust Ironman's speed`;
    speedRangeMin.min = 1;
    speedRangeMin.max = 8;
    speedRangeMax.min = 1;
    speedRangeMax.max = 8;
  } else if (objectDataType === 'punisher') {
    tabTitleSize.innerHTML = `Adjust The Punisher's size`;
    tabTitleSpeed.innerHTML = `Adjust The Punisher's speed`;
    speedRangeMin.min = 3;
    speedRangeMin.max = 10;
    speedRangeMax.min = 3;
    speedRangeMax.max = 10;
  } else if (objectDataType === 'spider') {
    tabTitleSize.innerHTML = `Adjust Spiderman's size`;
    tabTitleSpeed.innerHTML = `Adjust Spiderman's speed`;
    speedRangeMin.min = 2;
    speedRangeMin.max = 9;
    speedRangeMax.min = 2;
    speedRangeMax.max = 9;
  }
};

export default conditionalRender;
