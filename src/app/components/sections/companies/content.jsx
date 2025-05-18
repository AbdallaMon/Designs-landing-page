import colors from "@/app/helpers/colors";
import { Box, Button, Grid, Typography } from "@mui/material";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";

export function CompaniesContent({ companies }) {
  return (
    <Box
      sx={{ backgroundColor: "secondary.main", padding: 2, pt: 0 }}
      id="companies"
    >
      <Box
        className="companies-title-wrapper"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <TitleWithSubTitle
          title={{
            firstLine: companies.titleFirstLine,
          }}
          subTitle={companies.subtitle}
          titleColor={colors.textColor}
        />
      </Box>
      <Grid
        container
        spacing={2}
        mx={"auto"}
        sx={{ marginTop: 4, maxWidth: { md: "1000px" } }}
      >
        {companies.list.map((company, index) => (
          <CompanyCard
            key={company.id}
            logo={company.logo}
            text={company.text}
            action={{
              text: company.actionText,
              url: company.action.url,
            }}
          />
        ))}
      </Grid>
    </Box>
  );
}

export function CompanyCard({ logo, text, action }) {
  return (
    <Grid
      size={{ xs: 12, md: 6 }}
      className="company-card"
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
        className="company-logo"
        width={120}
        style={{
          height: "auto",
          backgroundColor: logo.backgroundColor && logo.backgroundColor,
        }}
      />
      <Typography
        variant="body1"
        className="company-text"
        color="secondary.main"
        fontSize={20}
        mb={3}
        mt={3}
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
          boxShadow: "0 0 0 !important",
          "&:hover": {
            backgroundColor: "transparent",
            boxShadow: "0 0 0 !important",
          },
        }}
      >
        <Box
          className="company-button"
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
