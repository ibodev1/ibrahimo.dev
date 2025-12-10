import {
  type AstroComponent,
  Chrome,
  Github,
  Heart,
  Linkedin,
  Twitter,
} from "@lucide/astro";

interface ListItem {
  title: string;
  url: string;
  icon: AstroComponent;
}

export const socialMedias: ListItem[] = [
  { title: "Github", url: "https://github.com/ibodev1", icon: Github },
  { title: "Twitter (X)", url: "https://twitter.com/ibodev1", icon: Twitter },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ibrahimodev",
    icon: Linkedin,
  },
  { title: "Google Dev", url: "https://g.dev/ibodev", icon: Chrome },
  {
    title: "Bluesky",
    url: "https://bsky.app/profile/ibrahimo.dev",
    icon: Heart,
  },
];
