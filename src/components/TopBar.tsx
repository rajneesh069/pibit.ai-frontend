import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { styled, Typography } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

interface Props {
  window?: () => Window;
}

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

const drawerWidth = 240;
const navItems = ["Solution", "Our Support", "Blogs", "About Us"];

export default function TopBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [color, setColor] = React.useState<{ [key: string]: string }>({
    Solution: "#808080",
    "Our Support": "#808080",
    Blogs: "#808080",
    "About Us": "#808080",
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        }}
      >
        <img src="/images/pitbitai.png" alt="logo" height={50} width={150} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="inherit"
        style={{
          top: 0,
          minWidth: "100%",
          zIndex: 10,
          backgroundColor: "rgba(18, 18, 18, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "sticky",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <img
              style={{ cursor: "pointer" }}
              src="/images/pitbitai.png"
              alt="logo"
              height={50}
              width={150}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "inherit", mx: 0.5 }}>
                <Typography
                  textTransform={"none"}
                  fontWeight={600}
                  fontSize={18}
                  fontFamily={"cursive"}
                  onMouseOver={() => {
                    setColor((prevColors) => ({
                      ...prevColors,
                      [item]: "#fff",
                    }));
                  }}
                  onMouseOut={() => {
                    setColor((prevColors) => ({
                      ...prevColors,
                      [item]: "#808080",
                    }));
                  }}
                  style={{ cursor: "pointer" }}
                  color={color[item]}
                >
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box>
            <FillButton color="inherit">
              Book A Demo
              <ArrowRight />
            </FillButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
