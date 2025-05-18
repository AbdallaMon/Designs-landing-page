import colors from "../helpers/colors";
import { consultLink } from "../main-data";

export const extraSectionTranslations = {
  en: {
    cards: [
      // {
      //   title: `Looking for a direct design consultation with ${name}?`,
      //   description: "",
      //   colors: {
      //     background: colors.primaryGradient,
      //     color: colors.primaryMatched,
      //   },
      //   action: {
      //     text: "Book a consultation now",
      //     url: consultLink,
      //   },
      // },
      {
        title: `Do you want your home or project design to be the most trending and eye-catching on social media? Want to increase your project's value and draw attention through standout interior design?`,
        description: "Visit our parent company’s website:",
        colors: {
          background: colors.primaryGradient,
          color: colors.primaryMatched,
        },
        action: {
          text: "Book a meeting with me now",
          url: consultLink,
        },
      },
    ],
  },
  ar: {
    cards: [
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
  },
};
