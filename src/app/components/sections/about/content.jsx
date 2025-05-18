import { Box, Typography, Paper, lighten } from "@mui/material";
import { FaInstagram, Fankedin } from "react-icons/fa";
import colors from "@/app/helpers/colors";
import { consultLink } from "@/app/main-data";
export function AboutContent({ about }) {
  return (
    <Paper
      id="about"
      elevation={3}
      sx={{
        background: "Background.default",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Box
        mx="auto"
        sx={{
          p: 0,
          position: "relative",
          maxWidth: { md: "800px", lg: "1000px" },
        }}
      >
        <Box
          sx={{
            p: 2,
            pt: 8,
            pb: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Profile Image */}
          <Box
            className="about-image"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <img
              src="/about/personal.jpeg"
              alt={`${about.title} ${consultLink}`}
              style={{
                maxWidth: "100%",
                maxHeight: 400,
                borderRadius: "12px",
                boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
              }}
            />
          </Box>

          {/* Title and Content */}
          <Box>
            <Box sx={{ textAlign: "right", direction: "rtl" }}>
              {/* Title */}
              <Typography
                className="about-title-wrapper"
                variant="h5"
                component="h1"
                gutterBottom
                color="#5E2A8E"
                fontWeight="bold"
                textAlign={"center"}
                sx={{
                  borderRadius: 20,
                  backgroundColor: lighten(colors.secondary, 0.4),
                  py: 1,
                  px: 3,
                  mb: 2,
                }}
              >
                <div className="about-title">{about.title}</div>
              </Typography>

              {/* Instagram Link */}
              <Box
                component="a"
                target="_blank"
                className="about-link"
                href="https://www.instagram.com/eng.ahmad_almobayed/?hl=ar"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                  gap: 1,
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: lighten(colors.primary, 0.4),
                  }}
                >
                  <FaInstagram size={12} color="white" />
                </Box>
                <Typography
                  variant="body1"
                  component="span"
                  color="#5E2A8E"
                  fontWeight="bold"
                  textAlign={"center"}
                  fontSize={18}
                >
                  {about.linkName}
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                className="about-content"
                variant="body1"
                textAlign={"left"}
                fontSize={18}
                maxWidth={{ md: "800px" }}
                mx="auto"
              >
                {about.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
