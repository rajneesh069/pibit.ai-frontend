import { Box, Card, CardContent, Typography } from "@mui/material";

export interface FeatureCardType2Props {
  src: string;
  alt: string;
  heading: string;
  body: string;
}

export default function FeatureCardType2({
  src,
  alt,
  heading,
  body,
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
            <img src={src} alt={alt} />
          </Box>

          {/* Heading */}
          <Box>
            <Typography variant="h5">{heading}</Typography>
          </Box>

          {/* Body */}
          <Box>
            <Typography variant="subtitle1">{body}</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
