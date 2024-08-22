import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { customerReviews } from "../data/content";
import { useEffect, useState } from "react";

export default function CustomerReviews() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      alignContent={"center"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {customerReviews.map((review) => (
        <Card
          sx={{
            maxWidth: isMobile ? "300px" : "80vw",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            boxShadow: "0px 4px 8px 0px rgba(60,60,60, 0.75)",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              gap: 5,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            {/* The image */}
            {isMobile ? (
              <Box>
                <Typography variant="h3" textAlign={"center"}>
                  What Our Customers Are Saying
                </Typography>
                <Divider sx={{ marginTop: 2 }} />
              </Box>
            ) : (
              <img
                src="/images/what-our-customers-say.png"
                style={{
                  width: "100%",
                  alignSelf: "end",
                  marginLeft: "-4rem",
                  marginBottom: "-5rem",
                }}
              />
            )}

            {/* Text */}
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography variant="h4" textAlign={"center"}>
                {review.title}
              </Typography>
              <Typography variant="subtitle1" textAlign={"center"}>
                {review.review}
              </Typography>
              <Divider sx={{ color: "#808080" }} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={2}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={review.customerImage}
                  style={{ borderRadius: "50%", width: 200, height: 200 }}
                />
                <Typography variant="subtitle1">
                  {review.customerDescription}
                </Typography>
                <Typography variant="subtitle2">
                  {review.customerWorkPlace}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
