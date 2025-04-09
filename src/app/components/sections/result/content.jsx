import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { ActionButton } from "../../ui/ActionButton";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import { resultData } from "./data";
import { FaCheckCircle } from "react-icons/fa";

export function ResultsContent() {
  return (
    <Box
      id="results"
      sx={{
        py: 8,
        px: 2,
        bgcolor: "background.default",
      }}
    >
      <TitleWithSubTitle
        title={resultData.title}
        titleColor="primary.main"
        subTitle={resultData.subTitle}
      />
      <ResultCards results={resultData.results} />
      <ActionButton action={resultData.action} />
    </Box>
  );
}

export function ResultCards({ results }) {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {results.map((result, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Card
              elevation={2}
              sx={{
                height: "100%",
                borderRadius: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
                display: "flex",
                position: "relative",
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  color: "success.main",
                  bgcolor: "white",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              >
                <FaCheckCircle size={26} />
              </Box>

              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    whiteSpace: "pre-line",
                    lineHeight: 1.7,
                  }}
                >
                  {result}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
