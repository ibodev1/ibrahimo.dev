import { Chrome, Github, Heart, Linkedin, type LucideIcon, Twitter } from "lucide-preact";

export const SITE_TITLE = "İbrahim Ödev - @ibodev";

export const MAILTO = "mailto:me@ibrahimo.dev";

interface ListItem {
  title: string;
  url: string;
  icon: LucideIcon;
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
