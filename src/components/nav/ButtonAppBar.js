import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { keyframes } from '@emotion/react';


const ButtonAppBar = () => {
  const slide = keyframes`
  0% {
    transform: translate3d(0,0,0);
    color: green;
  }
  50% {
    transform: translate3d(10px,0,0);
    color: green;
  }
  100% {
    transform: translate3d(0,0,0);
    color: green;
  }
  `
  const identity = useIdentityContext();


  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const history = useHistory();
  const handleNavChoice = (chosen) => {
    history.push(`/${chosen}`);
    toggleDrawer();
  };

  const drawerItemList = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: "green",
        color: "white",
        height: "100%",
      }}
      role="presentation"
    >
      <List>
        <ListItem button onClick={() => handleNavChoice('', false)}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </ListItem>
        <ListItem button onClick={() => handleNavChoice('episodes', true)}>
          <ListItemIcon>
            <LocalMoviesIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Episodes" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('quotes', true)}>
          <ListItemIcon>
            <FormatQuoteIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Quotes" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('characters', true)}>
          <ListItemIcon>
            <GroupIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Characters" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('deaths', true)}>
          <ListItemIcon>
            <HealthAndSafetyIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Character Deaths" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            color: "black",
            margin: "auto",
            textAlign: "left",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2, justifyContent: "right", textAlign: "right", animation: `${slide} 3.5s ease-in-out 2`, color: "black" }}
            >
              <MenuIcon />
            </IconButton>


            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
            >
              <NavLink
                to="/"
                style={{ textDecoration: "none"}}

              >
                <Typography variant="h6"
                  sx={{ animation: `${slide} 3.5s ease-in-out 2`, color: "black" }}
                >
                  Breaking Bad
                </Typography>
              </NavLink>
            </Typography>


            {!identity.user && !identity.provisionalUser && (
              <Box>
                <Button color="inherit">
                  <NavLink
                    to="/signup"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Signup
                  </NavLink>
                </Button>
                <Button color="inherit">
                  <NavLink
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Login
                  </NavLink>
                </Button>
              </Box>
            )}

            {identity.provisionalUser && (
              <Button color="inherit">
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Login
                </NavLink>
              </Button>
            )}

            {identity.user && (
              <Button color="inherit" onClick={identity.logout}>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Logout
                </NavLink>
              </Button>
            )}

          </Toolbar>
        </AppBar>
      </Box>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        {drawerItemList()}
      </Drawer>
    </>
  );
};

export default ButtonAppBar;
