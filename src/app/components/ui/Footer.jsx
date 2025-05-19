import { socialLinks } from "@/app/data/utility";
import colors from "@/app/helpers/colors";
import { Box, lighten, Typography } from "@mui/material";
import { IoLocation } from "react-icons/io5";

export function Footer({ footerContent }) {
  const {
    name,
    location,
    mapUrl,
    rights,
    madeWith,
    developerName,
    developerLink,
  } = footerContent;

  return (
    <Box component="footer" sx={{ backgroundColor: "primary.main" }}>
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
          {name}
        </Typography>

        <SocialMediaIconsLinks socialLinks={socialLinks} />

        <Box
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={mapUrl}
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
          {location}
        </Box>
      </Box>

      <Box sx={{ mt: 3, py: 2, borderTop: 1, borderColor: "divider" }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {rights}
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
          }}
        >
          {madeWith}{" "}
          <a
            href={developerLink}
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
            {developerName}
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export function SocialMediaIconsLinks({ socialLinks }) {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center" }}>
      {socialLinks.map((item, index) => (
        <SocialMedia key={index} link={item.link} icon={item.icon} />
      ))}
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
