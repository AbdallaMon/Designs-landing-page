import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import MUIContextProvider from "./providers/MUIContext";
import { consultLink, name } from "./main-data";

const noto = Noto_Kufi_Arabic({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata = {
  title: "المهندس أحمد المبيض | تصاميم منازل فاخرة",
  description: `المهندس أحمد المبيض، مؤسس دريم ستوديو للتصميم الداخلي، يقدم تصاميم منازل فاخرة وديكورات داخلية مميزة تجمع بين الأناقة والرفاهية والراحة. خبرة واسعة في تصميم وتنفيذ مشاريع سكنية وتجارية بأعلى المعايير. احجز استشارتك الآن من خلال زيارة موقعنا ${consultLink}`,
  keywords: `المهندس أحمد المبيض، دريم ستوديو، تصميم داخلي، تصميم منازل، أثاث منزلي، ديكورات فاخرة، مهندس معماري، تصميم فلل، ديكور عصري، ${name}، تنفيذ احترافي، لمسات إبداعية، مواد عالية الجودة، تصميم مساحات، حلول سكنية`,
  openGraph: {
    title: "دريم ستوديو | تصاميم منازل فاخرة بإدارة المهندس أحمد المبيض",
    description:
      "دريم ستوديو بإدارة المهندس أحمد المبيض يقدم تصاميم داخلية فاخرة وحلول سكنية مبتكرة تجمع بين الأناقة والرفاهية والوظيفية. خبرة أكثر من 15 عاماً في تصميم وتنفيذ المشاريع السكنية والتجارية.",
    image: "/about/personal.jpeg",
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
        <body className={noto.className}>{children}</body>
      </MUIContextProvider>
    </html>
  );
}
