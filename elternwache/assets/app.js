document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--paper)';
      links.style.padding = 'var(--space-md) var(--space-2xl)';
      links.style.borderBottom = '1px solid var(--line)';
    });
  }

  var form = document.querySelector('.apply-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var hp = form.querySelector('.honeypot input');
      if (hp && hp.value) return;
      var data = new FormData(form);
      var params = new URLSearchParams();
      data.forEach(function(v, k) { if (v) params.append(k, v); });
      window.location.href = 'mailto:groetzscho@outlook.de?subject=' + encodeURIComponent('Audit-Anfrage') + '&body=' + encodeURIComponent(params.toString().replace(/&/g, '\n').replace(/=/g, ': '));
    });
  }
});
