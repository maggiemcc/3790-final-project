import * as React from "react";
import { CardActions, Box, Typography, IconButton } from "@mui/material";
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

  const statusColor = character.status === "Alive" ? "darkGreen" : "darkRed";

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

  const heartColor = keyframes`
  0%, 100% {color: red;}
  50% {color: pink;}
  `;


  React.useEffect(() => {
    favoriteCharacters.includes(character.name) ? setFavoriteCharacters(true) : setFavoriteCharacters(false);
  },
    [character.name, favoriteCharacters]
  );

  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        m: 2,
        backgroundColor: "black",
        border: "2px solid white",
        contain: "content",
        "&:hover": {
          // borderRadius: 4,
          borderRadius: "0px 0px 20px 20px",
          padding: 0,
          // bgcolor: "rgb(34, 34, 34)",
        },
      }}
    >
      <Box
        sx={{
          padding: 0,
          margin: 0,
          height: "100%",
          width: "100%"
        }}
      >

        <Typography
          sx={{ fontWeight: "bold", marginBottom: "20px", padding: "5px 0", width: "100%", borderBottom: "2px solid white", }}
          color="primary.contrastText"
          typography="h6"
          backgroundColor={statusColor}
        >
          {character.name} <br></br>
        </Typography>

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
            paddingBottom: "15px",
          }}
        >
          <CardActions>
            <IconButton
              sx={{ padding: "2px", color: favorite ? "#F00" : "#fff", animation: favorite ? `${heartColor} 20s ease infinite` : "#fff" }}
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              sx={{
                padding: "1px",
                margin: 0,
                color: "white",
                background: `linear-gradient(to left, transparent 50%, ${statusColor} 50%) right`,
                backgroundSize: "200%",
                transition: ".5s ease-out",
                "&:hover": {
                  backgroundPosition: "left",
                }
              }}
              onClick={handleInfoClick}
            >
              <InfoIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Box>
    </Box >
  );
};

export default CharacterCard;
