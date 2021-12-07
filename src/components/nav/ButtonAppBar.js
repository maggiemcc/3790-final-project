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
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { NavLink, useHistory } from "react-router-dom";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { keyframes } from '@emotion/react';

const ButtonAppBar = () => {
  const removeDefaultStyle = {
    textDecoration: "none",
    color: "black"
  };

  const buttonColor = keyframes`
  0, 100% {color: black;}
  25%, 75% {color: darkGreen;}
  50% {color: green;}
  `;

  const colorChange = keyframes`
  0%, 100% {background-color: #006400;}
  20%, 80% {background-color: #008000;}
  50% {background-color: #6B8E23;}
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
        <Grow in timeout={900}>
          <ListItem button onClick={() => handleNavChoice('', false)}>
            <ListItemIcon>
              <HomeIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Welcome" />
          </ListItem>
        </Grow>
        <Grow in timeout={1100}>
          <ListItem button onClick={() => handleNavChoice('episodes', true)}>
            <ListItemIcon>
              <LocalMoviesIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Episodes" />
          </ListItem>
        </Grow>
        <Grow in timeout={1400}>
          <ListItem button onClick={() => handleNavChoice('quotes', true)}>
            <ListItemIcon>
              <FormatQuoteIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Quotes" />
          </ListItem>
        </Grow>
        <Grow in timeout={1700}>
          <ListItem button onClick={() => handleNavChoice('characters', true)}>
            <ListItemIcon>
              <GroupIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Characters" />
          </ListItem>
        </Grow>
        <Grow in timeout={2000}>
          <ListItem button onClick={() => handleNavChoice('deaths', true)}>
            <ListItemIcon>
              <LocalHospitalIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Character Deaths" />
          </ListItem>
        </Grow>

      <Grow in timeout={2300}>
          <ListItem button onClick={() => handleNavChoice('favorites', true)}>
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
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
              onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>


            <Typography variant="h6" compontent="div" sx={{ flexGrow: 1 }}>
              <NavLink
                to="/"
                style={removeDefaultStyle}>
                Breaking Bad
              </NavLink>
            </Typography>


            {!identity.user && !identity.provisionalUser && (
              <Box>
                <Button color="inherit">
                  <NavLink
                    to="/signup"
                    style={removeDefaultStyle}
                  >
                    <Typography variant="button"
                      sx={{ animation: `${buttonColor} 5s ease-in-out infinite`, }}
                    >
                      Signup
                    </Typography>

                  </NavLink>
                </Button>
                <Button color="inherit">
                  <NavLink
                    to="/login"
                    style={removeDefaultStyle}
                  >
                    <Typography variant="button"
                      sx={{ animation: `${buttonColor} 5s ease-in-out infinite`, }}
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
                  style={removeDefaultStyle}
                >
                  Login
                </NavLink>
              </Button>
            )}

            {identity.user && (
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Avatar variant="rounded" sx={{
                  backgroundColor: "black", color: "white", margin: "auto", marginRight: "5px", width: 27, height: 27,
                  animation: `${colorChange} 15s ease-in-out infinite`, fontSize: 18, fontWeight: "500"
                }}>
                  {identity.user?.user_metadata?.full_name.slice(0, 1)}
                  </Avatar>
                <Button color="inherit" onClick={identity.logout}>
                  <NavLink
                    to="/"
                    style={removeDefaultStyle}
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
