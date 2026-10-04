import type { MetadataRoute } from "next";
import { articles, categories } from "../lib/data";

export const dynamic = "force-static";

const base = "https://genznewshindi.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["about", "contact", "privacy"].map((p) => ({
    url: `${base}/${p}/`,
  }));

  const cats = categories.map((c) => ({
    url: `${base}/category/${c.slug}/`,
  }));

  const news = articles.map((a) => ({
    url: `${base}/article/${a.slug}/`,
  }));

  return [{ url: `${base}/` }, ...pages, ...cats, ...news];
}
