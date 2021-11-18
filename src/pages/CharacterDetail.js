import * as React from "react";
import { useParams } from "react-router-dom";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import {
  Box,
  Typography
} from "@mui/material";
import { useIdentityContext } from "react-netlify-identity-gotrue";


let imageStyle = {
  width: "auto",
  overflow: "hidden",
  padding: 0,
  margin: "auto",
  border: "3px solid white",
  borderRadius: "5px",
  height: "100%",
  maxHeight: "350px",
  textAlign: "right",
};

const characterInfoStyle = {
  margin: "0 auto",
  padding: "10px 0",
  display: "block",
  paddingRight: "0",
  width: "100%",
  fontSize: "14px",
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

const CharacterDetail = () => {
  const params = useParams();
  const characterData = useBreakingBadContext();
  const identity = useIdentityContext();

  const character = characterData.characters.find((item) => {
    return item.char_id === Number(params.characterId);
  });



  return (

    <Box sx={{ padding: "2%", color: "white" }}>
      {!identity.provisionalUser && !identity.user && (
        <Typography variant="h5">Please signup or login first.</Typography>
      )}

      {identity.user && (
        <Box sx={{ color: "white", padding: "3%", margin: "auto" }}>
          <Typography variant="h3" fontWeight="bold">Character: {character.name}</Typography>

          <Box
            sx={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "750px",
              margin: "2% auto",
            }}
          >
            <Box sx={{ textAlign: "left", margin: "auto", }}>
              <img style={imageStyle} src={character.img} alt="characterpicture" />
            </Box>

            <Box style={{ margin: "20px auto" }}>
              <Typography variant="h6" sx={{ textDecoration: "underline", marginTop: "0" }}>Chracter Information: {character.name}</Typography>
              <Typography variant="body1" sx={characterInfoStyle}> {bull} <b>Born:</b> {character.birthday}</Typography>
              <Typography variant="body1" sx={characterInfoStyle}> {bull} <b>Nickname:</b> {character.nickname}</Typography>
              <Typography variant="body1" sx={characterInfoStyle}> {bull} <b>Portrayed By:</b> {character.portrayed}</Typography>
              <Typography variant="body1" sx={characterInfoStyle}> {bull} <b>Status:</b> {character.status}</Typography>

              <Box sx={{ margin: 0, display: "inline" }}>
                <Typography variant="body1" sx={characterInfoStyle}> {bull} <b>Occupation(s):</b></Typography>
                <Box sx={{ paddingLeft: "15px" }}>
                  {character.occupation.map((occupation, index) => {
                    return (
                      <Typography variant="body1"
                        key={occupation}
                        sx={{
                          lineHeight: "24px",
                          display: "block",
                          fontSize: 14,
                          margin: 0,
                        }}
                      >
                        - {(index ? " " : " ") + occupation}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
      )}

    </Box>
  );
};
export default CharacterDetail;
