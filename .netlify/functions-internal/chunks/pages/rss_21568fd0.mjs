import rss from '@astrojs/rss';
import { g as getCollection } from './__e2d2d7c5.mjs';

async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`
    })),
    customData: `<language>en-gb</language>`
  });
}

export { GET };
