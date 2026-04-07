(function(){
  var card = document.getElementById('dodge-card');
  if (!card) return;
  var parent = card.closest('main') || card.parentElement.parentElement;
  var offsetX = 0, offsetY = 0;
  var targetX = 0, targetY = 0;
  var animating = false;

  document.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var dx = e.clientX - cx;
    var dy = e.clientY - cy;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var threshold = 250;
    if (dist < threshold) {
      var force = (threshold - dist) / threshold;
      targetX = -dx * force * 0.4;
      targetY = -dy * force * 0.4;
    } else {
      targetX = 0;
      targetY = 0;
    }
    if (!animating) { animating = true; animate(); }
  });

  function animate() {
    offsetX += (targetX - offsetX) * 0.06;
    offsetY += (targetY - offsetY) * 0.06;
    card.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px)';
    if (Math.abs(targetX - offsetX) > 0.1 || Math.abs(targetY - offsetY) > 0.1) {
      requestAnimationFrame(animate);
    } else {
      animating = false;
    }
  }
})();
