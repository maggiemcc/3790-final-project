import * as React from "react";
import {
  Box,
  Modal,
  IconButton,
  CardActions,
  Typography,
  Slide
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CharacterCard from "../components/CharacterCard";
import "../components/FilmCard.css";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import { useIdentityContext } from "react-netlify-identity-gotrue";


const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const favoriteStyle = {
  marginTop: "2%",
  padding: "2% 0px 2% 0px",
  color: "white",
  borderTop: "3px solid white",
  borderBottom: "3px solid white",
  width: "100%",
};

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);

const CharacterContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [favorites, setFavorites] = React.useState([]);
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();


  const addToFavorites = (character) => {
    if (!favorites.includes(character.name)) {
      setFavorites((prevState) => [...prevState, character.name]);
    } else {
      setFavorites(() => {
        return favorites.filter((item) => item !== character.name);
      });
    }
  };

  const [showMore, setShowMore] = React.useState(false);
  const toggleShowMoreHandler = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <Box id="containerLayout" sx={{ padding: "2% 0", color: "white" }}>
      <Typography variant="h3" fontWeight="bold">Characters</Typography>

      {!identity.provisionalUser && !identity.user && (
        <Typography variant="h5">Please signup or login first.</Typography>
      )}

      {identity.user && (
        <Box sx={{ margin: 0, padding: 0 }}>
          <Box sx={favoriteStyle}>
            <Box>
              <Typography variant="h6" sx={{
                margin: "0 0 0 0",
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}>
                Favorite Characters

                <CardActions style={{ padding: 0, margin: 0 }}>
                  <IconButton
                    sx={{ padding: 0, margin: 0, color: "white" }}
                    onClick={toggleShowMoreHandler}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </Typography>
            </Box>

            {showMore && (
              <Box>
                {favorites.map((characterId) => {
                  return (
                    <Box
                      key={characterId}
                      sx={{ padding: "0 5%" }}
                    >
                      <Typography variant="body1" sx={{
                        margin: "1% 0",
                        fontFamily: "courier",
                        fontWeight: "bold",
                        lineHeight: "normal",
                      }}>
                        {bull}{characterId}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>

          <Box
            sx={{
              margin: 0,
              color: "black",
              backgroundColor: "white",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "2% 0"
            }}
          >
            <Typography variant="h6" fontWeight="bold" lineHeight="normal">Character Status:</Typography>
            <Typography variant="h6" fontWeight="bold" lineHeight="normal" sx={{ color: "darkGreen", padding: "0 2%" }}>Alive</Typography>
            <Typography variant="h6" fontWeight="bold" lineHeight="normal" sx={{ color: "darkRed", padding: "0 2%" }}>Dead/Presumed Dead</Typography>
          </Box>

          <Slide in direction="right" timeout={1200}>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {breakingBadData.characters.map((character) => {
              return (
                <CharacterCard
                  key={character.char_id}
                  addToFavoritesFunction={addToFavorites}
                  modalFunction={handleOpen}
                  character={{ ...character }}
                  sx={{ margin: "auto" }}
                />
              );
            })}
          </Box>
          </Slide>

          <Box>
            <Modal open={open} onClose={handleClose}>
              <Box sx={modalStyle}>
              </Box>
            </Modal>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CharacterContainer;
