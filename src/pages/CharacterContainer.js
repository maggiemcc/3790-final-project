import * as React from "react";
import {
  Box,
  Modal,
  IconButton,
  CardActions,
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
    style={{
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
    <Box id="containerLayout" style={{ padding: "2% 0" }}>
      <h1>Characters</h1>

      {!identity.provisionalUser && !identity.user && (
        <h3 style={{ color: "white" }}>Please signup or login first.</h3>
      )}

      {identity.user && (
        <div style={{margin: 0, padding: 0}}>
          <div style={favoriteStyle}>
            <div>
              <h3
                style={{
                  margin: "0 0 0 0",
                  padding: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                Favorite Characters
                <CardActions style={{ padding: 0, margin: 0 }}>
                  <IconButton
                    style={{ padding: 0, margin: 0, color: "white" }}
                    onClick={toggleShowMoreHandler}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </h3>
            </div>

            {showMore && (
              <div>
                {favorites.map((characterId) => {
                  return (
                    <div
                      key={characterId}
                      style={{padding: "0 5%"}}
                    >
                      <p
                        style={{
                          margin: "1% 0",
                          fontFamily: "courier",
                          fontWeight: "bold",
                        }}
                      >
                        {bull}
                        {characterId}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div
            style={{
              margin: 0,
              color: "black",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h4>Character Status:</h4>
            <h4 style={{ color: "darkGreen", padding: "0 2%" }}>Alive</h4>
            <h4 style={{ color: "darkRed" }}>Dead/Presumed Dead</h4>
          </div>

          <div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
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
          </div>

          <div>
            <Modal open={open} onClose={handleClose}>
              <Box sx={modalStyle}>
              </Box>
            </Modal>
          </div>
        </div>
      )}
    </Box>
  );
};

export default CharacterContainer;
