"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { MdClose as Close } from "react-icons/md";
import { BiMenuAltRight as Menu } from "react-icons/bi";

import colors from "@/app/helpers/colors";
import { SocialMediaIconsLinks } from "./Footer";
import { name } from "@/app/main-data";

const sampleNavItems = [
  { label: "الرئيسية", sectionId: "hero" },
  {
    label: "اسئلة حول استشارات التصميم الداخلي ",
    sectionId: "consult-questions",
  },
  { label: "ما الذي سوف اتعلمه", sectionId: "consult" },

  { label: "مراحل استشارات المشاريع والفنادق", sectionId: "consult-level" },
  { label: "ما هي النتائج المتوقعه", sectionId: "results" },
  { label: "اراء بعض المشاركين", sectionId: "testmonilas" },

  { label: "الأسئلة الشائعة", sectionId: "faq" },
  { label: `عن ${name}`, sectionId: "about" },
];

const Navbar = ({
  designerName = "محمد الدروبي",
  navItems = sampleNavItems,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setDrawerOpen(false);
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        ref={navbarRef}
        sx={{
          backgroundColor: "primary.main",
          zIndex: 10,
          top: 15,
          borderRadius: 4,
          width: "calc(100% - 30px)",
          margin: "0 20px",
        }}
      >
        <Toolbar>
          <IconButton
            edge="end"
            color="primary"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{
              width: "48px",
              height: "48px",
            }}
          >
            <Menu size={28} color="white" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: colors.primaryMatched,
            }}
          >
            {designerName}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 280,
            p: 2,
            backgroundColor: "background.default",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" color="primary.main">
              {designerName}
            </Typography>
            <IconButton
              onClick={handleDrawerToggle}
              color="primary"
              aria-label="close drawer"
              sx={{
                width: "40px",
                height: "40px",
                backgroundColor: "background.default",
                borderRadius: "50%",
              }}
            >
              <Close size={22} />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
                <Button
                  fullWidth
                  onClick={() => scrollToSection(item.sectionId)}
                  sx={{
                    py: 1.2,
                    justifyContent: "flex-start",
                    fontSize: "1rem",
                    textAlign: "center",
                    backgroundColor: "primary.main",
                    color: colors.primaryMatched,
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: 20,
                  }}
                >
                  {item.label}
                </Button>
              </ListItem>
            ))}
          </List>
          <Box mt={3}>
            <SocialMediaIconsLinks />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
