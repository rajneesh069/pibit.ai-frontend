import { Box, Button, Typography } from "@mui/material";
import { FillButton } from "./TopBar";
import { ArrowRight } from "@mui/icons-material";
import YCombinatorIcon from "../icons/YCombinatorIcon";

export default function Landing() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      alignItems={"center"}
    >
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
            insights within 2 hours
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
          height={{ height: "200px", md: 550 }}
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
      <Box>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          Backed by&nbsp; <YCombinatorIcon />
          &nbsp;Combinator
        </Typography>
      </Box>
    </Box>
  );
}
