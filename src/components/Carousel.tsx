import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const images = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
  "/images/slide4.svg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          sx={{
            display: index === currentIndex ? "block" : "none",
            width: "50px",
            height: "50px",
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </Box>
  );
};

export default Carousel;
