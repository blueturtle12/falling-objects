const Tabs = () => {
  document.querySelector('tab-slider--body').style.display = 'none';
  document.querySelectorAll('.tab-slider--body')[0].style.display = '';

  document
    .querySelector('.tab-slider--nav li')
    .addEventListener('click', function() {
      document.querySelector('.tab-slider--body').style.display = 'none';
      let activeTab = this.getAttribute('rel');
      function fadeInIt(el) {
        el.style.opacity = 0;

        var last = +new Date();
        var tick = function() {
          el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
          last = +new Date();

          if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
              setTimeout(tick, 16);
          }
        };

        tick();
      }
      fadeInIt(document.querySelector('#' + activeTab));

      if (this.getAttribute('rel') === 'tab2') {
        document.querySelector('.tab-slider--tabs').classList.add('slide');
      } else {
        document.querySelector('.tab-slider--tabs').classList.remove('slide');
      }
      document.querySelector('.tab-slider--nav li').classList.remove('active');
      this.classList.add('active');
    });
};

export default Tabs;
