import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface CardProps {
  src: string;
  alt?: string;
  heading: string;
  content: string;
}

export default function CustomCard({ src, alt, heading, content }: CardProps) {
  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: 300,
        minHeight: 180,
        marginBottom: { xs: 0, md: 2 },
        padding: 1.5,
        background: `
          linear-gradient(to bottom, #242424, #000), 
          radial-gradient(circle at top left, rgba(255, 255, 255, 0.05), transparent 70%)
        `,
        backgroundBlendMode: "overlay",
        color: "white",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Box>
          <img
            src={src}
            alt={alt}
            width={80}
            height={60}
            style={{ display: "block" }}
          />
        </Box>
        <Box>
          <Typography variant="h5" paddingTop={2}>
            <span style={{ fontWeight: "bold" }}> {heading}</span>
            <br />
            {content}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
