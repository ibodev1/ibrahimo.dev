import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const blogPosts = await getCollection('blog');
  const projects = await getCollection('projects');

  const blogItems = blogPosts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.publishDate,
    link: `/blog/${post.slug}/`,
    categories: post.data.tags
  }));

  const projectItems = projects.map((project) => ({
    title: project.data.title,
    description: project.data.description,
    pubDate: new Date(),
    link: `/projects/#${project.slug}`,
    categories: project.data.tags
  }));

  const allItems = [...blogItems, ...projectItems].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  return rss({
    title: 'Ibrahim Odev - Blog & Projects',
    description: "Ibrahim Odev's blog posts and projects",
    site: site!,
    items: allItems,
    customData: `<language>en-US</language>`
  });
};
