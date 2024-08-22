import { Box, Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import {
  DataEncrichment,
  DataVerification,
  Delivery,
  Extraction,
  Ingestion,
} from "../data/content";
import { Analytics } from "../data/content";

const buttons: string[] = [
  "Ingestion",
  "Extraction",
  "Data Verification",
  "Data Enrichment",
  "Analytics",
  "Delivery",
];

const contentMap: Record<string, React.ReactNode> = {
  Ingestion: (
    <Banner
      title={Ingestion.title}
      subtitle={Ingestion.subtitle}
      order={0}
      imageURL="/images/ingestion.png"
      bookADemo={false}
      learnMore={true}
      contactUs={false}
      imageWidth={200}
      gap={0}
    />
  ),
  Extraction: (
    <Banner
      title={Extraction.title}
      subtitle={Extraction.subtitle}
      order={0}
      imageURL="/images/extraction.png"
      bookADemo={false}
      learnMore={true}
      contactUs={false}
      imageWidth={200}
      gap={0}
    />
  ),
  "Data Verification": (
    <Banner
      title={DataVerification.title}
      subtitle={DataVerification.subtitle}
      order={0}
      imageURL="/images/data-verification.png"
      bookADemo={false}
      learnMore={true}
      contactUs={false}
      imageWidth={200}
      gap={0}
    />
  ),
  "Data Enrichment": (
    <Banner
      title={DataEncrichment.title}
      subtitle={DataEncrichment.subtitle}
      order={0}
      imageURL="/images/data-enrichment.png"
      bookADemo={false}
      learnMore={true}
      contactUs={false}
      imageWidth={200}
      gap={0}
    />
  ),
  Analytics: (
    <Banner
      title={Analytics.title}
      subtitle={Analytics.subtitle}
      order={0}
      imageURL="/images/analytics.png"
      bookADemo={false}
      learnMore={true}
      contactUs={false}
      imageWidth={200}
      gap={0}
    />
  ),
  Delivery: (
    <Banner
      title={Delivery.title}
      subtitle={Delivery.subtitle}
      order={0}
      imageURL="/images/delivery.png"
      bookADemo={false}
      learnMore={true}
      contactUs={false}
      // imageWidth={400}
      gap={0}
    />
  ),
};

export default function HowItWorks() {
  const [buttonState, setButtonState] = useState("Ingestion");
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 1024 ? true : false
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setButtonState((prevState) => {
        const currentIndex = buttons.indexOf(prevState);
        const nextIndex = (currentIndex + 1) % buttons.length;
        return buttons[nextIndex];
      });
    }, 3000);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024 ? true : false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <Card sx={{ borderRadius: "16px" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 2,
          }}
        >
          {!isMobile && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              marginY={"auto"}
              gap={2}
            >
              {buttons.map((button) => (
                <Button
                  onClick={() => setButtonState(button)}
                  key={button}
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "#808080",
                      color: "white",
                      borderColor: "white",
                    },
                  }}
                >
                  {button}
                </Button>
              ))}
            </Box>
          )}
          <Box>{contentMap[buttonState]}</Box>
        </CardContent>
      </Card>
    </div>
  );
}
