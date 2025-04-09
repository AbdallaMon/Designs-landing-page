import {
  Box,
  Typography,
  Grid,
  Avatar,
  Link,
  Paper,
  lighten,
} from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import { SocialMedia, SocialMediaIconsLinks } from "../../ui/Footer";
import colors from "@/app/helpers/colors";

export function About() {
  return (
    <Paper
      id="about"
      elevation={3}
      sx={{
        background: "Background.default",
      }}
    >
      <Box sx={{ p: 0, position: "relative" }}>
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
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://aldrobi.com/images/aboutme.png"
              alt="Profile"
              style={{
                width: 280,
                height: 280,
                maxWidth: "100%",
              }}
            />
          </Box>

          <Box>
            <Box sx={{ textAlign: "right", direction: "rtl" }}>
              <Typography
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
                عن م.محمد الدروبي
              </Typography>

              <Box
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                  gap: 1,
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
                  <FaLinkedin size={12} color="white" />
                </Box>
                <Typography
                  variant="body1"
                  component="span"
                  color="#5E2A8E"
                  fontWeight="bold"
                  textAlign={"center"}
                  fontSize={18}
                >
                  Mohammad-al-droubi
                </Typography>
              </Box>

              <Typography variant="body1" textAlign={"left"} fontSize={18}>
                محمد الدروبي مهندس خوارزميات ومنهدس اتصالات, حاصل على التأشيرة
                الذهبية لرواد الأعمال وأصحاب المواهب في دبي, مؤسس شركة Appers
                لخدمات الحوسبة السحابية, مؤسس لتطبيق لايفي, ومؤسس شركة شرارة
                ميديا للتسويق الرقمي الفايرال, عمل محمد الدروبي أيضا في كبرى
                الشركات التكنولوجية العالمية مثل نوكيا و إريكسون, لدى محمد خبرة
                واسعة بإطلاق وتأسيس المشاريع الStartups وقام بتأسيس أكثر من 13
                مشروع, بعضها فشل, وبعضها تم بيعه, والبعض الاّخر نجح نجاحا باهرا.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
