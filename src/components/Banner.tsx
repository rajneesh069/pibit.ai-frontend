import { Box, Button, Modal, Typography } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { FillButton } from "./FillButton";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  learnMore?: boolean;
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
  learnMore = false,
}: BannerProps) {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      marginTop={2}
    >
      {order === 0 ? (
        <BannerText
          title={title}
          subtitle={subtitle}
          bookADemo={bookADemo}
          contactUs={contactUs}
          upperSubTitle={upperSubTitle}
          learnMore={learnMore}
        />
      ) : imageURL === "" ? (
        ""
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
        imageURL === "" ? (
          ""
        ) : (
          <BannerImage
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            imageURL={imageURL}
          />
        )
      ) : (
        <BannerText
          title={title}
          subtitle={subtitle}
          bookADemo={bookADemo}
          contactUs={contactUs}
          upperSubTitle={upperSubTitle}
          learnMore={learnMore}
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
  learnMore,
}: BannerProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      flexBasis={{ xs: "350px", md: "400px" }}
      alignSelf={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      marginLeft={{ xs: 0, md: 15 }}
    >
      {upperSubTitle && (
        <Typography variant="subtitle2" textAlign={"center"}>
          {upperSubTitle}
        </Typography>
      )}
      <Typography variant="h4" textAlign={"center"}>
        {title}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        {subtitle}
      </Typography>
      <Box
        display={bookADemo || contactUs || learnMore ? "flex" : "none"}
        justifyContent={"center"}
        gap={2}
      >
        {bookADemo && (
          <Box>
            <FillButton color="inherit" onClick={handleOpen}>
              Book A Demo
              <ArrowRight />
            </FillButton>

            {/* Modal */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="Book-a-demo-form"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </Box>
        )}
        {learnMore && (
          <FillButton color="inherit">
            Learn More
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
          width={{ xs: "300px", md: "400px", lg: "800px" }}
          height={{ height: "200px", md: 550 }}
          marginRight={{ md: 3 }}
          display={"flex"}
          justifyContent={"center"}
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
              borderRadius: "16px",
            }}
          />
        </Box>
      )}
    </>
  );
}
