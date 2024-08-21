import { Box, Typography } from "@mui/material";
import Carousel from "./Carousel";

function WhoWeWorkWith() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Typography variant="h2" textAlign={"center"}>
          Who We Work With
        </Typography>
        <Typography textAlign={"center"} variant="h6">
          Trusted by leading Carriers & MGAs
        </Typography>
      </Box>
      <Box>
        <Carousel />
      </Box>
    </Box>
  );
}

export default WhoWeWorkWith;
