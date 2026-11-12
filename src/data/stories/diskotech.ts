import type { Story } from '../types';

import hero from '../../assets/stories/diskotech/hero-01.jpg';
import logoBlack from '../../assets/stories/diskotech/logo-black-on-white.png';
import logoWhite from '../../assets/stories/diskotech/logo-white-on-black.png';
import launchStill from '../../assets/stories/diskotech/launch-film-poster.jpg';
import kokekveldPoster from '../../assets/stories/diskotech/kokekveld-poster.jpg';
import kokekveldPromoStill from '../../assets/stories/diskotech/kokekveld-promo-poster.jpg';
import kompisPoster from '../../assets/stories/diskotech/kompis-poster.jpg';
import kompisMockup from '../../assets/stories/diskotech/kompis-print-mockup.jpg';
import event01 from '../../assets/stories/diskotech/event-01.jpg';
import event06 from '../../assets/stories/diskotech/event-06.jpg';
import event22 from '../../assets/stories/diskotech/event-22.jpg';
import event47 from '../../assets/stories/diskotech/event-47.jpg';
import event57 from '../../assets/stories/diskotech/event-57.jpg';
import event59 from '../../assets/stories/diskotech/event-59.jpg';
import event61 from '../../assets/stories/diskotech/event-61.jpg';
import event99 from '../../assets/stories/diskotech/event-99.jpg';

