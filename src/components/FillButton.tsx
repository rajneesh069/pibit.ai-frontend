import { Button, styled } from "@mui/material";

export const FillButton = styled(Button)(() => ({
  position: "relative",
  overflow: "hidden",
  color: "#808080",
  border: `2px solid white`,
  transition: "color 0.4s ease-out",
  zIndex: 1,

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: -1,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.4s ease-out",
  },

  "&:hover::before": {
    transform: "scaleX(1)",
  },

  "&:hover": {
    color: "#000",
  },
}));
