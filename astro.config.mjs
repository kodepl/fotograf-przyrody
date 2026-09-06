import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://www.fotograf-przyrody.pl",
  trailingSlash: "always",
  compressHTML: true,
  build: { assets: "teren" },
  markdown: { rehypePlugins: [rehypeSlug] },
  integrations: [tailwind()],
});