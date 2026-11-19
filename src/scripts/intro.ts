import { gsap } from 'gsap';

// Opening titles, played once per visit (the inline check in SiteHeader decides, before the first paint).
// The page opens on the favicon T: the masthead shut, the T's half and the R's half meeting at their stems
// with the middle letters folded away between them. It opens into TILLIER, "JOURNAL" settles underneath,
// and the logo travels to wherever it lives on this page (the front-page masthead or the compact mark in
// the header) while the paper lifts off the page behind it.

// In logo units (viewBox 0 0 737 217): the T's stem ends at x 170, the R's stem starts at 567,
// so each half travels 198.5 to meet at the middle (368.5); they overlap slightly when shut. The middle letters span 189 to 548.
const SHIFT = 199.3; // 198.5 to meet, plus a hair of overlap so no seam of light shows down the stem
const T_EDGE = 170.079;
const MID_LEFT = 188.976;
const MID_WIDTH = 548.032 - MID_LEFT;
const MARK_CENTRE = 85.04 / 217.414; // vertical centre of the mark, as a share of the logo's height

export function initIntro() {
  const root = document.documentElement;
  if (!root.classList.contains('intro')) return;
  (window as unknown as { __tjIntro?: boolean }).__tjIntro = true;

  const link = document.querySelector<HTMLElement>('.mast-logo');
  const curtain = document.querySelector<HTMLElement>('.intro-curtain');
  const svg = link?.querySelector<SVGSVGElement>('svg');
  const t = svg?.querySelector<SVGPathElement>('.logo-t');
  const mid = svg?.querySelector<SVGPathElement>('.logo-mid');
  const r = svg?.querySelector<SVGPathElement>('.logo-r');
  const word = svg?.querySelector<SVGGElement>('.logo-word');
  if (!link || !curtain || !svg || !t || !mid || !r || !word) {
    root.classList.remove('intro');
    return;
  }

  window.scrollTo(0, 0);

  // Where the logo lives on this page, and how it should stand in the middle of the screen.
  const home = svg.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const big = Math.min(vw * (vw <= 800 ? 0.84 : 0.62), 860);
  const scale = big / home.width;
  const centre = {
    x: vw / 2 - (home.left + home.width / 2),
    // put the mark (not mark + JOURNAL) in the middle of the screen
    y: vh / 2 - (home.top + home.height * MARK_CENTRE) + (home.height / 2 - home.height * MARK_CENTRE) * (scale - 1),
  };
  const wordHome = parseFloat(getComputedStyle(word).opacity) || 0;

  // 0 = shut (the favicon T), 1 = open (TILLIER)
  const state = { open: 0 };
  const draw = () => {
    const shut = 1 - state.open;
    t.setAttribute('transform', `translate(${SHIFT * shut} 0)`);
    r.setAttribute('transform', `translate(${-SHIFT * shut} 0)`);
    // the middle letters are uncovered as the stems pass over them
    const edge = T_EDGE + SHIFT * shut;
    const inset = Math.min(50, Math.max(0, ((edge - MID_LEFT) / MID_WIDTH) * 100));
    mid.style.clipPath = `inset(0 ${inset}% 0 ${inset}%)`;
  };

  gsap.set(svg, { transformOrigin: '50% 50%', x: centre.x, y: centre.y + 14, scale, opacity: 0 });
  gsap.set(word, { opacity: 0 });
  draw();
  root.classList.add('intro-ready');

  const finish = () => {
    gsap.set(svg, { clearProps: 'transform,transformOrigin,opacity' });
    gsap.set(word, { clearProps: 'opacity' });
    t.removeAttribute('transform');
    r.removeAttribute('transform');
    mid.style.clipPath = '';
    root.classList.remove('intro', 'intro-ready');
    try { sessionStorage.setItem('tj-intro', '1'); } catch {}
  };

  const tl = gsap.timeline({ onComplete: finish });
  tl.to(svg, { opacity: 1, y: centre.y, duration: 0.6, ease: 'power3.out' })
    .to(state, { open: 1, duration: 1.05, ease: 'expo.inOut', onUpdate: draw }, '+=0.25')
    .to(word, { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3')
    .addLabel('fly', '+=0.25')
    .to(svg, { x: 0, y: 0, scale: 1, duration: 1.05, ease: 'expo.inOut' }, 'fly')
    .to(word, { opacity: wordHome, duration: 0.5, ease: 'power2.inOut' }, 'fly+=0.35')
    .to(curtain, { opacity: 0, duration: 0.75, ease: 'power2.inOut' }, 'fly+=0.35');

  // Dev only: lets the preview pane step through the intro
  if (import.meta.env.DEV) {
    Object.assign(window, { __tjIntroTl: tl });
    if (new URLSearchParams(location.search).has('intro-pause')) tl.pause();
  }

  // A click, a key or a scroll attempt hurries it along rather than cutting it off.
  const hurry = () => tl.timeScale(5);
  ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((ev) =>
    window.addEventListener(ev, hurry, { once: true, passive: true }),
  );
}
