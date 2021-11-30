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
  Avatar,
  Grow,
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
  }
  50% {
    transform: translate3d(-10px,0,0);
  }
  100% {
    transform: translate3d(0,0,0);
  }
  `;

  const slideColor = keyframes`
  0%, 50%, 100%, {
    color: green;
    font-weight: bolder;
  }
  `;

  const colorChange = keyframes`
  0%   {background-color: darkGreen;}
  25%  {background-color: green;}
  50% {background-color: rgb(98, 201, 98);}
  75%  {background-color: green;}
  100%  {background-color: darkGreen;}
  `;

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
        <Grow in timeout={800}>
          <ListItem button onClick={() => handleNavChoice('', false)}>
            <ListItemIcon>
              <HomeIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Welcome" />
          </ListItem>
        </Grow>
        <Grow in timeout={1000}>
          <ListItem button onClick={() => handleNavChoice('episodes', true)}>
            <ListItemIcon>
              <LocalMoviesIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Episodes" />
          </ListItem>
        </Grow>
        <Grow in timeout={1300}>
          <ListItem button onClick={() => handleNavChoice('quotes', true)}>
            <ListItemIcon>
              <FormatQuoteIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Quotes" />
          </ListItem>
        </Grow>
        <Grow in timeout={1600}>
          <ListItem button onClick={() => handleNavChoice('characters', true)}>
            <ListItemIcon>
              <GroupIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Characters" />
          </ListItem>
        </Grow>
        <Grow in timeout={1900}>
          <ListItem button onClick={() => handleNavChoice('deaths', true)}>
            <ListItemIcon>
              <HealthAndSafetyIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Character Deaths" />
          </ListItem>
        </Grow>
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
            >
              <MenuIcon />
            </IconButton>


            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Breaking Bad
              </NavLink>
            </Typography>


            {!identity.user && !identity.provisionalUser && (
              <Box>
                <Button color="inherit"
                  sx={{ animation: `${slide} 1.5s ease-in-out 3`, animationDelay: "3s" }}
                >
                  <NavLink
                    to="/signup"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography variant="button"
                      sx={{ animation: `${slideColor} 1.5s ease-in-out 3`, animationDelay: "3s" }}
                    >
                      Signup
                    </Typography>

                  </NavLink>
                </Button>
                <Button color="inherit"
                  sx={{ animation: `${slide} 1.5s ease-in-out 3`, animationDelay: "3s" }}
                >
                  <NavLink
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography variant="button"
                      sx={{ animation: `${slideColor} 1.5s ease-in-out 3`, animationDelay: "3s" }}
                    >
                      Login
                    </Typography>
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
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Avatar sx={{
                  backgroundColor: "black", color: "white", margin: "auto", marginRight: "5px", width: 25, height: 25,
                  animation: `${colorChange} ease-in-out`, animationDuration: "10s", animationIterationCount: "infinite", fontSize: 18,
                }}>
                  {identity.user?.user_metadata?.full_name.slice(0, 1)}</Avatar>
                <Button color="inherit" onClick={identity.logout}>
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Logout
                  </NavLink>
                </Button>
              </Box>
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
