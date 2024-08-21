import { Box, Button, Typography } from "@mui/material";
import { FillButton } from "./TopBar";
import { ArrowRight } from "@mui/icons-material";

interface BannerProps {
  title: string;
  subtitle: string;
  bookADemo: boolean;
  contactUs: boolean;
  imageURL?: string;
  order?: number | undefined;
  imageHeight?: number | string;
  imageWidth?: number | string;
  gap?: string | number;
  upperSubTitle?: string;
}

export default function Banner({
  title = "",
  subtitle = "",
  bookADemo = true,
  contactUs = true,
  imageURL = "",
  order = 0,
  imageHeight = "100%",
  imageWidth = "100%",
  gap = 200,
  upperSubTitle = "",
}: BannerProps) {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      marginTop={2}
      paddingX={order === 1 ? 8 : 0}
      // border={"2px solid red"}
    >
      {order === 0 ? (
        <BannerText
          title={title}
          subtitle={subtitle}
          bookADemo={bookADemo}
          contactUs={contactUs}
          upperSubTitle={upperSubTitle}
        />
      ) : (
        <BannerImage
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          imageURL={imageURL}
        />
      )}
      <Box
        style={{ width: gap }}
        sx={{ sm: { display: "none" }, md: { display: "block" } }}
      />
      {order === 0 ? (
        <BannerImage
          imageHeight={imageHeight}
          imageWidth={imageWidth}
          imageURL={imageURL}
        />
      ) : (
        <BannerText
          title={title}
          subtitle={subtitle}
          bookADemo={bookADemo}
          contactUs={contactUs}
          upperSubTitle={upperSubTitle}
        />
      )}
    </Box>
  );
}

function BannerText({
  title,
  subtitle,
  bookADemo,
  contactUs,
  upperSubTitle,
}: BannerProps) {
  return (
    <Box
      flexBasis={{ xs: "350px", md: "500px" }}
      alignSelf={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      marginLeft={{ xs: 0, md: 15 }}
      border={"2px solid green"}
    >
      {upperSubTitle && (
        <Typography variant="h6" textAlign={"center"}>
          {upperSubTitle}
        </Typography>
      )}
      <Typography variant="h3" textAlign={"center"}>
        {title}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        {subtitle}
      </Typography>
      <Box
        display={bookADemo || contactUs ? "flex" : "none"}
        justifyContent={"center"}
        gap={2}
      >
        {bookADemo && (
          <FillButton color="inherit">
            Book A Demo
            <ArrowRight />
          </FillButton>
        )}
        {contactUs && (
          <Button color="inherit" variant="outlined">
            Contact Us
          </Button>
        )}
      </Box>
    </Box>
  );
}

function BannerImage({
  imageURL,
  imageHeight = "100%",
  imageWidth = "100%",
}: {
  imageURL: string | undefined;
  imageHeight: number | string;
  imageWidth: number | string;
}) {
  return (
    <>
      {imageURL && (
        <Box
          position={"relative"}
          width={{ xs: "300px", md: "800px" }}
          height={{ height: "200px", md: 550 }}
          marginRight={{ md: 3 }}
          display={"flex"}
          justifyContent={"center"}
          border={"2px solid blue"}
          marginTop={{ xs: 2, md: 0 }}
        >
          <img
            src={imageURL}
            alt="banner image"
            width={imageWidth}
            style={{
              display: "block",
              position: "absolute",
              top: "0%",
              height: imageHeight,
            }}
          />
        </Box>
      )}
    </>
  );
}