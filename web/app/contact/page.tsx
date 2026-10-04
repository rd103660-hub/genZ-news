import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_NAME, SITE_EMAIL } from "../../lib/site";

export const metadata = { title: `संपर्क करें` };

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="mb-4 border-l-4 border-red-600 pl-2 text-2xl font-bold">संपर्क करें</h1>
        <div className="space-y-4 text-lg leading-8">
          <p>खबर भेजनी हो, सुझाव देना हो या किसी खबर में सुधार बताना हो, तो हमें ईमेल करें:</p>
          <p className="font-bold">
            <a href={`mailto:${SITE_EMAIL}`} className="text-red-600">{SITE_EMAIL}</a>
          </p>
          <p>हम आपके संदेश का जवाब जल्द से जल्द देने की कोशिश करेंगे।</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
