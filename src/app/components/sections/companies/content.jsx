import colors from "@/app/helpers/colors";
import { Box, Button, Grid, Typography } from "@mui/material";
import { compainiesData } from "./data";

export function CompaniesContent() {
  return (
    <Box
      sx={{ backgroundColor: "secondary.main", padding: 2, pt: 0 }}
      id="companies"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          color={colors.secondaryText}
          fontSize={40}
          fontWeight={700}
        >
          المواقع الالكترونيه لشركاتي
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        {compainiesData.map((company) => (
          <CompanyCard key={company.id} {...company} />
        ))}
      </Grid>
    </Box>
  );
}

export function CompanyCard({ logo, text, action }) {
  return (
    <Grid
      size={{ xs: 12, md: 4 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "primary.main",
        borderRadius: 4,
        width: "100%",
        pt: 4,
        pb: 3,
        px: 3,
      }}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        width={200}
        style={{ height: "auto" }}
      />
      <Typography
        variant="body1"
        color="secondary.main"
        fontSize={20}
        mb={3}
        mt={5}
      >
        {text}
      </Typography>
      <Button
        variant="contained"
        color={colors.secondaryText}
        href={action.url}
        component="a"
        sx={{
          backgroundColor: "transparent",
          position: "relative",
          boxShadow: "none",
          zIndex: 1,
          color: colors.secondaryText,
          fontSize: 20,
          fontWeight: 700,
          px: 5,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "14px",
            backgroundColor: "secondary.main",
            bottom: "8px",
            left: "0",
            borderRadius: "50px",
            zIndex: -1,
          }}
        />
        {action.text}
      </Button>
    </Grid>
  );
}
