import type { ListItem } from '@/types';
import { Github, Twitter, Linkedin, Chrome, Heart } from 'lucide-astro';

export const SITE_TITLE = 'Ibrahim Odev - @ibodev';

export const SITE_DESCRIPTION =
  'Building high-performance web applications with Node.js, Deno, TypeScript, React, Next.js and modern technologies.';

export const SITE_IMAGE_PATH = '/background.jpg';

export const MAILTO = 'mailto:me@ibrahimo.dev';

export const socialMedias: ListItem[] = [
  { title: 'Github', url: 'https://github.com/ibodev1', icon: Github },
  { title: 'Twitter (X)', url: 'https://twitter.com/ibodev1', icon: Twitter },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ibrahimodev', icon: Linkedin },
  { title: 'Google Dev', url: 'https://g.dev/ibodev', icon: Chrome },
  { title: 'Bluesky', url: 'https://bsky.app/profile/ibrahimo.dev', icon: Heart }
];
