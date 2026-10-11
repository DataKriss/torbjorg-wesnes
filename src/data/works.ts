export interface Work {
  title: string;
  description?: string;
  year?: number;
  /** The video ID from a YouTube URL (the part after v= or youtu.be/). */
  youtubeId?: string;
  /** Full public SoundCloud track or playlist URL. */
  soundcloudUrl?: string;
}

// Add works inside this array. A work may have either player, or both.
// Example (replace with real details before uncommenting):
// {
//   title: 'Title of the piece',
//   year: 2026,
//   description: 'Instrumentation, performers, or a short note about the work.',
//   youtubeId: 'VIDEO_ID',
//   soundcloudUrl: 'https://soundcloud.com/ARTIST/TRACK',
// },
export const works: Work[] = [
  {
    title: 'YouTube player preview',
    description: 'Example video for this website draft. Will be replaced with Torbjørgs music :-D',
    youtubeId: 'M7lc1UVf-VE',
  },
];
