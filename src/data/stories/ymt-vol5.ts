import type { Story } from '../types';

import stack from '../../assets/stories/ymt-vol5/stack.jpg';
import row from '../../assets/stories/ymt-vol5/row.jpg';
import logoNeon from '../../assets/stories/ymt-vol5/logo-neon.png';
import logoBlack from '../../assets/stories/ymt-vol5/logo-black.png';
import photoPattern from '../../assets/stories/ymt-vol5/photo-pattern.jpg';
import photoUncanny from '../../assets/stories/ymt-vol5/photo-uncanny.jpg';
import photoSheet from '../../assets/stories/ymt-vol5/photo-sheet.jpg';
import vellum from '../../assets/stories/ymt-vol5/vellum.jpg';
import arPhoto from '../../assets/stories/ymt-vol5/ar-photo.jpg';
import page1 from '../../assets/stories/ymt-vol5/page-p1.jpg';
import page23 from '../../assets/stories/ymt-vol5/page-p2-3.jpg';
import page45 from '../../assets/stories/ymt-vol5/page-p4-5.jpg';
import page6 from '../../assets/stories/ymt-vol5/page-p6.jpg';
import spreadGlitch from '../../assets/stories/ymt-vol5/spread-glitch.jpg';
import spreadFaces from '../../assets/stories/ymt-vol5/spread-faces.jpg';
import spreadRedFlags from '../../assets/stories/ymt-vol5/spread-red-flags.jpg';
import spreadFuture from '../../assets/stories/ymt-vol5/spread-future.jpg';
import showreelStill from '../../assets/stories/ymt-vol5/showreel-still.jpg';
import webCrosslucid from '../../assets/stories/ymt-vol5/web-crosslucid.jpg';
import webPortrait from '../../assets/stories/ymt-vol5/web-portrait.jpg';

