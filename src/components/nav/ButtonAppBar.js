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
  Modal,
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
import { useBreakingBadContext } from "../../contexts/BreakingBadContext";

const ButtonAppBar = () => {
  const { favoriteCharacters, favoriteQuotes } = useBreakingBadContext();
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    maxWidth: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: "6px",
    boxShadow: 24,
    fontWeight: "normal",
    p: 4,
  };

  const removeDefaultStyle = {
    textDecoration: "none",
    color: "black"
  };

  const buttonColor = keyframes`
  0, 100% {color: black;}
  35%, 65% {color: darkGreen;}
  50% {color: green;}
  `;

  const buttonWobble = keyframes`
  41%, 45% {transform: rotate(0deg);}
  42%, 44% {transform: rotate(3deg);}
  43% {transform: rotate(-3deg);}
  `;

  const colorChange = keyframes`
  0%, 100% {background-color: #006400;}
  20%, 80% {background-color: #008000;}
  50% {background-color: #6B8E23;}
  `;

  const menuWobble = keyframes`
  0%, 100% {transform: rotate(0deg);}
  50% {transform: rotate(3deg);}
  `;

  const navAnimation = {
    '&:hover': {
      animation: `${menuWobble} .6s ease-in-out 1`
    }
  }

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
        width: 260,
        bgcolor: "green",
        color: "white",
        height: "100%",
      }}
      role="presentation"
    >
      <List>
        <ListItem button onClick={() => handleNavChoice('', false)} sx={navAnimation}>
          <ListItemIcon>
            <HomeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('episodes', true)} sx={navAnimation}>
          <ListItemIcon>
            <LocalMoviesIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Episodes" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('quotes', true)} sx={navAnimation}>
          <ListItemIcon>
            <FormatQuoteIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Quotes" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('characters', true)} sx={navAnimation}>
          <ListItemIcon>
            <GroupIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Characters" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('deaths', true)} sx={navAnimation}>
          <ListItemIcon>
            <LocalHospitalIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Character Deaths" />
        </ListItem>

        <ListItem button onClick={() => handleNavChoice('favorites', false)} sx={navAnimation}>
          <ListItemIcon>
            <FavoriteIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary={"My Favorites (" + (favoriteCharacters?.length + favoriteQuotes?.length) + ")"} />
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
              sx={{
                "&:hover": {
                  animation: `${menuWobble} 5s ease-in-out infinite`,
                }
              }}
            >
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
              <Box sx={{ animation: `${buttonWobble} 10s ease-in-out infinite`, }}>
                <Button color="inherit"
                >
                  <NavLink
                    to="/signup"
                    style={removeDefaultStyle}
                  >
                    <Typography variant="button"
                      sx={{ animation: `${buttonColor} 10s ease-in-out infinite`, }}
                    >
                      Signup
                    </Typography>

                  </NavLink>
                </Button>
                <Button color="inherit"
                >
                  <NavLink
                    to="/login"
                    style={removeDefaultStyle}
                  >
                    <Typography variant="button"
                      sx={{ animation: `${buttonColor} 10s ease-in-out infinite`, }}
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
                <Button sx={{ textAlign: "center", margin: 0, }} onClick={handleOpen}>
                  <Avatar variant="rounded" sx={{
                    backgroundColor: "black", color: "white", margin: "auto", width: "100%", height: "100%",
                    animation: `${colorChange} 15s ease-in-out infinite`, fontSize: 18, fontWeight: "500"
                  }}>
                    {identity.user?.user_metadata?.full_name.slice(0, 1)}
                  </Avatar>
                </Button>

                <Button color="inherit" onClick={identity.logout}>
                  <NavLink
                    to="/"
                    style={removeDefaultStyle}
                  >
                    Logout
                  </NavLink>
                </Button>


                <Modal
                  open={modalOpen}
                  onClose={handleClose}
                >
                  <Box sx={style}>
                    <Typography variant="h4" textAlign="center" fontWeight="bold">Breaking Bad User</Typography>
                    <hr style={{backgroundColor: "darkGreen", height: "4px", border: "none", borderRadius: "3px"}}/>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      <b>User Name:</b> {identity.user?.user_metadata?.full_name}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      <b>Email:</b> {identity.user?.email}
                    </Typography>

                    {/* <Typography variant="body1" sx={{ mt: 1 }}>
                      <b>id:</b> {identity.user?.id}
                    </Typography> */}

                    <Typography variant="body1" sx={{ mt: 1 }}>
                      <b>Created Account On:</b> {identity.user?.created_at.slice(0, 10)}
                    </Typography>

                  </Box>
                </Modal>
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
