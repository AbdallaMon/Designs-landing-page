"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { FaQuoteRight } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import colors from "@/app/helpers/colors";
import { TitleWithSubTitle } from "../../ui/TitleWithSubTitle";
import { useMultipleScrollAnimations } from "@/app/animations/useMultipleScrollAnimations";

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
export function TestimonialContent({ testimonialsData }) {
  const animations = [
    {
      target: ".testmonials-title-wrapper h2",
      triggerId: ".testmonials-title-wrapper",
      from: {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      },
      to: {
        opacity: 1,
        y: 0,
      },
    },
    {
      target: ".testmonials-title-wrapper h3",
      triggerId: ".testmonials-title-wrapper",

      from: {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out",
      },
      to: {
        opacity: 1,
        x: 0,
      },
    },
  ];
  const testmonialRef = useMultipleScrollAnimations(animations);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="testmonilas"
      ref={testmonialRef}
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
      <div className="testmonials-title-wrapper">
        <TitleWithSubTitle
          title={testimonialsData.title}
          subTitle={testimonialsData.subTitle}
          titleColor="primary.main"
        />
      </div>
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
