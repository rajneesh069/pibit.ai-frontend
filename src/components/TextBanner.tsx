import { Box, Typography } from "@mui/material";

interface TextBannerProps {
  heading: string;
  body: string;
  top: string | number;
  order?: 0 | 1;
}

function TextBanner({ heading, body, top=0, order = 0 }: TextBannerProps) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1} marginTop={top}>
      <Typography variant={order === 0 ? "h2" : "h6"} textAlign={"center"}>
        {order === 0 ? heading : body}
      </Typography>
      <Typography textAlign={"center"} variant={order === 0 ? "h6" : "h3"}>
        {order === 0 ? body : heading}
      </Typography>
    </Box>
  );
}

export default TextBanner;
