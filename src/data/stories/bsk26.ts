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

// Copy based on Sigve's brief (ripple effect, Bergen, security); photographer credit still to come.
export const bsk26: Story = {
  slug: 'bsk26',
  section: 'Identity',
  title: 'The Ripple Effect',
  standfirst:
    'An identity for Bergen Sikkerhetskonferanse 2026, built on what happens when a drop hits still water: rings that spread outward, and break as they travel.',
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
    { label: 'Client', value: 'Bergen Sikkerhetskonferanse' },
    { label: 'Year', value: '2026' },
    { label: 'Role', value: 'Art director' },
    { label: 'Scope', value: 'Identity, print, screens, moving image, merchandise, website' },
  ],

  intro: [
    'Drop something into still water and rings spread from the point of impact. A conference works the same way. For one day, Grieghallen becomes a centre where opinions are formed and shared, where people inform one another and a dialogue begins. When the doors close, the attendees carry the conversations, the talks and the impressions out with them, ring by ring.',
    'The BSK26 mark is built on that idea. Its letters are drawn in parallel lines that break as they bend, like ripples on a surface. The breaks also trace the journey information takes: the further it travels from its source, the more it is distorted along the way.',
    'Water runs through the rest of the identity, too. Bergen is renowned for its rainy days, and as a city on the waterfront, its history was written by trade along the sea routes. The palette moves from royal blue through night, lead and ocean to fog: the colours of a harbour town under low cloud.',
    'And all of it had to serve a conference on security, held as the North Atlantic Alliance frays and Europe raises its military budgets. An opening film set the tone before the first speaker took the stage, with a quote from Mark Carney.',
  ],

  blocks: [
    {
      type: 'quote',
      text: 'Let me be direct: We’re in the midst of a rupture, not a transition.',
      cite: 'Mark Carney, Prime Minister of Canada',
    },
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
      kicker: 'Programme & sponsors',
      paragraphs: [
        'On the screens in Grieghallen, a naval frigate fades into the rooftops of Bergen under a veil of fog: the city’s maritime history and today’s security in a single image. The programme sets the day’s four parts in plain Helvetica alongside it, while the sponsor screen gathers the partners on a pale band across the ship, so the picture carries on behind them.',
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
    { label: 'Event photography', value: 'Sverre Christian Jarild' },
  ],
};
