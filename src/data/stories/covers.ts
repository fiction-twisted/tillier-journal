import type { Story } from '../types';

import carePackage from '../../assets/stories/covers/care-package.jpg';
import skeletonTree from '../../assets/stories/covers/skeleton-tree.jpg';
import utopia from '../../assets/stories/covers/utopia.jpg';
import yeezus from '../../assets/stories/covers/yeezus-poster.jpg';
import utopiaCrate from '../../assets/stories/covers/utopia-crate-v4.jpg';
import carePackageDeck from '../../assets/stories/covers/care-package-deck.jpg';
import skeletonTreeTurntable from '../../assets/stories/covers/skeleton-tree-turntable.jpg';
import skeletonTreeSleeve from '../../assets/stories/covers/skeleton-tree-sleeve.jpg';
import yeezusStreet from '../../assets/stories/covers/yeezus-street-full.jpg';

// Column of personal, unofficial work, written from Sigve Tillier's notes on each piece.
// Layout: each record gets a square pair (artwork and mockup, sides alternating); Skeleton Tree closes on a full-width scene.
// The Yeezus street mockup opens the column (hero and front page) and closes it, full width.
export const covers: Story = {
  slug: 'covers',
  section: 'Column',
  title: 'Covers',
  standfirst:
    'Four records Sigve Tillier keeps returning to, covered the way a musician covers a song: faithful to the original, but in his own hand.',
  client: 'Personal work',
  year: 2025,
  page: 60,
  tone: '#1a1717',
  imageLabel: 'Covers — bootleg sleeves and a poster',
  hero: { src: yeezusStreet, alt: 'The unofficial Yeezus poster in a street frame on a concrete wall, beside a sign reading Yeezus Walk SE13' },
  coverImage: { src: yeezusStreet, alt: 'The unofficial Yeezus poster in a street frame on a concrete wall' },

  details: [
    { label: 'Type', value: 'Personal, unofficial work' },
    { label: 'Year', value: '2025' },
    { label: 'Scope', value: 'Bootleg album covers, poster' },
  ],

  intro: [
    'A cover is often an homage, and such is the case with these reinterpretations of imagery representative of four different albums. The heart of the art is sought, and attempted communicated in these covers of covers; as well as a poster that depicts Kanye West as he describes himself on the record: a god. Drake’s Care Package is an ode to himself, but also depicts him asking himself whether his best days are behind him, while Nick Cave tries going forward on Skeleton Tree, not quite sure how to. Travis is everywhere on Utopia, as apparently utopia can be anywhere, but the cover of his cover is rooted in the Circus Maximus.',
    'None of it is official, and none of it is affiliated with the artists or their labels. They are bootlegs, so they are dressed as bootlegs: aged print, creased paper, barcodes where they don’t belong.',
  ],

  blocks: [
    {
      type: 'text',
      kicker: 'Utopia — Travis Scott, 2023',
      paragraphs: [
        'For the Circus Maximus Tour that followed Utopia, Travis Scott designed a series of football jerseys covered in aged blackletter, at times worn almost past recognition, with text flipped, mirrored, turned upside down and smudged. This sleeve starts there.',
        'Travis’s Utopia logos and his Cactus Jack marks run across it, the main one on the record itself, seen through the circular opening in the sleeve. The brown is a colour native to his designs, taken deep and dark to echo the original cover: black, with his dark body falling through space.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: utopia, alt: 'The Utopia bootleg sleeve', ratio: '1 / 1' },
        { src: utopiaCrate, alt: 'The Utopia bootleg in a record-store crate, its label showing through the sleeve’s die-cut hole', ratio: '1 / 1' },
      ],
    },
    {
      type: 'text',
      kicker: 'Care Package — Drake, 2019',
      paragraphs: [
        'Care Package gathers Drake’s worst-kept secrets: odds and ends originally released between 2010 and 2016, the golden years of his creativity, packaged up in 2019. This version has him looking back at himself, pondering his own reflection.',
        'Elements from the original cover are recycled: the title on the spine is set in the original’s chrome type, and chrome carries over to the front, where blackletter spells out the record’s title. Like any good bootleg, it comes as a cassette, with aged print and creased paper.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: carePackageDeck, alt: 'The Care Package cassette standing in front of a tape deck', ratio: '1 / 1' },
        { src: carePackage, alt: 'The Care Package bootleg, laid out like a cassette J-card', ratio: '1 / 1' },
      ],
    },
    {
      type: 'text',
      kicker: 'Skeleton Tree — Nick Cave & The Bad Seeds, 2016',
      paragraphs: [
        'A close friend’s favourite record, and perhaps the best of Nick Cave’s work. The original cover is muted to the bone: black, with type in neon green. That scheme carries over here, most visibly along the sleeve’s edge.',
        'A barcode on the record label, seen through the sleeve, marks it as a bootleg and sits well with the Bad Seed Ltd tag. The Nick Cave & The Bad Seeds lettering is perhaps a little too seductive for this particular record, but fits the band’s catalogue as a whole. Blurred behind it all, Cave himself, cigarette in hand, wondering how he is supposed to go on.',
      ],
    },
    {
      type: 'pair',
      figures: [
        { src: skeletonTree, alt: 'The Skeleton Tree bootleg sleeve, a record label over a blurred hand holding a cigarette', ratio: '1 / 1' },
        { src: skeletonTreeTurntable, alt: 'The Skeleton Tree label on the record, around the turntable spindle', ratio: '1 / 1' },
      ],
    },
    { type: 'full', bleed: true, figure: { src: skeletonTreeSleeve, alt: 'The Skeleton Tree bootleg in a worn plastic outer sleeve, on top of a stack of records', ratio: '3 / 2' } },
    {
      type: 'text',
      kicker: 'Yeezus — Kanye West, 2013',
      paragraphs: [
        'Possibly Kanye West’s best record, and inseparable from the interview he gave Zane Lowe the year it came out, in which he declared himself a god, as he does again and again on the album. On tour, he performed on a stage built like the mountain where Moses received the commandments, his face veiled by masks made in collaboration with Maison Margiela, lifted by angels and blessed by a figure taken to be Jesus.',
        'The poster shows both of the ways he sees himself. As a god, the letters of Yeezus form a halo around his head, reminiscent of Christ and the Virgin Mary in religious art; and as a man kneeling below, humble before God. The verse along the top says the same.',
      ],
    },
    {
      type: 'quote',
      text: 'I have said, Ye are gods; and all of you are children of the most High.',
      cite: 'Psalm 82:6',
    },
    {
      type: 'text',
      paragraphs: [
        'There is something haunting about it, too. Kanye is depicted as a god, but might as well be the devil on a record where he appears enraged, at times tormented. The music’s rough edges bleed into the aesthetic, and overlain are scratches and dirt reminiscent of the record’s murky sound. At times, though, beautiful vocals, choirs and composition take over from the blunt, industrial production. The design communicates this quality in the faded, flowing script reading “side A” and “side B”.',
      ],
    },
    { type: 'full', narrow: true, figure: { src: yeezus, alt: 'The unofficial Yeezus poster: a masked figure under a halo of letters, a smaller figure kneeling below', ratio: '634 / 848' } },
    { type: 'full', bleed: true, figure: { src: yeezusStreet, alt: 'The Yeezus poster in a street frame on a concrete wall, beside a sign reading Yeezus Walk SE13' } },
  ],

  credits: [{ label: 'Design', value: 'Sigve Tillier' }],
};
