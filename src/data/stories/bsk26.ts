import type { Story } from '../types';

import banner from '../../assets/stories/bsk26/banner.jpg';
import logoBlue from '../../assets/stories/bsk26/logo-blue.png';
import logoOnBlue from '../../assets/stories/bsk26/logo-on-blue.png';
import ledBannerSpons from '../../assets/stories/bsk26/led-banner-spons.jpg';
import screenProgram from '../../assets/stories/bsk26/screen-program.jpg';
import screenSpons from '../../assets/stories/bsk26/screen-spons.jpg';
import screenGalla from '../../assets/stories/bsk26/screen-galla.jpg';
import posterA4 from '../../assets/stories/bsk26/poster-a4.jpg';
import posterGrieghallen from '../../assets/stories/bsk26/poster-grieghallen.jpg';
import promoSpread from '../../assets/stories/bsk26/promo-spread.jpg';
import tote from '../../assets/stories/bsk26/tote.jpg';
import mug from '../../assets/stories/bsk26/mug.jpg';
import eventDoors from '../../assets/stories/bsk26/event-doors-bw.jpg';
import eventAudience from '../../assets/stories/bsk26/event-audience.jpg';
import eventTeam from '../../assets/stories/bsk26/event-team.jpg';
import eventPanel from '../../assets/stories/bsk26/event-panel.jpg';
import eventStage from '../../assets/stories/bsk26/event-stage.jpg';

const helvetica = "'Helvetica Neue', 'neue-haas-grotesk-display', Helvetica, Arial, sans-serif";
const ivy = "'ivyjournal', 'IvyJournal', Georgia, serif";

// All copy is a DRAFT for Sigve to rewrite; facts marked [placeholder] are unknown.
export const bsk26: Story = {
  slug: 'bsk26',
  section: 'Identity',
  title: 'Securing the Image',
  standfirst:
    'An identity for Bergen Sikkerhetskonferanse 2026 — drawn in broken lines, set against ice, steel and open sea.',
  client: 'Bergen Sikkerhetskonferanse',
  year: 2026,
  page: 12,
  tone: '#131e3c',
  imageLabel: 'BSK26 — banner',
  hero: { src: banner, alt: 'BSK26 key visual: the logo over a glitched image of ice and naval vessels' },
  coverImage: { src: eventAudience, alt: 'A full hall in Grieghallen facing the BSK26 stage' },

  // Colours sampled from the BSK26 banner and logo files
  theme: {
    colors: {
      royal: '#0026bd',
      night: '#131e3c',
      lead: '#3e5978',
      ocean: '#6e89a5',
      steel: '#96a7b6',
      fog: '#d1d3d3',
    },
    accent: '#0026bd',
    headingFont: helvetica,
    bodyFont: ivy,
  },

  details: [
    { label: 'Client', value: 'Bergen Sikkerhetskonferanse [placeholder]' },
    { label: 'Year', value: '2026 [placeholder]' },
    { label: 'Role', value: 'Art director [placeholder]' },
    { label: 'Scope', value: 'Identity, screens, print, merchandise, website [placeholder]' },
  ],

  intro: [
    'Bergen Sikkerhetskonferanse gathers students, cadets, politicians and the defence sector for a single day of talks on security in a changing world. The 2026 edition needed an identity that could carry that weight without sliding into the clichés of the genre.',
    'The letters of the logo are drawn as parallel lines that break and reconnect, a mark that holds together under pressure. Around it, photographs of ice, steel and naval vessels are pulled apart and rebuilt, so the imagery itself feels contested.',
    'The system ran from the stage screens in Grieghallen to posters, programmes, tote bags and the conference website.',
  ],

  blocks: [
    {
      type: 'pair',
      figures: [
        { src: logoBlue, alt: 'BSK26 logo in royal blue', fit: 'contain', bg: '#ffffff' },
        { src: logoOnBlue, alt: 'BSK26 logo in white on blue', fit: 'contain', bg: 'royal' },
      ],
    },
    {
      type: 'typefaces',
      faces: [
        {
          name: 'Helvetica Neue',
          role: 'Logo lockups, headlines & information',
          family: helvetica,
          weight: 500,
          sample: 'Bergen Sikkerhetskonferanse 2026',
        },
        {
          name: 'IvyJournal',
          role: 'Accents & editorial text',
          family: ivy,
          weight: 400,
          italic: true,
          sample: 'Galla — 14. april, Grieghallen',
        },
      ],
    },
    { type: 'palette', colors: ['royal', 'night', 'lead', 'ocean', 'steel', 'fog'] },
    { type: 'full', bleed: true, figure: { src: ledBannerSpons, alt: 'BSK26 banner and sponsor wall on the LED screen' } },
    {
      type: 'feature',
      flip: true,
      large: { src: promoSpread, alt: 'BSK26 two-page A4 promotion', fit: 'contain', bg: 'fog' },
      small: { src: posterA4, alt: 'BSK26 A4 poster', fit: 'contain', bg: 'night' },
    },
    {
      type: 'full',
      bleed: true,
      figure: { src: posterGrieghallen, alt: 'The BSK26 poster as a banner on the facade of Grieghallen' },
    },
    {
      type: 'text',
      kicker: 'On screen',
      paragraphs: [
        'On the day, the identity lived mostly on screens: the stage backdrop, the programme between sessions, the sponsor wall and the gala dinner.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: screenProgram, alt: 'BSK26 programme screen', ratio: '16 / 9' },
        { src: screenSpons, alt: 'BSK26 sponsor screen', ratio: '16 / 9' },
      ],
    },
    { type: 'full', figure: { src: screenGalla, alt: 'BSK26 gala screen, logo seen through frosted glass' } },
    { type: 'site', url: 'https://www.bergensikkerhetskonferanse.no/', label: 'bergensikkerhetskonferanse.no' },
    {
      type: 'pair',
      figures: [
        { src: tote, alt: 'BSK26 tote bag on stone steps' },
        { src: mug, alt: 'BSK26 mug in its box', fit: 'contain', bg: '#efefef' },
      ],
    },
    { type: 'quote', text: '[Draft pull quote — a line about the idea, in Sigve’s words.]' },
    { type: 'full', bleed: true, figure: { src: eventStage, alt: 'A speaker on stage in front of the BSK26 screen' } },
    {
      type: 'feature',
      large: { src: eventPanel, alt: 'Panel debate in front of the BSK26 backdrop' },
      small: { src: eventDoors, alt: 'BSK26 screens above the entrance doors' },
    },
    {
      type: 'pair',
      figures: [
        { src: eventTeam, alt: 'The BSK team in front of the sponsor wall' },
        { src: eventAudience, alt: 'A full hall facing the BSK26 stage' },
      ],
    },
  ],

  credits: [
    { label: 'Art direction & design', value: 'Sigve Tillier' },
    { label: 'Event photography', value: '[placeholder]' },
  ],
};
