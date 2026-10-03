import Link from "next/link";
import { SITE_NAME } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-sm text-gray-400">
      <div className="mb-2 flex flex-wrap justify-center gap-4">
        <Link href="/about">हमारे बारे में</Link>
        <Link href="/contact">संपर्क करें</Link>
        <Link href="/privacy">गोपनीयता नीति</Link>
      </div>
      <p>© 2026 {SITE_NAME}</p>
    </footer>
  );
}
