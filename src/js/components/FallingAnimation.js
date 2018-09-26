import FallingObject from './FallingObject';
import { ironManAtt, punisherAtt, spiderManAtt } from './asideControls';
import { random } from './FallingObject';
import { gameRunning } from '../index';

const dropBox = () => {
  //setTimeout(() => {
  let ironManSize = random(ironManAtt.sizeMin, ironManAtt.sizeMax);
  let punisherSize = random(punisherAtt.sizeMin, punisherAtt.sizeMax);
  let spiderManSize = random(spiderManAtt.sizeMin, spiderManAtt.sizeMax);
  let ironManSpeed = random(ironManAtt.speedMin, ironManAtt.speedMax);
  let punisherSpeed = random(punisherAtt.speedMin, punisherAtt.speedMax);
  let spiderManSpeed = random(spiderManAtt.speedMin, spiderManAtt.speedMax);
  let spiderMan = new FallingObject(
    spiderManSize,
    spiderManSize,
    'img/icons8-spider-man-new-filled.svg',
    spiderManSpeed,
  );
  spiderMan.createObject();
  let thePunisher = new FallingObject(
    punisherSize,
    punisherSize,
    '../../img/icons8-punisher.svg',
    punisherSpeed,
  );
  thePunisher.createObject();
  let ironMan = new FallingObject(
    ironManSize,
    ironManSize,
    '../../img/icons8-iron-man.svg',
    ironManSpeed,
  );
  ironMan.createObject();
  //}, 100);
};

export default dropBox;
