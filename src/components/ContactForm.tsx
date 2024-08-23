import { Box, Button, Divider, TextField, Typography } from "@mui/material";

export default function ContactForm({
  handleClose,
}: {
  handleClose: () => void;
}) {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        alignItems={"center"}
        padding={1}
      >
        {/* Heading */}
        <Box>
          <Typography
            fontWeight={600}
            fontFamily={"sans-serif"}
            variant="h2"
            color={"inherit"}
            textAlign={"center"}
          >
            Contact Us
          </Typography>
          <Divider />
        </Box>
        {/* Form Fields */}
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Box display={"flex"} flexDirection={"row"} gap={2}>
            <TextField
              label="First Name"
              type="string"
              InputLabelProps={{ shrink: true, size: "normal" }}
            />
            <TextField
              label="Last Name"
              type="string"
              InputLabelProps={{ shrink: true, size: "normal" }}
            />
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={2}>
            <TextField
              label="Email"
              type="email"
              InputLabelProps={{ shrink: true, size: "normal" }}
            />
            <TextField
              label="Phone"
              type="tel"
              InputLabelProps={{ shrink: true, size: "normal" }}
            />
          </Box>

          <Box>
            <TextField
              label="Query"
              type="string"
              InputLabelProps={{ shrink: true, size: "normal" }}
              fullWidth={true}
              rows={5}
              autoComplete="off"
            />
          </Box>
          <Divider sx={{ marginBottom: 1 }} />
        </Box>
      </Box>
      {/* Submit Button */}
      <Box display={"flex"} justifyContent={"flex-end"} gap={1} padding={1}>
        <Button
          color="inherit"
          sx={{ border: "2px solid white", borderRadius: "6px" }}
        >
          Submit{" "}
        </Button>
        <Button
          onClick={handleClose}
          color="inherit"
          sx={{ border: "2px solid white", borderRadius: "6px" }}
        >
          Close{" "}
        </Button>
      </Box>
    </Box>
  );
}
