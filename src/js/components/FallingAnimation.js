import FallingObject from './FallingObject';

const dropBox = () => {
  let spiderMan = new FallingObject(
    70,
    70,
    'img/icons8-spider-man-new-filled.svg',
  );
  let thePunisher = new FallingObject(70, 70, '../../img/icons8-punisher.svg');
  let ironMan = new FallingObject(70, 70, '../../img/icons8-iron-man.svg');

  spiderMan.createObject();
  thePunisher.createObject();
  ironMan.createObject();
};

export default dropBox;
