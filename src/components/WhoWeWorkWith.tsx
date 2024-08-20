import { Box, Typography } from "@mui/material";

function WhoWeWorkWith() {
  return (
    <Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Typography variant="h2">Who We Work With</Typography>
        <Typography textAlign={"center"} variant="h6">
          Trusted by leading Carriers & MGAs
        </Typography>
      </Box>
      <Box>
        {/* <Carousel /> */}
      </Box>
    </Box>
  );
}

export default WhoWeWorkWith;
