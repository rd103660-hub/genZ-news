import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genznewshindi.in"),
  title: {
    default: "GenZ News - ताज़ा हिंदी खबरें",
    template: "%s | GenZ News",
  },
  description:
    "GenZ News पर पढ़ें भारत, खेल, टेक, मनोरंजन, बिज़नेस और दुनिया की ताज़ा खबरें हिंदी में।",
  applicationName: "GenZ News",
  openGraph: {
    type: "website",
    siteName: "GenZ News",
    locale: "hi_IN",
    url: "https://genznewshindi.in",
    title: "GenZ News - ताज़ा हिंदी खबरें",
    description:
      "भारत, खेल, टेक, मनोरंजन, बिज़नेस और दुनिया की ताज़ा खबरें हिंदी में।",
    images: ["/pehli-khabar.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenZ News - ताज़ा हिंदी खबरें",
    description:
      "भारत, खेल, टेक, मनोरंजन, बिज़नेस और दुनिया की ताज़ा खबरें हिंदी में।",
    images: ["/pehli-khabar.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
