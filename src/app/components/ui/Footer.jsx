import colors from "@/app/helpers/colors";
import { Box, lighten, Typography } from "@mui/material";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Typography variant="h6" color="text.secondary" align="center">
          م.محمد الدروبي
        </Typography>
        <SocialMediaIconsLinks />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: lighten(colors.primary, 0.2),
            borderRadius: 8,
            mt: 2,
            px: 2,
            py: 1.2,
            width: "100%",
          }}
        >
          <SocialMedia icon={IoLocation} size={20} />
          العنوان: دبي, مكاتب بوابة ابن بطوطة 802
        </Box>
      </Box>
      <Box sx={{ mt: 3, py: 2, borderTop: 1, borderColor: "divider" }}>
        <Typography variant="body2" color="text.secondary" align="center">
          جميع الحقوق محفوظة © 2024 م.محمد الدروبي
        </Typography>
      </Box>
    </Box>
  );
}
export function SocialMediaIconsLinks() {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center" }}>
      <SocialMedia
        link="https://www.facebook.com/mohammad.droubi"
        icon={FaFacebookF}
      />
      <SocialMedia
        link="https://www.linkedin.com/in/mohammad-droubi"
        icon={FaLinkedin}
      />

      <SocialMedia
        link="https://www.linkedin.com/in/mohammad-droubi"
        icon={FaTiktok}
      />
      <SocialMedia
        link="https://www.instagram.com/mohammad.droubi"
        icon={FaInstagram}
      />
    </Box>
  );
}
function SocialMedia({ link, icon, size = 26 }) {
  const Icon = icon;
  return (
    <Box
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size === 20 ? 40 : 48,
        height: size === 20 ? 40 : 48,
        borderRadius: "50%",

        backgroundColor: lighten(colors.primary, 0.4),
      }}
    >
      <Icon size={size} color="white" />
    </Box>
  );
}
