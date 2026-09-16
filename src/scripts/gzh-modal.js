// WeChat Official Account QR lightbox · any <a data-gzh-qr> opens the code in
// a dialog; the link's href is the no-JS fallback (raw image in a new tab) and
// doubles as the image source, so the site base path is applied only once.

(() => {
  const triggers = document.querySelectorAll('[data-gzh-qr]');
  if (!triggers.length) return;

  const label = triggers[0].getAttribute('aria-label') || 'WeChat Official Account QR code';
  const modal = document.createElement('div');
  modal.className = 'gzh-modal';
  modal.hidden = true;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', label);
  modal.innerHTML = '<img class="gzh-modal__card" alt="" draggable="false" />';
  const img = modal.querySelector('img');
  img.alt = label;
  img.src = triggers[0].href;
  document.body.appendChild(modal);

  let lastFocus = null;

  const open = (trigger) => {
    lastFocus = trigger;
    modal.hidden = false;
    // move focus onto the dialog surface for screen readers
    modal.tabIndex = -1;
    modal.focus();
  };
  const close = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    lastFocus?.focus();
  };

  triggers.forEach((t) => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      open(t);
    });
  });
  modal.addEventListener('click', close);
  img.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
