import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_NAME, SITE_EMAIL } from "../../lib/site";

export const metadata = { title: `गोपनीयता नीति` };

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="mb-4 border-l-4 border-red-600 pl-2 text-2xl font-bold">गोपनीयता नीति</h1>
        <div className="space-y-4 text-lg leading-8">
          <p>आखिरी अपडेट: अक्टूबर 2026</p>
          <p>{SITE_NAME} पर आपकी निजता हमारे लिए महत्वपूर्ण है। यह नीति बताती है कि हमारी वेबसाइट इस्तेमाल करने पर कौन सी जानकारी इकट्ठा हो सकती है और उसका क्या उपयोग होता है।</p>
          <h2 className="text-xl font-bold">जानकारी जो हम इकट्ठा कर सकते हैं</h2>
          <p>वेबसाइट देखते समय सामान्य तकनीकी जानकारी, जैसे ब्राउज़र का प्रकार, डिवाइस और पेज देखने की जानकारी, अपने आप दर्ज हो सकती है। हम आपसे नाम या फोन नंबर जैसी निजी जानकारी तब तक नहीं मांगते जब तक आप खुद हमें ईमेल न करें।</p>
          <h2 className="text-xl font-bold">कुकीज़</h2>
          <p>वेबसाइट को बेहतर बनाने और विज्ञापन दिखाने के लिए हम या हमारे साझेदार कुकीज़ का इस्तेमाल कर सकते हैं। आप अपने ब्राउज़र की सेटिंग से कुकीज़ बंद कर सकते हैं।</p>
          <h2 className="text-xl font-bold">तीसरे पक्ष की सेवाएं और लिंक</h2>
          <p>हमारी वेबसाइट पर दूसरी वेबसाइटों के लिंक या विज्ञापन हो सकते हैं। उन साइटों की निजता नीति पर हमारा नियंत्रण नहीं है।</p>
          <h2 className="text-xl font-bold">नीति में बदलाव</h2>
          <p>हम समय-समय पर इस नीति को बदल सकते हैं। बदलाव इसी पेज पर दिखाई देंगे।</p>
          <h2 className="text-xl font-bold">संपर्क</h2>
          <p>इस नीति के बारे में सवाल हों तो हमें ईमेल करें: <a href={`mailto:${SITE_EMAIL}`} className="font-bold text-red-600">{SITE_EMAIL}</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
