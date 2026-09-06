const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.75)}&q=80`;

const site = {
  name: "Fotograf Przyrody",
  domain: "fotograf-przyrody.pl",
  tagline: "Notatki z terenu — światło, cierpliwość i kadry, których nie da się powtórzyć w studio",
  city: "Białowieża / teren",
  address: "ul. Parkowa 3, 17-230 Białowieża",
  author: "Marek Leśny",
  authorBio: "Fotograf terenowy. Czeka na światło dłużej niż na lepszy obiektyw.",
  authorRole: "Fotograf",
  authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1441974231531-c6227db76b6e", 1800),
  covers: {
    Las: u("photo-1441974231531-c6227db76b6e"),
    Bagna: u("photo-1500534314209-a25ddb2bd429"),
    Ptaki: u("photo-1444464666168-49d633b86797"),
    Góry: u("photo-1464822759023-fed622ff2c3b"),
    Zima: u("photo-1483921020237-2ff51e8e4b22"),
    default: u("photo-1470071459604-3b5ec3a7fe05"),
  } as Record<string, string>,
  habitats: [
    { name: "Las", blurb: "Podszyt, polany i to, co dzieje się między pniami." },
    { name: "Bagna", blurb: "Mgła, woda i światło, które znika w minutę." },
    { name: "Ptaki", blurb: "Odległość, cisza i moment, którego nie da się ustawić." },
    { name: "Góry", blurb: "Wysokość, wiatr i kadry bez ścieżki turystycznej." },
    { name: "Zima", blurb: "Śnieg, ślady i baterie, które umierają szybciej." },
  ],
};

export function habitatSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(habitat?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[habitat || ""] || site.covers.default;
}

export default site;
