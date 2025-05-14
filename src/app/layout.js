import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import MUIContextProvider from "./providers/MUIContext";
import { consultLink, name } from "./main-data";
import DotsLoader from "./components/ui/loaders/DotsLoading";

const noto = Noto_Kufi_Arabic({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata = {
  title: "المهندس أحمد المبيض | تصاميم داخلية راقية وعصرية",
  description: `المهندس أحمد المبيض يقدم تصاميم داخلية فاخرة تلبي مختلف الأذواق وتراعي احتياجات المساحات السكنية الحديثة. خبرة في تصميم المجالس، غرف المعيشة، المداخل، والحمامات باستخدام أجود المواد مثل الجبس، الرخام، والخشب. اكتشف كيف يحول المساحات الصغيرة إلى أماكن أنيقة وعملية.`,
  keywords: `المهندس أحمد المبيض، تصميم داخلي، تصميم منازل، ديكورات فاخرة، مهندس معماري، تصميم فلل، ديكور عصري، تصميم مجالس، جبس، رخام، مداخل فخمة، غرف معيشة، حلول تصميم عملية، الإمارات`,
  openGraph: {
    title: "المهندس أحمد المبيض | حلول تصميم داخلي فاخرة للمنازل",
    description:
      "اكتشف أفكار تصميم داخلية أنيقة ومبتكرة مع المهندس أحمد المبيض، المتخصص في تحويل المساحات السكنية إلى أماكن مريحة وراقية. خبرة واسعة في تصميم الفلل والمجالس والمداخل.",
    image: "/about/personal.jpeg", // يمكنك تحديث الصورة لاحقًا لو عندك صورة أحدث من إنستغرام
    url: "https://ahmadmobayed.com", // عدّل الرابط حسب صفحتك
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <MUIContextProvider>
        <body className={noto.className}>
          <DotsLoader />

          {children}
        </body>
      </MUIContextProvider>
    </html>
  );
}
