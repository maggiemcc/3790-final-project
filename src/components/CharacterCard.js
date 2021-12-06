import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import { keyframes } from '@emotion/react';
import { useBreakingBadContext } from "../contexts/BreakingBadContext";

const CharacterCard = (props) => {
  const { character } = props;
  const { favorites, updateFavorites } = useBreakingBadContext();
  const [favorite, setFavorite] = React.useState(false);

  const statusColor = character.status === "Alive" ? "darkgreen" : "darkred";

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
    setFavorite(!favorite);
    // props.addToFavoritesFunction(character);
    updateFavorites(character);
  };

  const heartColor = keyframes`
  0%, 100% {color: #F00;}
  10%, 90% {color: pink;}
  20%, 80% {color: purple;}
  30%, 70% {color: blue;}
  40%, 60% {color: green;}
  50% {color: yellow;}
  `;

  React.useEffect(() => {
    favorites.includes(character.name) ? setFavorite(true) : setFavorite(false);
  },
    [character.name, favorites]
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
          border: `10px solid ${statusColor}`,
          padding: 0,
          width: 250,
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
              <img style={imageStyle} src={character.img} alt="characterpicture" />

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
                    sx={{p: 0, m: 0, color: favorite ? "#F00" : "#fff", animation: favorite ? `${heartColor} 250s ease infinite` : "#fff" }}
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
