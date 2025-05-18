import { consultLink } from "@/app/main-data";

export const consultTranslations = {
  en: {
    title: {
      firstLine: "Design and Execution Consultations",
    },
    subTitle: "Make your home your personal brand",
    action: {
      text: "Book a meeting with me now",
      link: consultLink,
    },
    video: {
      src: "https://www.youtube.com/embed/Ovh-UNeKgVQ",
      poster: "https://img.youtube.com/vi/Ovh-UNeKgVQ/maxresdefault.jpg",
      alt: `Design and Execution Consultations - Dream Studio Website ${consultLink}`,
    },
  },
  ar: {
    title: {
      firstLine: "استشارات التصميم والتنفيذ",
    },
    subTitle: "اجعل منزلك براندك الخاص",
    action: {
      text: "احجز اجتماع معي الان",
      link: consultLink,
    },
    video: {
      src: "https://www.youtube.com/embed/Ovh-UNeKgVQ",
      poster: "https://img.youtube.com/vi/Ovh-UNeKgVQ/maxresdefault.jpg",
      alt: `استشارات التصميم والتنفيذ موقع دريم استوديو ${consultLink}`,
    },
  },
};
