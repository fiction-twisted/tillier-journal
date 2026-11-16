import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Dev only: lets the preview pane fast-forward animations when it throttles frames
if (import.meta.env.DEV) Object.assign(window, { gsap });

const EASE = 'expo.out';
const SMALL_LOGO = 150; // px width of the logo once it has settled in the header
const MARK_RATIO = 170.079 / 737.008; // height of the striped mark relative to logo width

// Today's date in the header, like a printed dateline.
function setDateline() {
  const el = document.querySelector('[data-today]');
  if (!el) return;
  el.textContent = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

// The masthead logo starts full width and shrinks into the header on scroll.
function masthead() {
  const logo = document.querySelector<HTMLElement>('.mast-logo');
  const header = document.querySelector<HTMLElement>('.site-header');
  // Only the front page has a masthead; story pages keep the compact logo.
  const masthead = document.querySelector<HTMLElement>('.masthead');
  if (!logo || !header || !masthead) return;

  // Finish shrinking exactly when the section bar reaches the header, so the
  // shrinking logo and the content below it never overlap.
  // (Measured from the masthead, since the sticky bar's own offset changes once stuck.)
  const end = () => masthead.offsetTop + masthead.offsetHeight - header.offsetHeight;

  // On narrow screens the logo settles on the left, clear of the nav.
  const narrow = () => window.innerWidth <= 800;
  const small = () => (narrow() ? 104 : SMALL_LOGO);

  // "JOURNAL" fades out on the way up, so the header holds just the mark
  // (centred on the mark's own height: 170 of the logo's 737 units).
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { start: 0, end, scrub: true, invalidateOnRefresh: true },
  });
  tl.to(logo, {
    width: small,
    top: () => header.offsetHeight / 2 - (small() * MARK_RATIO) / 2,
    left: () =>
      narrow()
        ? parseFloat(getComputedStyle(header).paddingLeft) + small() / 2
        : document.documentElement.clientWidth / 2,
    duration: 1,
  });
  tl.to(logo.querySelector('.logo-word'), { opacity: 0, duration: 0.45 }, 0.4);

  // Past the masthead, the section bar tucks away while reading down and
  // comes back as soon as the reader scrolls up.
  const bar = document.querySelector<HTMLElement>('.section-bar');
  ScrollTrigger.create({
    start: end,
    end: 'max',
    onToggle: (self) => {
      header.classList.toggle('is-scrolled', self.isActive);
      if (!self.isActive) bar?.classList.remove('is-hidden');
    },
    onUpdate: (self) => bar?.classList.toggle('is-hidden', self.direction === 1),
  });
}

// Section links filter the contents list (dimming the other stories).
function sectionFilter() {
  const links = document.querySelectorAll<HTMLAnchorElement>('.section-bar [data-section]');
  const items = document.querySelectorAll<HTMLElement>('.contents-list li');
  const contents = document.getElementById('contents');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      links.forEach((l) => l.setAttribute('aria-current', String(l === link)));
      items.forEach((li) =>
        li.classList.toggle('is-dimmed', section !== 'all' && li.dataset.section !== section),
      );
      if (contents) {
        const offset = (document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0) + 24;
        window.scrollTo({ top: contents.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });
}

// Wrap each word in a mask so headlines can rise into place line by line.
function splitWords(el: HTMLElement) {
  const nodes = Array.from(el.childNodes);
  el.textContent = '';
  for (const node of nodes) {
    const isEm = node.nodeName === 'EM';
    const words = (node.textContent ?? '').split(/(\s+)/);
    for (const w of words) {
      if (!w) continue;
      if (/^\s+$/.test(w)) {
        el.append(' ');
        continue;
      }
      const mask = document.createElement('span');
      mask.className = 'word-mask';
      mask.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.16em;margin-bottom:-0.16em';
      const inner = document.createElement(isEm ? 'em' : 'span');
      inner.className = 'word';
      inner.style.display = 'inline-block';
      inner.textContent = w;
      mask.append(inner);
      el.append(mask);
    }
  }
}

function reveals() {
  document.querySelectorAll<HTMLElement>('[data-reveal="lines"]').forEach((el) => {
    splitWords(el);
    gsap.from(el.querySelectorAll('.word'), {
      yPercent: 110,
      duration: 1.3,
      ease: EASE,
      stagger: 0.06,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-reveal="fade"]').forEach((el) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 1.4,
      ease: EASE,
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-reveal="image"]').forEach((el) => {
    const inner = el.querySelector('.img-inner');
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } });
    tl.from(el, { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' });
    if (inner) tl.from(inner, { scale: 1.18, duration: 2, ease: EASE }, 0);
  });

  // Colour fields rise in one after another
  document.querySelectorAll<HTMLElement>('.block-palette').forEach((row) => {
    gsap.from(row.querySelectorAll('[data-swatch]'), {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: 1.4,
      ease: 'expo.inOut',
      stagger: 0.08,
      scrollTrigger: { trigger: row, start: 'top 85%' },
    });
  });

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top top', end: 'bottom top', scrub: true },
    });
  });
}

// The two covers of issue 01 trade places: once when the reader is halfway into the
// paper-edition offer, and whenever the back cover is hovered (or tapped).
function coverPair() {
  const pair = document.querySelector<HTMLElement>('[data-cover-pair]');
  if (!pair) return;
  const covers = Array.from(pair.querySelectorAll<HTMLElement>('.paper-cover'));
  const swap = () => covers.forEach((c) => {
    c.classList.toggle('is-front');
    c.classList.toggle('is-back');
  });
  // After a hover swap the other cover slides in under the pointer; wait until the pointer
  // leaves the pair before hover can swap again, so the covers don't ping-pong.
  let armed = true;
  pair.addEventListener('mouseleave', () => { armed = true; });
  covers.forEach((c) => {
    c.addEventListener('mouseenter', () => {
      if (armed && c.classList.contains('is-back')) { armed = false; swap(); }
    });
    // A tap on either cover swaps them on touch screens; with a mouse, a click on the back cover does.
    c.addEventListener('click', (e) => {
      const touch = (e as PointerEvent).pointerType === 'touch' || matchMedia('(hover: none)').matches;
      if (touch || c.classList.contains('is-back')) swap();
    });
  });
  ScrollTrigger.create({
    trigger: pair.closest('.paper') ?? pair,
    start: 'center center',
    once: true,
    onEnter: swap,
  });
}

export function initMotion() {
  setDateline();
  masthead();
  sectionFilter();
  coverPair();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) reveals();
}
