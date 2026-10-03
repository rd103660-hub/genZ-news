import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Thumb from "../../components/Thumb";
import { articles, categoryName } from "../../../lib/data";

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

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
                  <Link href={`/article/${r.slug}`} className="font-semibold hover:underline">{r.title}</Link>
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
