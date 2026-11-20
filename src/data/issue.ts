// Content for issue 01. The shape mirrors the planned Sanity schema (see
// types.ts), so swapping this file for a Sanity query later should not change
// any components.
import type { Story } from './types';
import { bsk26 } from './stories/bsk26';
import { diskotech } from './stories/diskotech';
import { ymtVol5 } from './stories/ymt-vol5';
import { darligHoldning } from './stories/darlig-holdning';
import { covers } from './stories/covers';

export type { Story };

export const issue = {
  number: '01',
  season: 'Autumn 2026',
  city: 'Bergen',
  /** The subscription gift: a public Spotify playlist. Leave empty until it's curated. */
  playlist: 'https://open.spotify.com/playlist/4oC8DhRxrPBGOQcYzTCyDd',
};

export const coverStory: Story = bsk26;

export const stories: Story[] = [
  diskotech,
  ymtVol5,
  darligHoldning,
  covers,
];

/** Stories with a full feature get their own page; the rest link to the cover */
export const storyHref = (s: Story) => (s.blocks ? `/stories/${s.slug}` : `/#${s.slug}`);

/** Every story in page order, used for routing and "continued on" links */
export const allStories: Story[] = [coverStory, ...stories].sort((a, b) => a.page - b.page);

/** What Sigve Tillier did on the project, from its details (personal work falls back to design) */
export const roleOf = (s: Story) => s.details?.find((d) => d.label === 'Role')?.value ?? 'Design';
