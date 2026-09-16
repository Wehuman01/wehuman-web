// homepage hero · scramble through the rotating noun after "for "
// Same glyph set as the character rain. Each word carries its own OKLCH hue;
// the script only sets --cycle-hue — lightness/chroma stay in tokens.css so
// both themes keep their contrast. Under prefers-reduced-motion the hero
// stays as set — "humans" — and nothing moves.

(() => {
  const el = document.querySelector('[data-cycle]');
  if (!el) return;
  let words;
  try { words = JSON.parse(el.dataset.cycle ?? '[]'); } catch { return; }
  if (!Array.isArray(words) || words.length < 2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const glyphs = '01*+-:.';
  const HOLD = 3400, STEP = 40, ROUNDS = 4, STAGGER = 30;
  let idx = 0;

  function scramble(target) {
    el.style.setProperty('--cycle-hue', String(target.hue));
    const len = Math.max(el.textContent.length, target.word.length);
    const prev = el.textContent.padEnd(len);
    el.textContent = '';
    const spans = [];
    for (let i = 0; i < len; i++) {
      const s = document.createElement('span');
      s.textContent = prev[i] ?? ' ';
      el.appendChild(s);
      spans.push(s);
    }
    for (let i = 0; i < len; i++) {
      const finalChar = i < target.word.length ? target.word[i] : '';
      let rounds = ROUNDS;
      const tick = () => {
        if (rounds > 0) { spans[i].textContent = glyphs[(Math.random() * glyphs.length) | 0]; rounds--; setTimeout(tick, STEP); }
        else { spans[i].textContent = finalChar; }
      };
      setTimeout(tick, i * STAGGER);
    }
    setTimeout(() => { el.textContent = target.word; }, len * STAGGER + ROUNDS * STEP + 50);
  }

  function next() {
    idx = (idx + 1) % words.length;
    scramble(words[idx]);
    setTimeout(next, HOLD);
  }
  setTimeout(next, HOLD);
})();
