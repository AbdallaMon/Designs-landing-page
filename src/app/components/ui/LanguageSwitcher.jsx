"use client";

import { useState } from "react";
import {
  Select,
  MenuItem,
  Box,
  Typography,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
} from "@mui/material";
import { languages } from "@/app/i18n/settings";
import React from "react";
import { MdLanguage, MdCheck } from "react-icons/md";

export default function LanguageSwitcher({ lng }) {
  const [language, setLanguage] = useState(lng);
  const theme = useTheme();

  const handleChange = (event) => {
    const newLng = event.target.value;
    setLanguage(newLng);

    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(ar|en)/, `/${newLng}`);

    window.location.href = newPath;
  };

  const getLanguageInfo = (code) => {
    switch (code) {
      case "ar":
        return { label: "العربية", native: "AR" };
      case "en":
        return { label: "English", native: "EN" };
      default:
        return {
          label: code.toUpperCase(),
          native: code.toUpperCase(),
        };
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Select
        value={language}
        onChange={handleChange}
        variant="outlined"
        size="small"
        displayEmpty
        renderValue={(selected) => {
          const info = getLanguageInfo(selected);
          return (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                  fontSize: "12px",
                }}
              >
                {info.label}
              </Typography>
            </Box>
          );
        }}
        sx={{
          minWidth: 80,
          height: 36,
          borderRadius: 2,
          "& .MuiSelect-select": {
            padding: "6px 12px",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.divider,
            borderWidth: 1,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
            borderWidth: 1,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
          "& .MuiSelect-icon": {
            color: theme.palette.text.secondary,
            right: 8,
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 2,
              mt: 0.5,
              boxShadow: theme.shadows[8],
              "& .MuiMenuItem-root": {
                borderRadius: 1,
                margin: "2px 4px",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
                "&.Mui-selected": {
                  backgroundColor: theme.palette.primary.main + "15",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main + "25",
                  },
                },
              },
            },
          },
        }}
      >
        {languages.map((l) => {
          const info = getLanguageInfo(l);
          const isSelected = l === language;

          return (
            <MenuItem
              key={l}
              value={l}
              sx={{
                py: 1.5,
                px: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: isSelected ? 600 : 400,
                        color: theme.palette.text.primary,
                        fontSize: "14px",
                      }}
                    >
                      {info.label}
                    </Typography>
                    {l !== language && (
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: "12px",
                          fontStyle: "italic",
                        }}
                      >
                        {info.native}
                      </Typography>
                    )}
                  </Box>
                }
              />

              {isSelected && (
                <MdCheck
                  size={16}
                  color={theme.palette.primary.main}
                  style={{ marginLeft: "auto" }}
                />
              )}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
}
