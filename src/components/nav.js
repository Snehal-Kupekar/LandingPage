import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Contact", "Work"];
const menuItems = ["Services", "About Us", "Blog", "Contact Us"];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        // background: "#301E4E"
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "#ffffff",
                // fontFamily:'Playfair Display'
              }}
            >
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          alignItems: "flex-end",
          boxShadow: 0,
          background: "#ffffff",
        }}
      >
        <Toolbar>
          <Box>
            {navItems.map((page) => (
              <Button
                sx={{
                  my: 2,
                  color: "#1F1235",
                  fontFamily: "Playfair Display",
                  fontWeight: 400,
                  fontSize: 25,
                  marginRight: 4,
                }}
              >
                {page}
              </Button>
            ))}
            {/* <Button>Contact</Button>
            <Button>Work</Button> */}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ background: "#E7D7F6" }}
          >
            <MenuIcon sx={{ color: "#1F1235" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              background: "#301E4E",
              width: drawerWidth,
              fontSize: 62,
              fontWeight: 400,
              lineHeight: 83,
              fontFamily: "Playfair Display",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
