import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6f3c44c9.mjs';

const _page0  = () => import('./chunks/generic_fa17ba4e.mjs');
const _page1  = () => import('./chunks/index_7e16c95d.mjs');
const _page2  = () => import('./chunks/dashboard_8ab163f2.mjs');
const _page3  = () => import('./chunks/register_82ec6d97.mjs');
const _page4  = () => import('./chunks/rss_5ce653a2.mjs');
const _page5  = () => import('./chunks/signin_d3f6885e.mjs');
const _page6  = () => import('./chunks/about_29fccc65.mjs');
const _page7  = () => import('./chunks/_.._7a4c13c9.mjs');
const _page8  = () => import('./chunks/blog_938bf424.mjs');
const _page9  = () => import('./chunks/index_69ec96bc.mjs');
const _page10  = () => import('./chunks/_tag__a64ed5e2.mjs');
const _page11  = () => import('./chunks/callback_980f749b.mjs');
const _page12  = () => import('./chunks/register_2fe1f4e8.mjs');
const _page13  = () => import('./chunks/signout_66b2648c.mjs');
const _page14  = () => import('./chunks/signin_3f241cec.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/dashboard.astro", _page2],["src/pages/register.astro", _page3],["src/pages/rss.xml.js", _page4],["src/pages/signin.astro", _page5],["src/pages/about.astro", _page6],["src/pages/posts/[...slug].astro", _page7],["src/pages/blog.astro", _page8],["src/pages/tags/index.astro", _page9],["src/pages/tags/[tag].astro", _page10],["src/pages/api/auth/callback.ts", _page11],["src/pages/api/auth/register.ts", _page12],["src/pages/api/auth/signout.ts", _page13],["src/pages/api/auth/signin.ts", _page14]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
