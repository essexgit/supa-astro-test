import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_a3ebb807.mjs';

const html = "<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>";

				const frontmatter = {"title":"My Second Blog Post","pubDate":"2022-07-08T00:00:00.000Z","description":"After learning some Astro, I couldn't stop!","author":"Astro Learner","image":{"url":"https://docs.astro.build/assets/arc.webp","alt":"Thumbnail of Astro arcs."},"tags":["astro","blogging","learning in public","successes"]};
				const file = "C:/Users/ralph/Desktop/WebFigTst/Javascript_Course/supa-astro-test/src/content/posts/post-2.md";
				const url = undefined;
				function rawContent() {
					return "\r\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
