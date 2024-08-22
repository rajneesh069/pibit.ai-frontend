import { Box, Card, CardContent } from "@mui/material";
import TextBanner from "./TextBanner";
import { investorImageURLs } from "../data/content";

export default function InvestorCard() {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      gap={{ xs: 5, md: "15%" }}
      justifyContent={"space-evenly"}
      alignContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <TextBanner
          body="Our Investors"
          heading="Backed By"
          order={1}
          top={0}
        />
      </Box>

      <Card
        sx={{
          boxShadow: "0px 4px 8px 0px rgba(60,60,60, 0.75)",
          maxWidth: { xs: 300, md: "100vw" },
          minWidth: { xs: 300, md: "50vw" },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            background: "#1a1a1a",
          }}
        >
          {investorImageURLs.map(({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              width={250}
              height={150}
              style={{ border: "2px solid #808080" }}
            />
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
