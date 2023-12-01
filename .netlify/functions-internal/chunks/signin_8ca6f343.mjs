export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_b26b0c3d.mjs').then(n => n.k);

export { page };
