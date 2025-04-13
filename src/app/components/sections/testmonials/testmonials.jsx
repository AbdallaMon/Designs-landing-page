"use client";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { FaQuoteRight } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { testimonialsData } from "./data";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import colors from "@/app/helpers/colors";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";

// Testimonial Card Component
const TestimonialCard = ({ testimonial, isMobile }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: isMobile ? "100%" : 400,
        height: isMobile ? "auto" : 280,
        position: "relative",
        overflow: "visible",
        mx: "auto",
        my: 5,
        p: 3,
        pt: 5,
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        backgroundColor: "secondary.main",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.primary.main,
          width: 48,
          height: 48,
          borderRadius: "50%",
          color: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <FaQuoteRight size={20} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <Avatar
          src={testimonial.avatar}
          alt={testimonial.name}
          sx={{
            width: 72,
            height: 72,
            border: `3px solid ${theme.palette.primary.light}`,
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            "& .MuiAvatar-img": {
              objectPosition: "top",
            },
          }}
        />
        <Box textAlign="center">
          <Typography
            variant="h6"
            component="div"
            fontWeight="bold"
            sx={{ color: theme.palette.text.primary }}
          >
            {testimonial.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            {testimonial.location}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="body1"
        align="center"
        sx={{
          fontStyle: "italic",
          color: theme.palette.text.primary,
          lineHeight: 1.7,
          display: "-webkit-box",
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
        }}
      >
        "{testimonial.review}"
      </Typography>
    </Box>
  );
};

// Main component using Swiper.js
export function TestimonialSwiper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="testmonilas"
      sx={{
        width: "100%",
        pb: 8,
        pt: 4,
        overflow: "hidden",
        backgroundColor: "background.default",
        "& .swiper-pagination-bullet": {
          background: colors.primary,
          width: 14,
          height: 14,
        },
      }}
    >
      <TitleWithSubTitle
        title={testimonialsData.title}
        subTitle={testimonialsData.subTitle}
        titleColor="primary.main"
      />
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{
          paddingBottom: "40px",
        }}
      >
        {testimonialsData.slides.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                px: isMobile ? 1 : 3,
              }}
            >
              <TestimonialCard testimonial={item} isMobile={isMobile} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

// Add this CSS to your global styles or component
/* 
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  background: var(--mui-palette-primary-main);
  transform: scale(1.2);
}
*/
