import FallingObject from './FallingObject';
import { ironManAtt, punisherAtt, spiderManAtt } from './asideControls';

const dropBox = () => {
  for (let j = 0; j < 21; j++) {
    setTimeout(() => {
      let spiderMan = new FallingObject(
        spiderManAtt.size,
        spiderManAtt.size,
        'img/icons8-spider-man-new-filled.svg',
        spiderManAtt.speed,
      );
      spiderMan.createObject();
      let thePunisher = new FallingObject(
        punisherAtt.size,
        punisherAtt.size,
        '../../img/icons8-punisher.svg',
        punisherAtt.speed,
      );
      thePunisher.createObject();
      let ironMan = new FallingObject(
        ironManAtt.size,
        ironManAtt.size,
        '../../img/icons8-iron-man.svg',
        ironManAtt.speed,
      );
      ironMan.createObject();
    }, 1000 * (j + 1));
  }
};

export default dropBox;
