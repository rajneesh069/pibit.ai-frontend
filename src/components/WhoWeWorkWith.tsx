import { Box } from "@mui/material";
import Carousel from "./Carousel";
import TextBanner from "./TextBanner";

function WhoWeWorkWith() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <TextBanner
        heading="Who We Work With"
        body="Trusted by leading Carriers & MGAs"
        top={0}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Carousel />
      </Box>
    </Box>
  );
}

export default WhoWeWorkWith;
