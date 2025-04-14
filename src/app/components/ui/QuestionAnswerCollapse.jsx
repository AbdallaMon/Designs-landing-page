"use client";

import {
  Box,
  Collapse,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CollapsibleComponent({ title, children, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      className="collapsable-item"
      sx={{
        mb: 2,
        border: 1,
        width: "100%", // Full width of container
        maxWidth: { md: "700px" },
        mx: "auto",
        py: 0.5,
        backgroundColor: "primary.main",
        borderColor: "grey.300",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          p: { xs: 1.5, sm: 2 }, // Smaller padding on mobile
          cursor: "pointer",
          borderRadius: isOpen ? "4px 4px 0 0" : 1,
        }}
        onClick={toggleCollapse}
      >
        <Box
          sx={{
            color: "secondary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: 24, sm: 30 }, // Smaller on mobile
            height: { xs: 24, sm: 30 },
            borderRadius: "50%",
            border: "1px solid ",
            flexShrink: 0, // Prevent shrinking
          }}
        >
          {isOpen ? (
            <FaMinus size={isMobile ? 14 : 18} />
          ) : (
            <FaPlus size={isMobile ? 14 : 18} />
          )}
        </Box>

        <Box sx={{ color: "secondary.main", flexShrink: 0 }}>
          <Typography
            variant="subtitle1"
            fontWeight="medium"
            color="secondary.main"
            sx={{
              ml: 1,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            }}
          >
            {index}
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          fontWeight="medium"
          color="secondary.main"
          sx={{
            ml: 1,
            flexGrow: 1,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            width: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: isMobile ? "normal" : "nowrap",
          }}
        >
          {title}
        </Typography>
      </Box>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{ p: { xs: 1.5, sm: 2 }, px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="body1"
            fontWeight="regular"
            color="white"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              whiteSpace: "pre-line",
            }}
          >
            {children}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
