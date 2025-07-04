import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { consultLink, enName, name } from "../main-data";

export const navbarTranslations = {
  ar: {
    designerName: name,
    navItems: [
      { label: "الرئيسية", sectionId: "hero" },
      {
        label: "اسئلة حول استشارات التصميم الداخلي",
        sectionId: "consult-questions",
      },
      { label: "ما الذي سوف اتعلمه", sectionId: "consult" },
      {
        label: "مراحل استشارات المشاريع والفنادق",
        sectionId: "consult-level",
      },
      { label: "ما هي النتائج المتوقعه", sectionId: "results" },
      { label: "اراء بعض المشاركين", sectionId: "testmonilas" },
      { label: "الأسئلة الشائعة", sectionId: "faq" },
      { label: `عن ${name}`, sectionId: "about" },
    ],
  },
  en: {
    designerName: enName,
    navItems: [
      { label: "Home", sectionId: "hero" },
      {
        label: "Questions About Interior Design Consultations",
        sectionId: "consult-questions",
      },
      { label: "What Will I Learn", sectionId: "consult" },
      {
        label: "Project and Hotel Consultation Stages",
        sectionId: "consult-level",
      },
      { label: "Expected Results", sectionId: "results" },
      { label: "Participant Testimonials", sectionId: "testmonilas" },
      { label: "FAQs", sectionId: "faq" },
      { label: `About ${enName}`, sectionId: "about" },
    ],
  },
};

export const footerTranslations = {
  ar: {
    name: "أحمد المبيض",
    location: "دبي / أبراج دونا 2308",
    mapUrl:
      "https://maps.app.goo.gl/SRyUWLH7F5nNAycg8?g_st=com.google.maps.preview.copy",
    rights: "جميع الحقوق محفوظة © 2025 أحمد المبيض",
    madeWith: "صنع بحب بواسطة",
    developerName: "AbdallaMon",
    developerLink: "https://mostaql.com/u/Abdallamy",
  },
  en: {
    name: "Ahmad Almobayed",
    location: "Dubai / Donna Towers 2308",
    rights: "All rights reserved © 2025 Ahmad Almobayed",
    madeWith: "Made with love by",
    developerName: "AbdallaMon",
    developerLink: "https://mostaql.com/u/Abdallamy",
  },
};

export const metaTranslations = {
  en: {
    title: "Eng. Ahmad Almobayed | Luxury Home Designs",
    description: `Eng. Ahmad Almobayed, founder of Dream Studio for Interior Design, offers luxury home designs and unique interiors that blend elegance, comfort, and sophistication. With extensive experience in designing and executing residential and commercial projects to the highest standards. Book your consultation now through our website ${consultLink}`,
    keywords: `Eng. Ahmad Almobayed, Dream Studio, Interior Design, Home Design, Home Furniture, Luxury Interiors, Architect, Villa Design, Modern Decor, ${name}, Professional Execution, Creative Touches, High-Quality Materials, Space Design, Housing Solutions`,
    openGraph: {
      title: "Dream Studio | Luxury Home Designs by Eng. Ahmad Almobayed",
      description:
        "Dream Studio, led by Eng. Ahmad Almobayed, offers luxury interior designs and innovative housing solutions that combine elegance, luxury, and functionality. Over 15 years of experience in designing and executing residential and commercial projects.",
      image: "https://eng.ahmadmobayed.com/about/personal.jpeg",
      url: "https://engahmadmobayed.com/",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    twitter: {
      card: "summary_large_image",
      title: "Dream Studio | Luxury Home Designs by Eng. Ahmad Almobayed",
      description:
        "Transforming visions into luxurious and elegant living spaces.",
      images: ["https://eng.ahmadmobayed.com/about/personal.jpeg"],
    },
  },
  ar: {
    title: "المهندس أحمد المبيض | تصاميم منازل فاخرة",
    description: `المهندس أحمد المبيض، مؤسس دريم ستوديو للتصميم الداخلي، يقدم تصاميم منازل فاخرة وديكورات داخلية مميزة تجمع بين الأناقة والرفاهية والراحة. خبرة واسعة في تصميم وتنفيذ مشاريع سكنية وتجارية بأعلى المعايير. احجز استشارتك الآن من خلال زيارة موقعنا ${consultLink}`,
    keywords: `المهندس أحمد المبيض، دريم ستوديو، تصميم داخلي، تصميم منازل، أثاث منزلي، ديكورات فاخرة، مهندس معماري، تصميم فلل، ديكور عصري، ${name}، تنفيذ احترافي، لمسات إبداعية، مواد عالية الجودة، تصميم مساحات، حلول سكنية`,
    openGraph: {
      title: "دريم ستوديو | تصاميم منازل فاخرة بإدارة المهندس أحمد المبيض",
      description:
        "دريم ستوديو بإدارة المهندس أحمد المبيض يقدم تصاميم داخلية فاخرة وحلول سكنية مبتكرة تجمع بين الأناقة والرفاهية والوظيفية. خبرة أكثر من 15 عاماً في تصميم وتنفيذ المشاريع السكنية والتجارية.",
      image: "https://eng.ahmadmobayed.com/about/personal.jpeg",
      url: "https://engahmadmobayed.com/",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    twitter: {
      card: "summary_large_image",
      title: "دريم ستوديو | تصاميم منازل فاخرة بإدارة المهندس أحمد المبيض",
      description: "تحويل الرؤى إلى مساحات معيشة فاخرة وأنيقة.",
      images: ["https://eng.ahmadmobayed.com/about/personal.jpeg"],
    },
  },
};

export const socialLinks = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/eng.ahmad_almobayed/?hl=ar",
  },
  {
    icon: FaTiktok,
    link: "https://www.tiktok.com/@ahmadmobayed",
  },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/@ahmadalmobayed",
  },
  {
    icon: FaWhatsapp,
    link: "https://wa.me/971585564778",
  },
];
