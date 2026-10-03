export type Category = { slug: string; name: string };
export type Article = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  image?: string;
};

export const categories: Category[] = [
  { slug: "bharat", name: "भारत" },
  { slug: "khel", name: "खेल" },
  { slug: "tech", name: "टेक" },
  { slug: "manoranjan", name: "मनोरंजन" },
  { slug: "business", name: "बिज़नेस" },
  { slug: "duniya", name: "दुनिया" },
];

// सबसे नई खबर सबसे ऊपर रखें
export const articles: Article[] = [
  {
    slug: "genz-news-pehli-khabar",
    title: "GenZ News की पहली खबर: वेबसाइट अब लाइव",
    summary: "हमारी नई न्यूज़ वेबसाइट अब पूरी तरह तैयार है।",
    content: "यह हमारी वेबसाइट की पहली खबर है।\n\nअब हम नई खबरें जोड़ सकते हैं और वे होमपेज पर दिखाई देंगी।",
    category: "bharat",
    date: "3 अक्टूबर 2026",
    image: "/pehli-khabar.jpg",
  },.
. 
  {
    slug: "mausam-alert",
    title: "मौसम विभाग ने कई राज्यों के लिए जारी किया अलर्ट",
    summary: "अगले 48 घंटों में तेज बारिश की संभावना जताई गई है।",
    content: "मौसम विभाग ने कई राज्यों में तेज बारिश का अलर्ट जारी किया है।\n\nलोगों को सावधानी बरतने की सलाह दी गई है।",
    category: "bharat",
    date: "3 अक्टूबर 2026",
  },
  {
    slug: "khel-muqabla",
    title: "रोमांचक मुकाबले में आखिरी ओवर में तय हुआ नतीजा",
    summary: "दर्शकों ने स्टेडियम में जमकर जश्न मनाया।",
    content: "मैच का फैसला आखिरी ओवर में हुआ और स्टेडियम में दर्शकों ने खूब जश्न मनाया।",
    category: "khel",
    date: "2 अक्टूबर 2026",
  },
  {
    slug: "naya-smartphone",
    title: "नया स्मार्टफोन लॉन्च, जानिए कीमत और फीचर्स",
    summary: "कंपनी ने कई नए AI फीचर्स का दावा किया है।",
    content: "नया स्मार्टफोन बाजार में आ गया है। कंपनी के मुताबिक इसमें कई नए AI फीचर्स दिए गए हैं।",
    category: "tech",
    date: "2 अक्टूबर 2026",
  },
  {
    slug: "nayi-filmein",
    title: "इस हफ्ते सिनेमाघरों में आ रही हैं ये बड़ी फिल्में",
    summary: "दर्शकों में काफी उत्साह है।",
    content: "इस हफ्ते कई बड़ी फिल्में सिनेमाघरों में रिलीज़ हो रही हैं।",
    category: "manoranjan",
    date: "1 अक्टूबर 2026",
  },
  {
    slug: "share-bazar",
    title: "शेयर बाजार में दिनभर उतार-चढ़ाव, निवेशकों की नजर",
    summary: "विशेषज्ञों ने सतर्क रहने की सलाह दी।",
    content: "शेयर बाजार दिनभर उतार-चढ़ाव के बीच रहा। विशेषज्ञों ने निवेशकों को सतर्क रहने की सलाह दी है।",
    category: "business",
    date: "1 अक्टूबर 2026",
  },
  {
    slug: "sammelan",
    title: "अंतरराष्ट्रीय सम्मेलन में कई अहम मुद्दों पर चर्चा",
    summary: "कई देशों के प्रतिनिधि शामिल हुए।",
    content: "अंतरराष्ट्रीय सम्मेलन में कई देशों के प्रतिनिधियों ने हिस्सा लिया और अहम मुद्दों पर चर्चा की।",
    category: "duniya",
    date: "30 सितंबर 2026",
  },
];

export function categoryName(slug: string) {
  return categories.find((c) => c.slug === slug)?.name ?? "";
}
