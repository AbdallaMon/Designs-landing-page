import { consultLink, enName, name } from "../main-data";

export const heroTranslations = {
  en: {
    title: {
      firstLine: "Official Website",
      secondLine: "of the Engineer",
    },
    subTitle: enName,
    description:
      "Raed Al-Aamal website aims to provide the necessary information and resources to support entrepreneurs on their path to success.",
    video: {
      src: "https://www.youtube.com/embed/Ovh-UNeKgVQ",
    },
    action: {
      text: "Book a meeting with me",
      url: consultLink,
    },
    background: {
      src: "/hero/background.svg",
      alt: `Official website of entrepreneur ${enName}`,
    },
  },
  ar: {
    title: {
      firstLine: "الموقع الرسمي",
      secondLine: "للمهندس",
    },
    subTitle: name,
    description:
      "موقع رائد الاعمال هو موقع يهدف الى تقديم المعلومات والموارد اللازمة لدعم رواد الاعمال في مسيرتهم نحو النجاح.",
    video: {
      src: "https://www.youtube.com/embed/Ovh-UNeKgVQ",
    },
    action: {
      text: "احجز اجتماع معي",
      url: consultLink,
    },
    background: {
      src: "/hero/background.svg",
      alt: ` الموقع الرسمي لرائد الاعمال ${name}`,
    },
  },
};
