import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_ef9e10b7.mjs';
import { $ as $$BaseLayout, g as getCollection } from './__e2d2d7c5.mjs';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                           */
function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "! Thank you for visiting!"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "New Greeting"
    })]
  });
}

const $$Astro$1 = createAstro("https://remarkable-fairy-a9040b.netlify.app/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>My awesome blog subtitle</h2> ${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": [
    "Hej",
    "Hallo",
    "Hola",
    "Habari",
    "Hi",
    "Hello",
    "Howdy",
    "Hey there"
  ], "client:component-hydration": "load", "client:component-path": "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/components/Greeting", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://remarkable-fairy-a9040b.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("posts");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy>${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a></p>`)}</div>` })}`;
}, "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
