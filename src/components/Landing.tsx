import { Box, Button, Typography } from "@mui/material";
import { FillButton } from "./TopBar";
import { ArrowRight } from "@mui/icons-material";
import YCombinatorIcon from "../icons/YCombinatorIcon";
import CustomCard from "./CustomCard";

export default function Landing() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignItems={"center"}
    >
      {/* Banner */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-around"}
        alignContent={"center"}
        alignItems={"center"}
        marginTop={2}
      >
        <Box
          flexBasis={"500px"}
          alignSelf={"center"}
          paddingLeft={4}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <Typography variant="h3" textAlign={"center"}>
            Faster,
            <br />
            Accurate Loss Run Analysis
          </Typography>
          <Typography variant="subtitle1" textAlign={"center"}>
            Streamline your underwriting process: convert unstructured
            submission documents like ACORD and loss runs into actionable
            insights within 2 hours!
          </Typography>
          <Box display={"flex"} justifyContent={"center"} gap={2}>
            <FillButton color="inherit">
              Book A Demo
              <ArrowRight />
            </FillButton>
            <Button color="inherit" variant="outlined">
              Contact Us
            </Button>
          </Box>
        </Box>
        <Box
          style={{ width: 200 }}
          sx={{ sm: { display: "none" }, md: { display: "block" } }}
        />
        <Box
          position={"relative"}
          width={{ xs: "300px", md: "800px" }}
          height={{ height: "250px", md: 550 }}
          margin={0}
        >
          <img
            src="/images/banner-image.png"
            alt="banner image"
            width={"100%"}
            style={{
              display: "block",
              position: "absolute",
              right: 0,
              top: "0%",
              height: "100%",
            }}
          />
        </Box>
      </Box>

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
      <Box display={"flex"} gap={2} flexDirection={{ xs: "column", md: "row" }}>
        <CustomCard
          src="/images/cost-saving.svg"
          heading="100%"
          content="Submission Handling"
        />
        <CustomCard
          src="/images/productivity-inclusive.svg"
          heading="5X"
          content="Underwriting Productivity Increase"
        />
        <CustomCard
          src="/images/reduced-ratio.svg"
          heading="06%"
          content="Reduced Loss Ratio"
        />
      </Box>

      
    </Box>
  );
}
