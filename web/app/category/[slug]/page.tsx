import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Thumb from "../../components/Thumb";
import { articles, categories } from "../../../lib/data";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();
  const list = articles.filter((a) => a.category === slug);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="mb-4 border-l-4 border-red-600 pl-2 text-2xl font-bold">{category.name}</h1>
        {list.length === 0 && <p>इस कैटेगरी में अभी कोई खबर नहीं है।</p>}
        <div className="grid gap-5 md:grid-cols-3">
          {list.map((s) => (
            <Link key={s.slug} href={`/article/${s.slug}`} className="rounded-lg border p-3">
              <Thumb src={s.image} alt={s.title} className="h-32 rounded" />
              <h2 className="mt-2 font-semibold leading-snug">{s.title}</h2>
              <p className="mt-1 text-sm text-gray-600">{s.summary}</p>
            </Link>
          ))}
        </div>
      </main>
      <footer className="bg-gray-900 py-6 text-center text-sm text-gray-400">© 2026 GenZ News</footer>
    </div>
  );
}
