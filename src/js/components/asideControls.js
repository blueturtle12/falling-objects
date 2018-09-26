import { objectDataType } from './carousel';

export let ironManAtt = {
  sizeMin: 40,
  sizeMax: 200,
  speedMin: 1,
  speedMax: 8,
};
export let punisherAtt = {
  sizeMin: 40,
  sizeMax: 200,
  speedMin: 3,
  speedMax: 10,
};
export let spiderManAtt = {
  sizeMin: 40,
  sizeMax: 200,
  speedMin: 2,
  speedMax: 9,
};

const asideControls = () => {
  const sizeControlMin = document.querySelector('#size-min');
  const sizeControlMax = document.querySelector('#size-max');
  const speedControlmin = document.querySelector('#speed-min');
  const speedControlmax = document.querySelector('#speed-max');
  let speedRangeMin = document.querySelector('#tab__speed-range-min');
  let speedRangeMax = document.querySelector('#tab__speed-range-max');
  let sizeRangeMin = document.querySelector('#tab__size-range-min');
  let sizeRangeMax = document.querySelector('#tab__size-range-max');

  sizeControlMin.addEventListener('change', e => {
    sizeRangeMin.innerHTML = e.target.value;
    if (objectDataType === 'iron') {
      ironManAtt.sizeMin = 40 * (e.target.value / 2);
    } else if (objectDataType === 'punisher') {
      punisherAtt.sizeMin = 40 * (e.target.value / 2);
    } else if (objectDataType === 'spider') {
      spiderManAtt.sizeMin = 40 * (e.target.value / 2);
    }
  });
  sizeControlMax.addEventListener('change', e => {
    sizeRangeMax.innerHTML = e.target.value;
    if (objectDataType === 'iron') {
      ironManAtt.sizeMax = 40 * (e.target.value / 2);
    } else if (objectDataType === 'punisher') {
      punisherAtt.sizeMax = 40 * (e.target.value / 2);
    } else if (objectDataType === 'spider') {
      spiderManAtt.sizeMax = 40 * (e.target.value / 2);
    }
  });
  speedControlmin.addEventListener('change', e => {
    speedRangeMin.innerHTML = e.target.value;
    if (objectDataType === 'iron') {
      ironManAtt.speedMin = e.target.value;
    } else if (objectDataType === 'punisher') {
      punisherAtt.speedMin = e.target.value;
    } else if (objectDataType === 'spider') {
      spiderManAtt.speedMin = e.target.value;
    }
  });
  speedControlmax.addEventListener('change', e => {
    speedRangeMax.innerHTML = e.target.value;
    if (objectDataType === 'iron') {
      ironManAtt.speedMax = e.target.value;
    } else if (objectDataType === 'punisher') {
      punisherAtt.speedMax = e.target.value;
    } else if (objectDataType === 'spider') {
      spiderManAtt.speedMax = e.target.value;
    }
  });
};

export default asideControls;
