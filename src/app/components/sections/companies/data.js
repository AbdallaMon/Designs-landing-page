import colors from "@/app/helpers/colors";
import { lighten } from "@mui/material";

export const compainiesData = [
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
];
