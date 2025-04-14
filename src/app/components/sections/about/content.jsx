import { Box, Typography, Paper, lighten } from "@mui/material";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import colors from "@/app/helpers/colors";
import { consultLink, name } from "@/app/main-data";
export function AboutContent() {
  return (
    <Paper
      id="about"
      elevation={3}
      sx={{
        background: "Background.default",
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
              alt={`المهندس احمد صاحب موقع دريم استوديو ${consultLink}`}
              style={{
                maxWidth: "100%",
                maxHeight: 400,
                borderRadius: "12px",
                boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
              }}
            />
          </Box>

          <Box>
            <Box sx={{ textAlign: "right", direction: "rtl" }}>
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
                <div className="about-title">عن {name}</div>
              </Typography>
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
                  Ahmed Almobayed
                </Typography>
              </Box>

              <Typography
                className="about-content"
                variant="body1"
                textAlign={"left"}
                fontSize={18}
                maxWidth={{ md: "800px" }}
                mx="auto"
              >
                المهندس أحمد المبيض هو مهندس معماري متخصص في التصميم الداخلي
                وصانع محتوى بارز، تجاوزت مشاهداته على السوشيال ميديا مليار
                مشاهدة. يُعرف بتقديمه أفكارًا مبتكرة يوميًا، تجمع بين الإبداع
                العملي والجمال البصري. يمتلك شركتين رائدتين في المجال: دريم
                استديو للتصميم والتنفيذ الداخلي، وديكور ستورز المتخصصة في
                الأثاث، حيث يقدّم حلولًا فريدة ومتكاملة للمشاريع السكنية
                والتجارية. إلى جانب عمله الميداني، المهندس أحمد معتمد في تدريب
                المهندسين من عدة جهات، ومؤلف لعدد من الكتب المتخصصة في مجال
                التصميم الداخلي، مما يجعله من أبرز الأسماء في هذا القطاع.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
