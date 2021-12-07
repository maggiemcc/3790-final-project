import * as React from "react";
import { Card, CardContent, CardActions, Box, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import { keyframes } from '@emotion/react';
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import LazyLoad from 'react-lazyload';

const CharacterCard = (props) => {
  const { character } = props;
  const { favoriteCharacters, updateFavoriteCharacters } = useBreakingBadContext();
  const [favorite, setFavoriteCharacters] = React.useState(false);

  const statusColor = character.status === "Alive" ? "green" : "rgb(199, 4, 4)";

  let imageStyle = {
    display: "center",
    width: "150px",
    height: "200px",
    objectFit: "cover",
    borderWidth: 5,
    border: `2px solid white`,
    borderRadius: "5px",
    padding: 0,
    margin: 0,
  };

  const history = useHistory();
  const handleInfoClick = () => {
    history.push(`/characters/${character.char_id}`)
  };


  const handleFavoriteClick = () => {
    updateFavoriteCharacters(character);
  };

  // const heartColor = keyframes`
  // 0%, 100% {color: #F00;}
  // 10%, 90% {color: pink;}
  // 20%, 80% {color: purple;}
  // 30%, 70% {color: blue;}
  // 40%, 60% {color: green;}
  // 50% {color: yellow;}
  // `;

  const heartColor = keyframes`
  0%, 100% {color: red;}
  25%, 75% {color: pink;}
  50% {color: purple;}
  `;

  React.useEffect(() => {
    favoriteCharacters.includes(character.name) ? setFavoriteCharacters(true) : setFavoriteCharacters(false);
  },
    [character.name, favoriteCharacters]
  );

  return (
    <Card
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        m: 2,
        backgroundColor: "black",
        border: "2px solid white",
        "&:hover": {
          borderRadius: 4,
          // backgroundColor: `${statusColor}`,
          border: `5px solid ${statusColor}`,
          padding: 0,
          width: 290,
        },
      }}
    >
      <CardContent
        sx={{
          padding: "2% 1%",
          margin: "auto",
          height: "100%",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", margin: "2% 0", }}
          color="primary.contrastText"
          typography="h6"
        >
          {character.name} <br></br>
        </Typography>
        <Box>
          <Box>
            <Box sx={{ margin: "auto" }}>
              <LazyLoad>
                <img style={imageStyle} src={`${character.img}`} alt="characterpicture" />
              </LazyLoad>

              <Box
                sx={{
                  display: "flex",
                  margin: "0 auto",
                  padding: 0,
                  height: 40,
                  lineHeight: 40,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <CardActions
                  sx={{
                    margin: "auto",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <IconButton
                    sx={{ p: 0, m: 0, color: favorite ? "#F00" : "#fff", animation: favorite ? `${heartColor} 80s ease infinite` : "#fff" }}
                    onClick={handleFavoriteClick}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton
                    sx={{ p: 0, m: 0, color: "white" }}
                    onClick={handleInfoClick}
                  >
                    <InfoIcon />
                  </IconButton>
                </CardActions>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
