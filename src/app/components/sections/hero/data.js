import { consultLink, name } from "@/app/main-data";

export const heroData = {
  title: {
    firstLine: "الموقع الرسمي",
    secondLine: "للمهندس",
  },
  subTitle: name,
  description:
    "موقع رائد الاعمال هو موقع يهدف الى تقديم المعلومات والموارد اللازمة لدعم رواد الاعمال في مسيرتهم نحو النجاح.",
  video: {
    src: "https://www.youtube.com/embed/JJu5kw5pgm4?si=6UPeto1wOBVtRj-Q",
  },
  action: {
    text: "سجل لاستشاره معي",
    url: consultLink,
  },
  background: {
    src: "/hero/background.svg",
    alt: ` الموقع الرسمي لرائد الاعمال ${name}`,
  },
};
