import { lighten } from "@mui/material";
import colors from "../helpers/colors";

export const companiesTranslations = {
  ar: {
    titleFirstLine: "المواقع الالكترونيه",
    subtitle: "لشركاتي",
    list: [
      {
        id: 1,
        logo: {
          src: "/logo/dream-1.png",
          alt: "دريم استديو",
        },
        text: "تصميم داخلي فاخر، تنفيذ احترافي، لمسات إبداعية، مواد عصرية.",
        action: {
          text: "دريم استديو",
          url: "https://maps.app.goo.gl/SRyUWLH7F5nNAycg8?g_st=com.google.maps.preview.copy",
        },
      },
      {
        id: 2,
        logo: {
          src: "/logo/decor.svg",
          alt: "ديكور ستورز",
          backgroundColor: lighten(colors.primary, 0.2),
        },
        text: "أثاث عصري، جودة عالية، تنوع فخم، تصميمات تلائم كل ذوق.",
        action: {
          text: "ديكور ستورز",
          url: "https://decorstores.ltd",
        },
      },
    ],
  },
  en: {
    titleFirstLine: "Websites",
    subtitle: "of My Companies",
    list: [
      {
        id: 1,
        logo: {
          src: "/logo/dream-1.png",
          alt: "Dream Studio",
        },
        text: "Luxurious interior design, professional execution, creative touches, modern materials.",
        action: {
          text: "Dream Studio",
          url: "https://maps.app.goo.gl/SRyUWLH7F5nNAycg8?g_st=com.google.maps.preview.copy",
        },
      },
      {
        id: 2,
        logo: {
          src: "/logo/decor.svg",
          alt: "Decor Stores",
          backgroundColor: lighten(colors.primary, 0.2),
        },
        text: "Modern furniture, high quality, luxurious variety, designs to suit every taste.",
        action: {
          text: "Decor Stores",
          url: "https://decorstores.ltd",
        },
      },
    ],
  },
};
