import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_9ac7827a.mjs';

const _page0  = () => import('./chunks/generic_abd8be79.mjs');
const _page1  = () => import('./chunks/index_c2459c8d.mjs');
const _page2  = () => import('./chunks/dashboard_ad5ae918.mjs');
const _page3  = () => import('./chunks/register_f05b1654.mjs');
const _page4  = () => import('./chunks/rss_d77fdc84.mjs');
const _page5  = () => import('./chunks/signin_6de9b258.mjs');
const _page6  = () => import('./chunks/about_36e1d9f8.mjs');
const _page7  = () => import('./chunks/_.._40fda852.mjs');
const _page8  = () => import('./chunks/blog_ffd7324b.mjs');
const _page9  = () => import('./chunks/index_8558c725.mjs');
const _page10  = () => import('./chunks/_tag__76ba6875.mjs');
const _page11  = () => import('./chunks/callback_65e3d3f7.mjs');
const _page12  = () => import('./chunks/register_ec5e8d03.mjs');
const _page13  = () => import('./chunks/signout_d08d0f13.mjs');
const _page14  = () => import('./chunks/signin_8ca6f343.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/dashboard.astro", _page2],["src/pages/register.astro", _page3],["src/pages/rss.xml.js", _page4],["src/pages/signin.astro", _page5],["src/pages/about.astro", _page6],["src/pages/posts/[...slug].astro", _page7],["src/pages/blog.astro", _page8],["src/pages/tags/index.astro", _page9],["src/pages/tags/[tag].astro", _page10],["src/pages/api/auth/callback.ts", _page11],["src/pages/api/auth/register.ts", _page12],["src/pages/api/auth/signout.ts", _page13],["src/pages/api/auth/signin.ts", _page14]]);
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
