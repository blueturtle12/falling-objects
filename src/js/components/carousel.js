//import conditionalRender from './conditionalRender';

export let objectDataType;

const carousel = () => {
  var box = document.querySelector('.shapes__carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.shapes__carousel-content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 && !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
    objectDataType = current.getAttribute('data-object-type');
  }
  next.addEventListener('click', function() {
    navigate(1);
    //conditionalRender();
  });
  prev.addEventListener('click', function() {
    navigate(-1);
    //conditionalRender();
  });
  navigate(0);
  //conditionalRender();
};

export default carousel;
