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
        bgcolor: "black",
        border: "2px solid white",
        // opacity: ".65",
        "&:hover": {
          // opacity: 1,
          borderRadius: "0px 0px 30px 30px",
          p: 0,
        },
      }}
    >
      <Box
        sx={{
          p: 0,
          m: 0,
          height: "100%",
          width: "100%"
        }}
      >

        <Typography
          sx={{ fontWeight: "bold", mb: "20px", p: "5px 0", width: "100%", borderBottom: "2px solid white", }}
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
            m: "0 auto",
            p: 0,
            height: 40,
            lineHeight: 40,
            justifyContent: "center",
            textAlign: "center",
            pb: "15px",
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                p: "2px",
                color: favorite ? "#F00" : "#fff",
                animation: favorite ? `${heartColor} 20s ease infinite` : "#fff",
                background: `linear-gradient(to right, transparent 50%, ${statusColor} 50%) left`,
                backgroundSize: "200%",
                transition: ".5s ease-out",

                "&:hover": {
                  backgroundPosition: "right",
                  border: "1px solid white",
                }
              }}
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              sx={{
                p: "2px",
                m: 0,
                color: "white",
                background: `linear-gradient(to left, transparent 50%, ${statusColor} 50%) right`,
                backgroundSize: "200%",
                transition: ".5s ease-out",
                "&:hover": {
                  backgroundPosition: "left",
                  border: "1px solid white",

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
