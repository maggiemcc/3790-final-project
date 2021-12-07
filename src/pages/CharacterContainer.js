import * as React from "react";
import {
  Box,
  Modal,
  Typography,
  Fade
} from "@mui/material";
import CharacterCard from "../components/CharacterCard";
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


const CharacterContainer = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { characters } = useBreakingBadContext();
  const identity = useIdentityContext();

  return (
    <Box id="containerLayout" sx={{ padding: "2% 0", color: "white" }}>
      <Typography variant="h3" fontWeight="bold">Characters</Typography>

      {!identity.provisionalUser && !identity.user && (
        <Typography variant="h5">Please signup or login first.</Typography>
      )}

      {identity.user && (
        <Fade in timeout={1200}>

          <Box sx={{ margin: 0, padding: 0 }}>

            <Box
              sx={{
                margin: 0,
                marginTop: "2%",
                color: "black",
                backgroundColor: "white",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "2% 0"
              }}
            >
              <Typography variant="h6" fontWeight="bold" lineHeight="normal">Character Status:</Typography>
              <Typography variant="h6" fontWeight="bold" lineHeight="normal" sx={{ color: "green", padding: "0 2%" }}>Alive</Typography>
              <Typography variant="h6" fontWeight="bold" lineHeight="normal" sx={{ color: "rgb(199, 4, 4)", padding: "0 2%" }}>Dead/Presumed Dead</Typography>
            </Box>

            <Box
              sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            >
              {characters.map((character) => {
                return (
                  <CharacterCard
                    key={character.char_id}
                    modalFunction={handleOpen}
                    character={{ ...character }}
                    sx={{ margin: "auto" }}
                  />
                );
              })}
            </Box>

            <Box>
              <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                </Box>
              </Modal>
            </Box>
          </Box>
        </Fade>

      )}

    </Box>

  );
};

export default CharacterContainer;
