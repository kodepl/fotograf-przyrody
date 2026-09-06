import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import site, { habitatSlug } from "../site.config";
const origin = "https://www.fotograf-przyrody.pl";
export const GET: APIRoute = async () => {
  const posts = await getCollection("kadry");
  const pages = ["/", "/kadry/", "/siedliska/", "/o-autorze/", "/kontakt/", "/polityka-prywatnosci/", "/regulamin/"];
  const urls = [
    ...pages.map((p) => `${origin}${p}`),
    ...site.habitats.map((h) => `${origin}/siedliska/${habitatSlug(h.name)}/`),
    ...posts.map((p) => `${origin}/kadry/${p.slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
