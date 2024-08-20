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
        marginBottom: 2,
        padding: 1.5,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Box>
          <img
            src={src}
            alt={alt}
            width={130}
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
