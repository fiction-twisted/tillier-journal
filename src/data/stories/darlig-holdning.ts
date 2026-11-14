import type { Story } from '../types';

import cover from '../../assets/stories/darlig-holdning/cover.jpg';
import cassetteColour from '../../assets/stories/darlig-holdning/cassette-case-colour.jpg';
import cassetteBw from '../../assets/stories/darlig-holdning/cassette-scene-matched.jpg';

// Cassette mockups only: the cassette carries the bootleg mood better than vinyl would.
export const darligHoldning: Story = {
  slug: 'darlig-holdning',
  section: 'Music',
  title: 'Second Generation',
  standfirst:
    'A cover for Lil Mumble (II): Dårlig Holdning, the 2026 EP from Kulturelt Fenomen: dressed as a bootleg cassette, and deliberately a little off.',
  client: 'Kulturelt Fenomen',
  year: 2026,
  page: 52,
  tone: '#bb4f4b',
  imageLabel: 'Lil Mumble (II): Dårlig Holdning — EP cover',
  hero: { src: cover, alt: 'Lil Mumble (II): Dårlig Holdning cover: a blurred group photo in faded red, laid out like a cassette J-card' },
  coverImage: { src: cassetteColour, alt: 'Lil Mumble (II): Dårlig Holdning on cassette, the tracklist and spine seen through the case' },

  // Red and yellow carry over from the first EP, Lil Mumble (I): Snakk Tydelig
  theme: {
    colors: {
      red: '#bb4f4b',
      black: '#0e100e',
      bone: '#c3b9b6',
      rust: '#734940',
      clay: '#a48173',
      yellow: '#c3b655',
    },
    accent: '#bb4f4b',
  },

  details: [
    { label: 'Client', value: 'Kulturelt Fenomen' },
    { label: 'Year', value: '2026' },
    { label: 'Role', value: 'Design & co-creative direction' },
    { label: 'Scope', value: 'EP cover' },
  ],

  intro: [
    'Lil Mumble is a character in Kulturelt Fenomen’s universe: a pseudonym for the artist, and an imaginary figure whose story unfolds across a series of EPs. The narrative they tell is not the artist’s own, but Lil Mumble’s.',
    'Kulturelt Fenomen commissioned the cover for the second instalment, Lil Mumble (II): Dårlig Holdning. The EP tells one cohesive story from start to finish, but it was never meant to be a polished work, and the cover doesn’t pretend otherwise.',
    'It borrows the look of a bootleg cassette: a photo that seems to have been copied one time too many, a spine and track list laid out like a J-card, a barcode scribbled over. The type has been distorted by running it through print, and over the printed design come scrawled, hand-drawn marks, almost in Lil Mumble’s own hand. The work is Kulturelt Fenomen’s, but Lil Mumble bleeds through.',
    'Odd numbers run through all of it, and the design follows one rule: whenever something feels off, it’s right.',
  ],

  blocks: [
    {
      type: 'text',
      kicker: 'The crown',
      paragraphs: [
        'The crown scrawled above the figure at the centre recalls Basquiat, and it turns up throughout Kulturelt Fenomen’s universe. The red and yellow carry over from the first EP, Lil Mumble (I): Snakk Tydelig.',
      ],
    },
    { type: 'palette', colors: ['red', 'yellow', 'black', 'bone', 'rust', 'clay'] },
    {
      type: 'full',
      figure: { src: cassetteColour, alt: 'Lil Mumble (II): Dårlig Holdning on cassette, the tracklist and spine seen through the case' },
    },
    {
      type: 'full',
      figure: { src: cassetteBw, alt: 'The cassette in colour beside a pocket radio and a tape labelled Lil Mumble Part II, in black and white' },
    },
  ],

  credits: [
    { label: 'Design', value: 'Sigve Tillier' },
    { label: 'Photography', value: 'Supplied by artist' },
    { label: 'Creative direction', value: 'Sigve Tillier and Kulturelt Fenomen' },
  ],
};
