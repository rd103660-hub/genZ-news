import Footer from "./components/Footer";
import Link from "next/link";
import Header from "./components/Header";
import Thumb from "./components/Thumb";
import { articles, categoryName } from "../lib/data";

export default function Home() {
  const [hero, ...rest] = articles;
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="bg-black px-4 py-2 text-sm text-white">
        <span className="mr-2 rounded bg-red-600 px-2 py-0.5 text-xs font-bold">ब्रेकिंग</span>
        <Link href={`/article/${hero.slug}`}>{hero.title}</Link>
      </div>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Link href={`/article/${hero.slug}`} className="mb-8 block">
          <Thumb
            src={hero.image}
            alt={hero.title}
            className="h-48 rounded-lg md:h-72"
            fallback="bg-gradient-to-br from-red-500 to-orange-400"
          />
          <span className="mt-3 inline-block text-xs font-bold text-red-600">{categoryName(hero.category)}</span>
          <h2 className="text-2xl font-bold leading-snug md:text-4xl">{hero.title}</h2>
          <p className="mt-2 text-gray-600">{hero.summary}</p>
        </Link>
        <h3 className="mb-4 border-l-4 border-red-600 pl-2 text-xl font-bold">ताज़ा खबरें</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {rest.map((s) => (
            <Link key={s.slug} href={`/article/${s.slug}`} className="rounded-lg border p-3">
              <Thumb src={s.image} alt={s.title} className="h-32 rounded" />
              <span className="mt-2 inline-block text-xs font-bold text-red-600">{categoryName(s.category)}</span>
              <h4 className="font-semibold leading-snug">{s.title}</h4>
              <p className="mt-1 text-sm text-gray-600">{s.summary}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
