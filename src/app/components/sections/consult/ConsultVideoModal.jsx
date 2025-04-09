"use client";

import { Box, Button, Dialog, Paper } from "@mui/material";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function FullConsultVideoDialog({ video }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Paper
        elevation={6}
        id="poster"
        onClick={handleOpen}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <Box
          component="img"
          src={video.poster}
          alt={video.alt}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "16px",
          }}
        />
        <Button
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "primary.main",
            color: "#fff",
            borderRadius: "50%",
            padding: "12px",
            minWidth: "64px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "translate(-50%, -50%) scale(1.1)",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
            },
          }}
        >
          <FaPlay style={{ fontSize: "24px" }} />
        </Button>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        sx={{
          "& .MuiDialog-container": {
            height: "auto",
          },
          "& .MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
            p: 0,
            height: "100vh",
            width: "100%",
            m: 0,
          },
        }}
      >
        <iframe
          src={video.src}
          poster={video.poster}
          alt={video.alt}
          width="100%"
          height="100vh"
          style={{ border: "none", height: "100vh", width: "100%" }}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Button
          startIcon={<IoClose />}
          variant="contained"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "16px",
            left: "16px",
            backgroundColor: "primary.main",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          اغلاق
        </Button>
      </Dialog>
    </>
  );
}
