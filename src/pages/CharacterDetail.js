import * as React from "react";
import { useParams } from "react-router-dom";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import { Box, Typography, List, ListItem, Grid, Fade } from "@mui/material";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


let imageStyle = {
  p: 0,
  m: "auto",
  border: "2px solid white",
  borderRadius: "5px",
  textAlign: "right",
  width: "250px",
  height: "300px",
  objectFit: "cover",
};


const CharacterDetail = () => {
  const params = useParams();
  const characterData = useBreakingBadContext();
  const identity = useIdentityContext();

  const character = characterData.characters.find((item) => {
    return item.char_id === Number(params.characterId);
  });

  return (
    <Box sx={{ p: "2%", color: "white" }}>
      {!identity.provisionalUser && !identity.user && (
        <Typography variant="h5">Please signup or login first.</Typography>
      )}

      {identity.user && (
        <Box sx={{ color: "white", p: "3%", m: "auto" }}>
          <Typography variant="h3" fontWeight="bold">
            {character.name}
          </Typography>

          <Fade in timeout={1000}>
            <Box
              sx={{
                width: "100%",
                textAlign: "left",
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "750px",
                m: "2% auto",
              }}
            >
              <Box sx={{ textAlign: "left", m: "auto" }}>
                <img
                  style={imageStyle}
                  src={character.img}
                  alt="characterpicture"
                />
              </Box>

              <Box
                sx={{
                  m: "20px auto",
                  bgcolor: "white",
                  color: "black",
                  borderRadius: "10px",
                  p: "0 2%",
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  minHeight: "300px"
                }}
              >
                <List>
                  <ListItem>
                    <Typography variant="h6" sx={{ textAlign: "center", m: "0 auto" }}>Information:</Typography>
                  </ListItem>
                  <hr style={{ height: "2px", backgroundColor: "black", border: "none", margin: 0 }} />
                  <ListItem>
                    <ArrowForwardIosIcon sx={{ fontSize: 16, }} />
                    <Typography variant="body1" sx={{ fontSize: "16px" }}>
                      <b>Nickname:</b> {character.nickname}
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <ArrowForwardIosIcon sx={{ fontSize: 16, }} />
                    <Typography variant="body1" sx={{ fontSize: "16px" }}>
                      <b>Portrayed By:</b> {character.portrayed}
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <ArrowForwardIosIcon sx={{ fontSize: 16, }} />
                    <Typography variant="body1" sx={{ fontSize: "16px" }} key={character.characterId}>
                      <b>Born:</b> {character.birthday}
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <ArrowForwardIosIcon sx={{ fontSize: 16, }} />
                    <Typography variant="body1" sx={{ fontSize: "16px" }}>
                      <b>Status:</b> {character.status}
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Grid>
                      <Box>
                        <ArrowForwardIosIcon sx={{ fontSize: 16, display: "inline" }} />
                        <Typography variant="body1" sx={{ fontSize: "16px", display: "inline" }}>
                          <b>Occupation(s):</b>
                        </Typography>
                      </Box>
                      <Box>
                        {character.occupation.map((occupation, index) => {
                          return (
                            <Box sx={{ display: "block" }} key={occupation}>
                              <ArrowForwardIosIcon sx={{ fontSize: 13, display: "inline", ml: "15px" }} />
                              <Typography variant="body1" sx={{ fontSize: "16px", display: "inline" }}>
                                {(index ? " " : " ") + occupation}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    </Grid>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Fade>

        </Box>
      )}
    </Box>
  );
};
export default CharacterDetail;
