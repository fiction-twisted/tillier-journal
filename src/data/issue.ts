// Content for issue 01. The shape mirrors the planned Sanity schema (see
// types.ts), so swapping this file for a Sanity query later should not change
// any components.
import type { Story } from './types';
import { bsk26 } from './stories/bsk26';

export type { Story };

export const issue = {
  number: '01',
  season: 'Autumn 2026',
  city: 'Bergen',
};

export const coverStory: Story = bsk26;

export const stories: Story[] = [
  {
    slug: 'diskotech',
    section: 'Nightlife',
    title: 'After Hours, Before Print',
    standfirst: 'Posters, photography and reels for a Bergen DJ collective that never sleeps.',
    client: 'Diskotech',
    year: 2026,
    page: 28,
    tone: '#5a2430',
    imageLabel: 'Diskotech — poster series',
  },
  {
    slug: 'forthcoming-1',
    section: 'Forthcoming',
    title: 'Story to Come',
    standfirst: 'Placeholder for a project Sigve will add soon.',
    client: 'To be announced',
    year: 2026,
    page: 40,
    tone: '#8c8579',
    imageLabel: 'Image to come',
  },
  {
    slug: 'forthcoming-2',
    section: 'Forthcoming',
    title: 'Another Story to Come',
    standfirst: 'Placeholder for a project Sigve will add soon.',
    client: 'To be announced',
    year: 2026,
    page: 52,
    tone: '#3f4a3c',
    imageLabel: 'Image to come',
  },
];

/** Stories with a full feature get their own page; the rest link to the cover */
export const storyHref = (s: Story) => (s.blocks ? `/stories/${s.slug}` : `/#${s.slug}`);

/** Every story in page order, used for routing and "continued on" links */
export const allStories: Story[] = [coverStory, ...stories].sort((a, b) => a.page - b.page);
