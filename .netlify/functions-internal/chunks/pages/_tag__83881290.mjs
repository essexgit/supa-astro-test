import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent } from '../astro_ef9e10b7.mjs';
import { g as getCollection, $ as $$BaseLayout } from './__e2d2d7c5.mjs';

const $$Astro$1 = createAstro("https://remarkable-fairy-a9040b.netlify.app/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(url, "href")}>${title}</a> </li>`;
}, "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://remarkable-fairy-a9040b.netlify.app/");
async function getStaticPaths() {
  const allPosts = await getCollection("posts");
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.data.tags).flat())
  ];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.data.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Posts tagged with ${tag}</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": `/posts/${post.slug}/`, "title": post.data.title })}`)} </ul> ` })}`;
}, "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPost as $, _tag_ as _ };
