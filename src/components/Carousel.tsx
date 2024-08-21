import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

export interface ImageProps {
  src: string;
  alt: string;
}

const images: ImageProps[] = [
  { src: "/images/slide1.png", alt: "tokio-marine" },
  { src: "/images/slide2.png", alt: "tokio-marine" },
  { src: "/images/slide3.png", alt: "tokio-marine" },
  { src: "/images/slide4.svg", alt: "tokio-marine" },
];

const Carousel = () => {
  const [x, setX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (!isHovered) {
        setX((x) => (x - 2) % (images.length * 320));
      }
    }, 30);
    return () => {
      clearInterval(intervalID);
    };
  }, [isHovered]);

  return (
    <Box
      height={150}
      overflow="hidden"
      width={"90vw"}
      borderRadius={"20px"}
      display={"flex"}
      padding={3}
      style={{
        boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)",
        background: "linear-gradient(145deg, #2c2c2c, #181818)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        style={{ position: "relative", left: `${x}px` }}
      >
        {images.concat(images).map(({ src, alt }, index) => (
          <motion.div
            key={index}
            onMouseOver={() => stop()}
            style={{
              height: 100,
              width: 300,
              borderRadius: "16px",
              overflow: "hidden",
              marginRight: "20px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#333",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "40%",
                height: "20%",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)",
                borderTopRightRadius: "16px",
              }}
            />
            <img width={"100%"} height={"100%"} alt={alt} src={src} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
