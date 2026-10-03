import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_NAME } from "../../lib/site";

export const metadata = { title: `हमारे बारे में | ${SITE_NAME}` };

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="mb-4 border-l-4 border-red-600 pl-2 text-2xl font-bold">हमारे बारे में</h1>
        <div className="space-y-4 text-lg leading-8">
          <p>{SITE_NAME} एक हिंदी न्यूज़ वेबसाइट है, जो देश-दुनिया की ताज़ा खबरें आसान भाषा में आप तक पहुँचाती है।</p>
          <p>हमारा मकसद है कि आपको भारत, खेल, टेक, मनोरंजन, बिज़नेस और दुनिया से जुड़ी जरूरी खबरें एक ही जगह मिलें, साफ़ और भरोसेमंद अंदाज़ में।</p>
          <p>हम हर खबर को सही तरीके से पेश करने की कोशिश करते हैं। अगर किसी खबर में कोई गलती दिखे, तो कृपया हमें बताएं, हम उसे जल्द सुधारेंगे।</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
