import colors from "@/app/helpers/colors";
import { Box, Typography } from "@mui/material";
export function TitleWithSubTitle({
  title,
  subTitle,
  titleColor = colors.primaryMatched,
}) {
  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        color={titleColor}
        fontSize={32}
        fontWeight={700}
      >
        {title.firstLine}
        {title.firstLine.secondLin && (
          <>
            <br />
            {title.secondLine}
          </>
        )}
      </Typography>
      <Typography
        variant="h3"
        color={colors.secondaryText}
        fontSize={32}
        fontWeight={700}
      >
        {subTitle}
      </Typography>
    </Box>
  );
}
