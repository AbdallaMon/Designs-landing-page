"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Collapse,
  IconButton,
  Paper,
  Grid,
} from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function CollapsibleStage({ stage }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper
      className="collapsable-stage"
      elevation={3}
      sx={{
        mb: 3,
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          bgcolor: "background.paper",
        }}
        onClick={handleExpandClick}
      >
        <Box>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            {stage.title}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="subtitle1" fontSize={18}>
              <strong>{stage.descritpion.bold}</strong>{" "}
              {stage.descritpion.normal}
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleExpandClick();
          }}
          sx={{
            transition: "transform 0.3s",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            width: 40,
            height: 40,
          }}
        >
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </IconButton>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ p: 3, bgcolor: "background.default" }}>
          <Grid container spacing={2}>
            {stage.details.map((detail, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    borderRadius: 2,
                    "&:hover": {
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                      {detail}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Collapse>
    </Paper>
  );
}
