import colors from "@/app/helpers/colors";
import { name } from "@/app/main-data";
import { Box, lighten, Typography } from "@mui/material";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
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
        mx="auto"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 3,
          maxWidth: { md: "800px" },
        }}
      >
        <Typography variant="h6" color="text.secondary" align="center">
          {name}{" "}
        </Typography>
        <SocialMediaIconsLinks />
        <Box
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.app.goo.gl/SRyUWLH7F5nNAycg8?g_st=com.google.maps.preview.copy"
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
          <SocialMedia icon={IoLocation} size={20} type="div" />
          Dubai / Donna Towers 2308{" "}
        </Box>
      </Box>
      <Box sx={{ mt: 3, py: 2, borderTop: 1, borderColor: "divider" }}>
        <Typography variant="body2" color="text.secondary" align="center">
          جميع الحقوق محفوظة © 2025 {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mx: "auto",
            color: "#555",
            mt: 1,
            mb: -1,
            fontSize: "0.9rem",
            direction: "rtl",
          }}
        >
          Made with love by{" "}
          <a
            href="https://mostaql.com/u/Abdallamy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0066cc",
              marginLeft: "5px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "color 0.3s ease",
            }}
          >
            AbdallaMon
          </a>
        </Box>
      </Box>
    </Box>
  );
}
export function SocialMediaIconsLinks() {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center" }}>
      <SocialMedia
        link="https://www.instagram.com/eng.ahmad_almobayed/?hl=ar"
        icon={FaInstagram}
      />

      <SocialMedia
        link="https://www.tiktok.com/@ahmadmobayed"
        icon={FaTiktok}
      />
      <SocialMedia
        link="https://www.youtube.com/@ahmadalmobayed"
        icon={FaYoutube}
      />
    </Box>
  );
}
export function SocialMedia({ link, icon, size = 26, type = "a" }) {
  const Icon = icon;
  return (
    <Box
      component={type}
      {...(type === "a" && {
        target: "_blank",
        rel: "noopener noreferrer",
        href: link,
      })}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: size <= 20 ? 40 : 48,
        height: size <= 20 ? 40 : 48,
        borderRadius: "50%",

        backgroundColor: lighten(colors.primary, 0.4),
      }}
    >
      <Icon size={size} color="white" />
    </Box>
  );
}