// Copy after Sigve Tillier's brief, checked against Grafill's Visueltprisen 2024 entry (jury statement and credits).
export const ymtVol5: Story = {
  slug: 'ymt-vol5',
  section: 'Editorial',
  title: 'Coming Into Focus',
  standfirst:
    'The fifth edition of YMT, the student magazine from Visual Communication at KMD, developed in the months artificial intelligence reached everyone’s pocket. A black-and-white magazine in a neon cover, awarded a diploma at Visueltprisen 2024.',
  client: 'YMT, KMD, University of Bergen',
  year: 2023,
  page: 40,
  tone: '#5b5b51',
  imageLabel: 'YMT vol. 5 — print edition',
  hero: { src: stack, alt: 'A stack of YMT vol. 5 magazines with neon yellow covers on a concrete floor' },

  // The neon cover around a black-and-white magazine
  theme: {
    colors: {
      neon: '#ceff09',
      black: '#000000',
      graphite: '#242321',
      ash: '#989797',
      white: '#ffffff',
    },
    accent: '#111111',
  },

  details: [
    { label: 'Client', value: 'YMT, KMD, University of Bergen' },
    { label: 'Year', value: '2022–2023' },
    { label: 'Role', value: 'Art direction (group)' },
    { label: 'Scope', value: 'Identity, print, web, augmented reality' },
    { label: 'Award', value: 'Diploma, Visueltprisen 2024' },
  ],

  intro: [
    'Every year, the second-year students of Visual Communication at KMD, the University of Bergen’s Faculty of Fine Art, Music and Design, develop a magazine. It is called YMT, and each edition chooses its own theme and builds its own visual identity, in print and on the web.',
    'Volume 5 was developed through the autumn of 2022 and went to print early in 2023, just as artificial intelligence moved out of the research lab and into everyone’s pocket. The edition took that moment as its subject: the blurring line between what people make and what machines make, and between the printed page and the screen.',
    'A group of seven art directors, Sigve Tillier among them, set the direction for both the magazine and its website.',
  ],

  blocks: [
    {
      type: 'full',
      figure: {
        src: showreelStill,
        video: '/stories/ymt-vol5/showreel.mp4',
        alt: 'Showreel of YMT vol. 5 in print and on the web',
        ratio: '16 / 9',
      },
    },
    {
      type: 'text',
      kicker: 'The cover',
      paragraphs: [
        'The magazine itself is entirely black and white. Front and back, it is bound in a cover of neon yellow: the glossy surface that meets the reader first, polished like any consumer product. Open it and you reach what lies behind the interface, the code, carried by a layout built like one.',
      ],
    },
    { type: 'full', bleed: true, figure: { src: row, alt: 'Six copies of YMT vol. 5 laid in a row, their covers overlapping' } },
    {
      type: 'pair',
      figures: [
        { src: logoNeon, alt: 'YMT vol. 5 logo in neon on black', fit: 'contain', bg: 'black' },
        { src: logoBlack, alt: 'YMT vol. 5 logo in black on neon', fit: 'contain', bg: 'neon' },
      ],
    },
    { type: 'palette', colors: ['neon', 'black', 'graphite', 'ash', 'white'] },
    {
      type: 'text',
      kicker: 'Into the machine',
      paragraphs: [
        'Inside, the magazine views the development of artificial intelligence in retrospect. As the technology grows more sophisticated, the pages grow less so: orderly columns at the start give way to glitched portraits, scrambled faces and broken type towards the back.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: page23, alt: 'Spread with an AI-generated crowd scene', ratio: '16 / 9' },
        { src: page45, alt: 'Spread with an AI-generated car wreck at night', ratio: '16 / 9' },
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: spreadGlitch, alt: 'Spread with a glitched portrait', ratio: '16 / 9' },
        { src: spreadFaces, alt: 'Spread of student portraits with scrambled faces', ratio: '16 / 9' },
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: spreadRedFlags, alt: 'Spread headlined “Our list of red flags keeps growing”', ratio: '16 / 9' },
        { src: spreadFuture, alt: 'Spread headlined “What does the future of AI look like to you”', ratio: '16 / 9' },
      ],
    },
    {
      type: 'text',
      kicker: 'The typeface',
      paragraphs: [
        'Headlines and logo are set in a variable typeface by the type designer Yi-Chin Lai, used with her permission. In some weights it breaks almost entirely apart, which suited the edition perfectly: the further you leaf through, the more fragmented the headlines become.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: photoPattern, alt: 'An early spread: “Do we detect a new pattern here?” beside the history of artificial intelligence', ratio: '3 / 2' },
        { src: photoUncanny, alt: 'A spread on the uncanny valley, with a hand holding the page open', ratio: '3 / 2' },
      ],
    },
    {
      type: 'text',
      kicker: 'Machinations',
      paragraphs: [
        'One story in the magazine, “Machinations”, was written by GPT-3, then the most capable AI language model, under heavy direction from Sigve Tillier. The model could not carry a short story on its own, so it was steered passage by passage: anything that fell short was rewritten, and often the final text was assembled from sentences taken across several attempts at the same passage.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: page1, alt: 'Opening page of the story “Machinations”, its headline breaking apart', fit: 'contain', bg: 'white', ratio: '4 / 5' },
        { src: page6, alt: 'A page from “Machinations” with an AI-generated mechanical eye', fit: 'contain', bg: 'black', ratio: '4 / 5' },
      ],
    },
    {
      type: 'text',
      kicker: 'Between the stories',
      paragraphs: [
        'Translucent sheets separate one story from the next. As you approach a story, you first see it through the sheet, blurred, the way image generators such as Midjourney worked at the time: showing hazy versions of a picture before the finished one.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: vellum, alt: 'Lifting a translucent sheet to reveal the story beneath', ratio: '3 / 2' },
        { src: photoSheet, alt: 'A translucent sheet turned over a fragmented headline', ratio: '3 / 2' },
      ],
    },
    {
      type: 'text',
      kicker: 'Augmented reality',
      paragraphs: [
        'Several pages carry QR codes and augmented reality. Hold a phone over the print and the image comes alive on the screen, so the reader has to act out the edition’s point: we increasingly depend on a device to see the whole picture.',
      ],
    },
    { type: 'full', figure: { src: arPhoto, alt: 'A phone held over the uncanny valley spread, showing an augmented reality animation' } },
    {
      type: 'text',
      kicker: 'On the web',
      paragraphs: [
        'The website carried the blur onto the screen. As you scroll, the edges of the page stay out of focus, and only the centre is ever sharp. The site is no longer online, but the showreel at the top of this story keeps a record of it, along with the print edition.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: webCrosslucid, alt: 'YMT website: article on the art duo Crosslucid', ratio: '16 / 9' },
        { src: webPortrait, alt: 'YMT website: an AI-generated portrait', ratio: '16 / 9' },
      ],
    },
    {
      type: 'text',
      kicker: 'Visueltprisen 2024',
      paragraphs: [
        'The identity received a diploma at Grafill’s Visueltprisen in 2024. The jury called it a large, experimental and important project, and praised how the designers used AI as a tool rather than an obstacle, in an industry the technology is challenging.',
      ],
    },
  ],

  credits: [
    {
      label: 'Art direction',
      value:
        'Maiken Larsen Solholmvik, Agnes Bohinen Muren, Mina Kristine Aarseth, Thondiv Ela Calip, Annette Olianna Walbeck, Sigve Tillier, Lene Marie Sæthre',
    },
    {
      label: 'Design',
      value:
        'Louise Häggström, Ulva Bendiksen Vikse, Julie Romberg, Gosia Kuźnik, Ida Kristine Ones, Marius Hansen Høgås, Jenny Karen Paus, Carolina Christina Lykins, Fredrik Malmedal Salhus, Maria Holstad, Marion Ingvaldsen Høydal',
    },
    { label: 'Front-end development', value: 'Siri Angvik, Clara Neegaard, Mira Foust, Martin Magnussen, Scott Bodin' },
    { label: 'Typeface design', value: 'Yi-Chin Lai' },
    { label: 'Photography', value: 'The YMT vol. 5 team' },
  ],
};
