import { objectDataType } from './carousel';

export let ironManAtt = {
  size: 70,
  speed: 6,
};
export let punisherAtt = {
  size: 70,
  speed: 6,
};
export let spiderManAtt = {
  size: 70,
  speed: 6,
};

const asideControls = () => {
  const sizeControl = document.querySelector('#size');
  const speedControl = document.querySelector('#speed');
  sizeControl.addEventListener('change', e => {
    if (objectDataType === 'iron') {
      ironManAtt.size = ironManAtt.size * (1.4 + e.target.value / 10);
    } else if (objectDataType === 'punisher') {
      punisherAtt.size = punisherAtt.size * (1.4 + e.target.value / 10);
    } else if (objectDataType === 'spider') {
      spiderManAtt.size = spiderManAtt.size * (1.4 + e.target.value / 10);
    }
  });
  speedControl.addEventListener('change', e => {
    if (objectDataType === 'iron') {
      ironManAtt.speed = ironManAtt.speed / e.target.value;
    } else if (objectDataType === 'punisher') {
      punisherAtt.speed = punisherAtt.speed / e.target.value;
    } else if (objectDataType === 'spider') {
      spiderManAtt.speed = spiderManAtt.speed / e.target.value;
    }
  });
};

export default asideControls;
