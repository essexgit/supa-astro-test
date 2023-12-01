import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_ef9e10b7.mjs';
import { g as getCollection, $ as $$BaseLayout } from './__e2d2d7c5.mjs';
import { $ as $$BlogPost } from './_tag__83881290.mjs';

const $$Astro = createAstro("https://remarkable-fairy-a9040b.netlify.app/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const pageTitle = "My Astro Learning Blog";
  const allPosts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": `/posts/${post.slug}/`, "title": post.data.title })}`)} </ul> ` })} `;
}, "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/blog.astro", void 0);

const $$file = "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
