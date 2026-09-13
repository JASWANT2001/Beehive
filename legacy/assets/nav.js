(function () {
  var b = document.getElementById('burger');
  var m = document.getElementById('menu');
  if (b && m) {
    b.addEventListener('click', function () {
      var open = m.classList.toggle('open');
      b.setAttribute('aria-expanded', open);
    });
    m.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') m.classList.remove('open');
    });
  }

  // Gallery filters
  var filterBar = document.getElementById('filters');
  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var cat = btn.getAttribute('data-cat');
      filterBar.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
      btn.classList.add('on');
      document.querySelectorAll('.gal figure').forEach(function (fig) {
        var show = cat === 'all' || fig.getAttribute('data-cat') === cat;
        fig.classList.toggle('hide', !show);
      });
    });
  }
})();
