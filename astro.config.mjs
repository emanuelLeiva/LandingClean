import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  routing: {
    prefixDefaultLocale: false // en -> / | es  -> /es
},

  integrations: [tailwind({
  }), react()],
  output: "hybrid",
  adapter: vercel()
});