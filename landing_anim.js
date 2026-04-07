// Hero DOTMORE letter slide-up animation (video cutout version)
(function() {
  var title = document.getElementById('heroTitle');
  if (!title) return;

  var text = title.textContent;

  // Clear original text
  title.textContent = '';
  title.style.backgroundImage = 'none';
  title.style.webkitBackgroundClip = 'unset';
  title.style.backgroundClip = 'unset';
  title.style.display = 'flex';
  // Black text on white bg + screen blend = video shows through text
  title.style.color = '#000';
  title.style.webkitTextFillColor = '#000';

  text.split('').forEach(function(char, i) {
    var wrap = document.createElement('span');
    wrap.style.display = 'inline-block';
    wrap.style.overflow = 'hidden';
    wrap.style.verticalAlign = 'bottom';

    var letter = document.createElement('span');
    letter.textContent = char;
    letter.style.display = 'inline-block';
    letter.style.transform = 'translateY(110%)';
    letter.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    letter.style.transitionDelay = (i * 0.08 + 0.2) + 's';

    wrap.appendChild(letter);
    title.appendChild(wrap);
  });

  // Trigger slide-up animation
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      var letters = title.querySelectorAll(':scope > span > span');
      letters.forEach(function(letter) {
        letter.style.transform = 'translateY(0)';
      });
    });
  });
})();
