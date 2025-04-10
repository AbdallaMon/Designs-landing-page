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
  title: "دريم استوديو",
  description: `
دريم ستوديو تقدم تصاميم فاخرة للمنازل من الأثاث والديكورات تجمع بين الأناقة والرفاهية. 
يمكنك حجز استارة من خلال زياة موقعنا 
${consultLink}
`,
  keywords: `دريم استوديو, تصميم داخلي, أثاث منزلي, ديكور, تصميم داخلي فاخر,${name}, تنفيذ احترافي, لمسات إبداعية, مواد عصرية`,
  openGraph: {
    title: "دريم استوديو",
    description: `
دريم ستوديو تقدم تصاميم فاخرة للمنازل من الأثاث والديكورات تجمع بين الأناقة والرفاهية.
`,
    image: "/logo/dream-1.png",
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
