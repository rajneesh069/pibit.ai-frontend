import { Box, Divider, Typography } from "@mui/material";
import YCombinatorIcon from "../icons/YCombinatorIcon";
import WhoWeWorkWith from "./WhoWeWorkWith";
import TextBanner from "./TextBanner";
import Banner from "./Banner";
import {
  HeroBannerContent,
  LossInefficienciesContent1,
  LossInefficienciesContent2,
  technology,
  WhatMakesUsUniqueContent,
} from "../data/content";
import { useEffect, useState } from "react";
import FeatureCard1 from "./FeatureCardType1.tsx";
import HowItWorks from "./HowItWorks.tsx";
import FeatureCardType2 from "./FeatureCardType2.tsx";
import CustomerReviews from "./CustomerReviews.tsx";

export default function Landing() {
  const [order, setOrder] = useState(window.innerWidth < 1024 ? 0 : 1);

  useEffect(() => {
    const handleResize = () => {
      setOrder(window.innerWidth < 1024 ? 0 : 1);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      alignItems={"center"}
      border={"2px solid white"}
      justifyContent={"center"}
      marginTop={"64px"}
    >
      {/* Hero Banner */}
      <Banner
        bookADemo={true}
        contactUs={true}
        title={HeroBannerContent.title}
        subtitle={HeroBannerContent.subtitle}
        imageURL="/images/banner-image.png"
      />

      {/* Backed By Y combinator */}
      <Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: { md: 18, xs: 14 },
          }}
        >
          Backed by&nbsp; <YCombinatorIcon />
          &nbsp;Combinator
        </Typography>
      </Box>

      {/* Feature Cards */}
      <Box display={"flex"} gap={1} flexDirection={{ xs: "column", md: "row" }}>
        <FeatureCard1
          src="/images/cost-saving.svg"
          heading="100%"
          content="Submission Handling"
        />
        <FeatureCard1
          src="/images/productivity-inclusive.svg"
          heading="5X"
          content="Underwriting Productivity Increase"
        />
        <FeatureCard1
          src="/images/reduced-ratio.svg"
          heading="06%"
          content="Reduced Loss Ratio"
        />
      </Box>
      <Divider />

      {/* Who We Work With */}
      <Box>
        <WhoWeWorkWith />
      </Box>
      <Divider />

      {/* Text Banner */}
      <Box>
        <TextBanner
          top={4}
          order={1}
          heading="Transforming Loss Run Into Actionable Insights"
          body="Making Commercial Underwriting Efficient"
        />
      </Box>

      {/* Banner 1 */}
      <Box>
        <Banner
          bookADemo={true}
          contactUs={false}
          title={LossInefficienciesContent1.title}
          subtitle={LossInefficienciesContent1.subtitle}
          imageURL="/images/underwriting-inefficiences.png"
          imageWidth={"65%"}
          gap={150}
          upperSubTitle="Streamlining Loss Run Extraction"
        />
      </Box>
      {/* Banner 2 */}
      <Box>
        <Banner
          bookADemo={true}
          contactUs={false}
          title={LossInefficienciesContent2.title}
          subtitle={LossInefficienciesContent2.subtitle}
          imageURL="/images/Get-Quick-Loss-Run-Insights.png"
          imageWidth={"65%"}
          gap={150}
          order={order}
          upperSubTitle="Loss Run Analytics"
        />
      </Box>

      {/* Data Extraction Process Banner */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={3}
      >
        <TextBanner
          order={1}
          top={2}
          heading="How it Works?"
          body="Data Extraction Process"
        />
        <Box maxWidth={"87vw"}>
          <HowItWorks />
        </Box>
      </Box>

      {/* Our Features Section */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <TextBanner
          order={1}
          top={2}
          heading="What Makes Us Unique"
          body="Our Features"
        />
        <Box
          padding={2}
          display={{ xs: "flex", md: "grid" }}
          flexDirection={"column"}
          gap={2}
          sx={{ gridTemplateRows: "1fr 1fr", gridTemplateColumns: "1fr 1fr" }}
        >
          {WhatMakesUsUniqueContent.map((el) => (
            <Box>
              <FeatureCardType2
                key={el.alt}
                alt={el.alt}
                body={el.body}
                heading={el.heading}
                src={el.src}
                width={el.width}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Our Technology */}
      <Box marginTop={1}>
        <Banner
          imageURL="/images/technology.png"
          bookADemo={false}
          learnMore={true}
          contactUs={false}
          subtitle={technology.subtitle}
          title={technology.title}
          upperSubTitle="AI-powered, 100% Accuracy!"
        />
      </Box>

      {/* What Our Customers Say */}
      <Box>
        <CustomerReviews />
      </Box>
    </Box>
  );
}
