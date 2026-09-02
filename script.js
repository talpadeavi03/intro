(function () {
  var slots = document.querySelectorAll('.slot, [data-target]');
  var sections = document.querySelectorAll('.section');

  // Click / keyboard nav
  document.querySelectorAll('[data-target]').forEach(function (el) {
    el.addEventListener('click', function () {
      var target = document.querySelector(el.getAttribute('data-target'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Number keys 1-8 jump between sections, matching the hotbar
  var hotbarButtons = document.querySelectorAll('.hotbar .slot');
  document.addEventListener('keydown', function (e) {
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= hotbarButtons.length) {
      var btn = hotbarButtons[n - 1];
      var target = document.querySelector(btn.getAttribute('data-target'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Highlight active hotbar slot based on scroll position
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = '#' + entry.target.id;
          hotbarButtons.forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-target') === id);
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(function (section) { observer.observe(section); });
  }
})();
