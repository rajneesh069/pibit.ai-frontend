import { Box, Stack, Typography } from "@mui/material";
import { addresses } from "../data/content";

export default function Footer() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={3}>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ md: "center" }}
        alignItems={"center"}
        height={220}
        gap={{ xs: 3, md: 25 }}
        marginTop={5}
      >
        {/* Logo and Email */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={{ md: 1 }}
          marginBottom={5}
        >
          <img src="/images/pibitai.png" width={300} />
          <Typography textAlign={"center"} width={300}>
            Insurtech company revolutionizing commercial underwriting workflow
            for P&C insurers, MGAs using AI.
          </Typography>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography>Email Us</Typography>
            <Typography>info@pibit.ai</Typography>
          </Box>
        </Box>

        {/* Links and Support */}
        <Box
          display={{ xs: "flex", md: "grid" }}
          gridTemplateColumns={"1fr 1fr"}
          flexDirection={{ xs: "row" }}
          gap={{ xs: 10, md: 2 }}
          justifyContent={"center"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={{ md: 0.5 }}>
            <Typography fontWeight={600} fontFamily={"cursive"}>
              Links
            </Typography>
            {["Solution", "Our Support", "Blogs", "About Us"].map((el) => (
              <Box key={el}>{el}</Box>
            ))}
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignSelf={"flex-start"}
          >
            <Typography fontWeight={600} fontFamily={"cursive"}>
              Support
            </Typography>
            <Box>Contact Us</Box>
          </Box>
        </Box>
        {/* Addresses */}

        <Box
          display={"flex"}
          flexDirection={{ xs: "row", md: "column" }}
          alignContent={"center"}
          justifyContent={"center"}
          gap={{ xs: 5, md: 1 }}
          width={300}
          padding={3}
        >
          {addresses.map((el) => (
            <Stack>
              <Typography fontWeight={600} fontFamily={"sans-serif"}>
                {el.country}
              </Typography>
              <Typography>{el.address}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
