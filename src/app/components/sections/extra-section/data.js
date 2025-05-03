import colors from "@/app/helpers/colors";
import { consultLink, name } from "@/app/main-data";

export const extraSectionData = {
  cards: [
    // {
    //   title: `تبحث عن تصميمية مباشرة  مع ${name}`,
    //   description: "",
    //   colors: {
    //     background: colors.primaryGradient,
    //     color: colors.primaryMatched,
    //   },
    //   action: {
    //     text: "احجز استشارة الآن",
    //     url: consultLink,
    //   },
    // },
    {
      title: `هل ترغب في أن يصبح تصميم منزلك أو مشروعك هو الأحدث والأكثر جذبًا على السوشيال ميديا؟ هل تريد أن تزيد من قيمة مشروعك وتجذب الانتباه من خلال تصميم داخلي مميز؟`,
      description: "قم بزيارة موقـع شركتنا الأم:",
      colors: {
        background: colors.primaryGradient,
        color: colors.primaryMatched,
      },
      action: {
        text: "احجز اجتماع معي الآن",
        url: consultLink,
      },
    },
  ],
};
