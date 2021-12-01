import * as React from "react";
import { useParams } from "react-router-dom";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import {
  Box,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

let imageStyle = {
  padding: 0,
  margin: "auto",
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
    <Box sx={{ padding: "2%", color: "white" }}>
      {!identity.provisionalUser && !identity.user && (
        <Typography variant="h5">Please signup or login first.</Typography>
      )}

      {identity.user && (
      <Box sx={{ color: "white", padding: "3%", margin: "auto" }}>
        <Typography variant="h3" fontWeight="bold">
          Character: {character.name}
        </Typography>

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
          <Box sx={{ textAlign: "left", margin: "auto" }}>
            <img
              style={imageStyle}
              src={character.img}
              alt="characterpicture"
            />
          </Box>

          <Box
            sx={{
              margin: "20px auto",
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              padding: "0 2%",
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              minHeight: "300px"
            }}
          >
            <List>
              <ListItem sx={{margin: 0,}}>
                  <ArrowForwardIosIcon sx={{fontSize: 16,}}/>
                <Typography variant="body1" sx={{fontSize: "16px"}}>
                  <b>Born:</b> {character.birthday}
                </Typography>
              </ListItem>

              <ListItem>
                <ArrowForwardIosIcon sx={{fontSize: 16,}}/>
                <Typography variant="body1" sx={{fontSize: "16px"}}>
                  <b>Nickname:</b> {character.nickname}
                </Typography>
              </ListItem>

              <ListItem>
                <ArrowForwardIosIcon sx={{fontSize: 16,}}/>
                <Typography variant="body1" sx={{fontSize: "16px"}}>
                  <b>Portrayed By:</b> {character.portrayed}
                </Typography>
              </ListItem>

              <ListItem>
                <ArrowForwardIosIcon sx={{fontSize: 16,}}/>
                <Typography variant="body1" sx={{fontSize: "16px"}}>
                  <b>Status:</b> {character.status}
                </Typography>
              </ListItem>

              <ListItem>
                <ArrowForwardIosIcon sx={{fontSize: 16,}}/>
                <Typography variant="body1" sx={{fontSize: "16px"}}>
                  <b>Occupation(s):</b>
                </Typography>
              </ListItem>
              <List sx={{ paddingLeft: "5%", paddingTop: 0, margin: 0 }}>
                    {character.occupation.map((occupation, index) => {
                      return (
                        <ListItem>
                          <ArrowForwardIosIcon sx={{fontSize: 16,}}/>
                        <Typography
                          variant="body1"
                          sx={{fontSize: 16,}}
                          key={occupation}
                        >
                          {(index ? " " : " ") + occupation}
                        </Typography>
                        </ListItem>
                      );
                    })}
                  </List>
            </List>
          </Box>
        </Box>
      </Box>
      )}
    </Box>
  );
};
export default CharacterDetail;
