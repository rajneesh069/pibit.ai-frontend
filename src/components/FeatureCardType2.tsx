import { Box, Card, CardContent, Typography } from "@mui/material";

export interface FeatureCardType2Props {
  src: string;
  alt: string;
  heading: string;
  body: string;
  width?: number | string;
}

export default function FeatureCardType2({
  src,
  alt,
  heading,
  body,
  width = "100%",
}: FeatureCardType2Props) {
  return (
    <>
      <Card sx={{ borderRadius: "18px", maxWidth: 500, minWidth: 300 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {/* Image Component */}
          <Box>
            <img src={src} alt={alt} width={width} />
          </Box>

          {/* Heading */}
          <Box>
            <Typography variant="h5">{heading}</Typography>
          </Box>

          {/* Body */}
          <Box
            bgcolor={"#2E2E2E"}
            borderRadius={"16px"}
            display={"flex"}
            justifyContent={"center"}
            padding={1}
          >
            <Typography variant="subtitle1" textAlign={"center"}>
              {body}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
