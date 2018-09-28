import { objectDataType } from './carousel';
import noUiSlider from 'nouislider';

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

export let windDirection = 'none';

const asideControls = () => {
  const updateSliderValue = (slider, handle) => {
    let children, i, val, values;
    if (handle === null) {
      handle = 0;
    }
    children = slider.getElementsByClassName('noUi-handle');
    values = slider.noUiSlider.get();
    i = 0;
    while (i < children.length) {
      if (children.length === 1) {
        val = parseInt(values);
      } else {
        val = parseInt(values[i]);
      }
      children[i].innerHTML = val;
      i++;
    }
  };
  const connectedSlider = document.getElementById('size');

  noUiSlider.create(connectedSlider, {
    start: [2, 8],
    connect: true,
    range: {
      min: [1],
      max: [10],
    },
  });

  connectedSlider.noUiSlider.on('update', () => {
    let sizeArray = connectedSlider.noUiSlider.get();
    updateSliderValue(connectedSlider);
    if (objectDataType === 'iron') {
      ironManAtt.sizeMin = 40 * (parseInt(sizeArray[0]) / 2);
      ironManAtt.sizeMax = 40 * (parseInt(sizeArray[1]) / 2);
    } else if (objectDataType === 'punisher') {
      punisherAtt.sizeMin = 40 * (parseInt(sizeArray[0]) / 2);
      punisherAtt.sizeMax = 40 * (parseInt(sizeArray[1]) / 2);
    } else if (objectDataType === 'spider') {
      spiderManAtt.sizeMin = 40 * (parseInt(sizeArray[0]) / 2);
      spiderManAtt.sizeMax = 40 * (parseInt(sizeArray[1]) / 2);
    }
  });

  const connectedSliderSpeed = document.getElementById('speed');

  noUiSlider.create(connectedSliderSpeed, {
    start: [2, 8],
    connect: true,
    range: {
      min: [1],
      max: [10],
    },
  });

  connectedSliderSpeed.noUiSlider.on('update', () => {
    let speedArray = connectedSliderSpeed.noUiSlider.get();
    updateSliderValue(connectedSliderSpeed);
    if (objectDataType === 'iron') {
      ironManAtt.speedMin = parseInt(speedArray[0]);
      ironManAtt.speedMax = parseInt(speedArray[1]);
    } else if (objectDataType === 'punisher') {
      punisherAtt.speedMin = parseInt(speedArray[0]);
      punisherAtt.speedMax = parseInt(speedArray[1]);
    } else if (objectDataType === 'spider') {
      spiderManAtt.speedMin = parseInt(speedArray[0]);
      spiderManAtt.speedMax = parseInt(speedArray[1]);
    }
  });

  let switchButton = document.querySelector('.aside__wind');
  let windEffect = document.querySelector('.radio__form');
  switchButton.addEventListener('change', e => {
    if (e.target.checked === true) {
      windEffect.addEventListener('change', e => {
        if (e.target.value === 'left') {
          windDirection = 'left';
        } else if (e.target.value === 'right') {
          windDirection = 'right';
        }
      });
    }
  });
};

export default asideControls;
