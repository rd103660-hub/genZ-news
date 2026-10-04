import Link from "next/link";
import { categories } from "../../lib/data";

export default function Header() {
  return (
    <header className="bg-red-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="GenZ News logo" className="h-9 w-9 rounded-md object-contain" />
          <span>GenZ News</span>
        </Link>
      </div>
      <nav className="overflow-x-auto bg-red-700">
        <ul className="mx-auto flex max-w-6xl gap-5 whitespace-nowrap px-4 py-2 text-sm font-medium">
          <li><Link href="/">होम</Link></li>
          {categories.map((c) => (
            <li key={c.slug}><Link href={`/category/${c.slug}`}>{c.name}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
