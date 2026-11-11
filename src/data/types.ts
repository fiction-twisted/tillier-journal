// Content model for Tillier Journal. Each type maps to a future Sanity schema:
// Story → document, Block → array member of story.blocks, Figure → image object.
import type { ImageMetadata } from 'astro';

export type Figure = {
  src: ImageMetadata;
  alt: string;
  caption?: string;
  /** 'contain' keeps the whole artwork visible on a coloured field (logos, posters) */
  fit?: 'cover' | 'contain';
  /** background behind a 'contain' figure; a theme token name or any CSS colour */
  bg?: string;
  /** override the module's default box ratio, e.g. '16 / 9' for screens */
  ratio?: string;
};

export type Block =
  | { type: 'full'; figure: Figure; bleed?: boolean } // one image, full width (bleed = edge to edge)
  | { type: 'pair'; figures: [Figure, Figure] } // two side by side
  | { type: 'trio'; figures: [Figure, Figure, Figure] } // three in a row
  | { type: 'feature'; large: Figure; small: Figure; flip?: boolean } // one large + one small
  | { type: 'site'; url: string; label: string } // live website in a browser window
  | { type: 'text'; kicker?: string; paragraphs: string[] }
  | { type: 'quote'; text: string }
  | { type: 'typefaces'; faces: Typeface[] } // the identity's type, set live
  | { type: 'palette'; colors: string[] }; // names from story.theme.colors

export type Typeface = {
  name: string;
  role: string;
  /** CSS font-family stack */
  family: string;
  weight?: number;
  italic?: boolean;
  sample: string;
};

export type StoryTheme = {
  /** colours lifted from the project's own identity */
  colors: Record<string, string>;
  accent: string;
  headingFont?: string;
  bodyFont?: string;
};

export type Story = {
  slug: string;
  section: string;
  title: string;
  standfirst: string;
  client: string;
  year: number;
  page: number;
  tone: string; // placeholder image colour until real images arrive
  imageLabel: string;
  hero?: Figure;
  /** image for the story's slot on the front page (defaults to hero) */
  coverImage?: Figure;
  theme?: StoryTheme;
  details?: { label: string; value: string }[];
  intro?: string[];
  blocks?: Block[];
  credits?: { label: string; value: string }[];
};
