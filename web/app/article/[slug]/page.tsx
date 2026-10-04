import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Thumb from "../../components/Thumb";
import { articles, categoryName } from "../../../lib/data";

const SITE = "https://genznewshindi.in";

const MONTHS: Record<string, string> = {
  "जनवरी": "01",
  "फरवरी": "02",
  "फ़रवरी": "02",
  "मार्च": "03",
  "अप्रैल": "04",
  "मई": "05",
  "जून": "06",
  "जुलाई": "07",
  "अगस्त": "08",
  "सितंबर": "09",
  "सितम्बर": "09",
  "अक्टूबर": "10",
  "नवंबर": "11",
  "नवम्बर": "11",
  "दिसंबर": "12",
  "दिसम्बर": "12",
};

function toIsoDate(d: string): string | undefined {
  const parts = d.trim().split(/\s+/);
  if (parts.length !== 3) return undefined;
  const day = parts[0];
  const month = MONTHS[parts[1]];
  const year = parts[2];
  if (!month || !/^\d{1,2}$/.test(day) || !/^\d{4}$/.test(year)) return undefined;
  return `${year}-${month}-${day.padStart(2, "0")}T00:00:00+05:30`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  const url = `/article/${article.slug}/`;
  const image = article.image ?? "/logo.png";
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.summary,
      locale: "hi_IN",
      siteName: "GenZ News",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const iso = toIsoDate(article.date);
  const imageUrl = `${SITE}${article.image ?? "/logo.png"}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    image: [imageUrl],
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
    inLanguage: "hi-IN",
    mainEntityOfPage: `${SITE}/article/${article.slug}/`,
    author: { "@type": "Organization", name: "GenZ News", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "GenZ News",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <Link href={`/category/${article.category}`} className="text-xs font-bold text-red-600">
          {categoryName(article.category)}
        </Link>
        <h1 className="mt-1 text-2xl font-bold leading-snug md:text-4xl">{article.title}</h1>
        <p className="mt-2 text-sm text-gray-500">{article.date}</p>
        <div className="my-4">
          <Thumb
            src={article.image}
            alt={article.title}
            className="h-48 rounded-lg md:h-72"
            fallback="bg-gradient-to-br from-red-500 to-orange-400"
          />
        </div>
        <p className="text-lg font-medium text-gray-700">{article.summary}</p>
        <div className="mt-4 whitespace-pre-line text-lg leading-8">{article.content}</div>
        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-3 border-l-4 border-red-600 pl-2 text-xl font-bold">और खबरें</h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/article/${r.slug}`} className="font-semibold hover:underline">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
