"use client";

import { Box, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CollapsibleComponent({ title, children, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={{
        mb: 2,
        border: 1,
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
          p: 2,
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
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: "1px solid ",
          }}
        >
          {isOpen ? <FaMinus size={18} /> : <FaPlus size={18} />}
        </Box>

        <Box sx={{ color: "secondary.main" }}>
          <Typography
            variant="subtitle1"
            fontWeight="medium"
            color="secondary.main"
            sx={{
              ml: 1,
              fontSize: "1.2rem",
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
            fontSize: "1.2rem",
            width: "fit-content",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "grey.600",
          }}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse" : "Expand"}
        ></Box>
      </Box>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{ p: 2, px: 3 }}>
          <Typography
            variant="body1"
            fontWeight="regular"
            color="white"
            sx={{
              fontSize: "1.1rem",

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