// Origin story after Sigve's brief, told in the register of GQ's account of how Been Trill began.
export const diskotech: Story = {
  slug: 'diskotech',
  section: 'Nightlife',
  title: 'The Party We Couldn’t Find',
  standfirst:
    'Five DJs and a graphic designer started Diskotech because nobody in Bergen was playing the music they wanted to hear. The logo stays. Everything around it changes with the night.',
  client: 'Diskotech',
  year: 2025,
  page: 28,
  tone: '#110a0b',
  imageLabel: 'Diskotech — Kokekveld',
  hero: { src: hero, alt: 'The Diskotech logo projected above the DJ booth, the room washed in red' },
  coverImage: { src: event99, alt: 'The Diskotech logo glowing magenta above a crowded dance floor' },

  // Diskotech has no fixed palette: four constants, then colours chosen per event
  theme: {
    colors: {
      // always present
      black: '#0b0b0b',
      white: '#ffffff',
      grey: '#8c8c8a',
      red: '#ab1914',
      // Kokekveld: cold, hard techno (sampled from the poster)
      asphalt: '#2c2c2b',
      petrol: '#3d5e65',
      ice: '#4d9bac',
      concrete: '#a4a29f',
      // Kompis: hot, glossy red with chrome (sampled from the poster)
      lacquer: '#ab1914',
      oxblood: '#7d1311',
      wine: '#431616',
      chrome: '#c4c2c0',
    },
    accent: '#ab1914',
  },

  details: [
    { label: 'Client', value: 'Diskotech' },
    { label: 'Year', value: '2025–2026' },
    { label: 'Role', value: 'Co-founder & designer' },
    { label: 'Scope', value: 'Identity, posters, moving image, social' },
  ],

  intro: [
    'In the early summer of 2025, six friends in Bergen kept arriving at the same complaint. There were clubs, and there were nights out, but nobody in the city was playing what they listened to on their own: industrial, groove, techno, the harder and heavier end of it. No local collective was putting it on. So they decided to put it on themselves.',
    'Five DJs and a graphic designer had a vision, a sound, a name and a group chat. No business plan. Diskotech was a crew before it was a brand, and the brand is, more or less, whatever gathers around the crew’s parties.',
    'That is why it isn’t an identity system in the usual sense. There is a logo: a slanted sans serif held in tribal shapes, a form that has long belonged to techno. The shapes embrace the letters and interact with them; the “o” is drawn by the shapes themselves. There are constants: black, white, grey and red. Beyond that, every night gets its own look, tuned to its music. Instagram is where Diskotech mostly lives, so everything posted there belongs to the brand, though the logo can shout or barely whisper. The tribal shapes are always somewhere in the picture.',
  ],

  blocks: [
    {
      type: 'pair',
      figures: [
        { src: logoWhite, alt: 'Diskotech logo in white on black', fit: 'contain', bg: '#000000' },
        { src: logoBlack, alt: 'Diskotech logo in black on white', fit: 'contain', bg: '#ffffff' },
      ],
    },
    { type: 'palette', colors: ['black', 'white', 'grey', 'red'] },
    {
      type: 'text',
      kicker: 'The launch',
      paragraphs: [
        'Diskotech announced itself with a 34-second film on Instagram. It starts out as disco and ends up as techno: a tongue-in-cheek introduction to the name, announced by none other than Richard Nixon.',
      ],
    },
    {
      type: 'full',
      narrow: true,
      figure: {
        src: launchStill,
        video: '/stories/diskotech/34.mp4',
        alt: 'Launch film: the Diskotech logo appearing on an old CRT monitor',
        ratio: '1 / 1',
      },
    },
    {
      type: 'text',
      kicker: 'Kokekveld',
      paragraphs: [
        'The first night, Kokekveld, took over Bergen Kjøtt on December 5th 2025, with five DJs working the cold, hard end of industrial, groove and techno. So the look went cold too: petrol and ice blue over asphalt grey, and the name drawn in thorns. A teaser in static and glitches ran on Instagram in the weeks before.',
      ],
    },
    { type: 'palette', short: true, colors: ['asphalt', 'petrol', 'ice', 'concrete'] },
    {
      type: 'pair',
      figures: [
        { src: kokekveldPoster, alt: 'Kokekveld poster', fit: 'contain', bg: 'black', ratio: '4 / 5' },
        {
          src: kokekveldPromoStill,
          video: '/stories/diskotech/kokekveld-promo.mp4',
          alt: 'Kokekveld teaser film',
          fit: 'contain',
          bg: 'black',
          ratio: '4 / 5',
        },
      ],
    },
    {
      type: 'trio',
      figures: [
        { src: event57, alt: 'Dancers in blue light, one wearing a Kokekveld shirt' },
        { src: event59, alt: 'The logo glowing through blue haze over the dance floor' },
        { src: event47, alt: 'A red laser cutting across the booth as the crowd leans in' },
      ],
    },
    {
      type: 'full',
      bleed: true,
      figure: { src: event61, alt: 'Blue strobes over the crowd at Kokekveld', ratio: '16 / 9' },
    },
    {
      type: 'text',
      kicker: 'Diskotech presents: Kompis',
      paragraphs: [
        'For the second night, on May 23rd 2026, Diskotech hosted Kompis at Cornerteateret, with Pelle Pastoor, Pan Rasch and Bobby F also on the bill. It ran hotter, and the look followed: a glossy red base, with the tribal shapes cast in chrome. Bolder, and a good deal sexier.',
      ],
    },
    { type: 'palette', short: true, colors: ['lacquer', 'oxblood', 'wine', 'chrome'] },
    {
      type: 'pair',
      figures: [
        { src: kompisPoster, alt: 'Diskotech presents Kompis poster', fit: 'contain', bg: 'black', ratio: '4 / 5' },
        { src: kompisMockup, alt: 'The Kompis poster in print, propped against a rusted red car door', ratio: '4 / 5' },
      ],
    },
    {
      type: 'trio',
      figures: [
        { src: event06, alt: 'The Diskotech logo projected in magenta above the chained DJ booth' },
        { src: event01, alt: 'The Diskotech logo projected above the DJ booth in red light' },
        { src: event22, alt: 'Red neon frame around the DJ booth' },
      ],
    },
    {
      type: 'text',
      kicker: 'Musk',
      paragraphs: [
        'In June 2026, Diskotech popped up at Musk for a single night. The next one is already in the works, set for the first quarter of 2027.',
      ],
    },
  ],

  credits: [
    { label: 'Identity, posters & films', value: 'Sigve Tillier' },
    { label: 'Event photography', value: 'Hamza Saleh' },
  ],
};
