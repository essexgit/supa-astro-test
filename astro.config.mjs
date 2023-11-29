import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://remarkable-fairy-a9040b.netlify.app/",
  integrations: [preact()]
});