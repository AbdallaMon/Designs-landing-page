import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import DotsLoader from "../components/ui/loaders/DotsLoading";
import MUIContextProvider from "../providers/MUIContext";
import { getTranslation } from "../i18n/helpers";

const noto = Noto_Kufi_Arabic({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["arabic"],
  display: "swap",
});

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { t } = await getTranslation(resolvedParams.lng || "ar");
  const meta = t("meta", {
    returnObjects: true,
  });
  return meta;
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const lng = resolvedParams.lng;
  console.log(lng);
  return (
    <html lang={lng} dir={lng === "ar" ? "rtl" : "ltr"}>
      <MUIContextProvider lng={lng}>
        <body className={noto.className}>
          <DotsLoader />

          {children}
        </body>
      </MUIContextProvider>
    </html>
  );
}
