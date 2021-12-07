import * as React from "react";
import { Box, Typography, CardActions, IconButton, Grow } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { keyframes } from '@emotion/react';
import { useBreakingBadContext } from "../contexts/BreakingBadContext";

const QuotesCard = (props) => {
  const { quote } = props;
  const { favoriteQuotes, updateFavoriteQuotes } = useBreakingBadContext();
  const [favorite, setFavoriteQuotes] = React.useState(false);

  const handleFavoriteClick = () => {
    updateFavoriteQuotes(quote);
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
    favoriteQuotes.includes(quote.quote) ? setFavoriteQuotes(true) : setFavoriteQuotes(false);
  },
    [quote.quote, favoriteQuotes]
  );

  return (
    <Grow in timeout={3000}>

    <Box
      sx={{
        m: 2,
        padding: "30px 3%",
        backgroundColor: "black",
        color: "white",
        border: "2px solid white",
        borderRadius: "5px",
        fontWeight: "300",
        width: "100%",
        maxWidth: "450px",
        // height: "150px",
        height: "auto",
        "&:hover": {
          backgroundColor: "darkGreen",
          border: "none"
        }
      }}
    >
      <Box sx={{
        display: "block",
        margin: "auto",
        justifyContent: "center",
        // border: "1px solid red",
        height: "100%",
      }}>
        <Typography variant="body1" sx={{
          // border: "1px solid blue",
          height: "auto",
          minHeight: "60px",
          paddingBottom: "10px",
          lineHeight: "normal",
          fontWeight: "bold"
        }}>
          "{quote.quote}"
        </Typography>

        <Box sx={{
          height: "auto",
        }}>
          <CardActions sx={{ textAlign: "left", display: "inline", }}>
            <IconButton
              sx={{ padding: 0, color: favorite ? "#F00" : "#fff", animation: favorite ? `${heartColor} 200s ease infinite` : "#fff" }}
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon />
            </IconButton>
          </CardActions>

          <Typography variant="body1" sx={{
            fontSize: "18px", textAlign: "right", display: "inline", margin: 0,
            padding: 0
          }}>
            - {quote.author}
          </Typography>
        </Box>
      </Box>
    </Box>
    </Grow>
  );
};

export default QuotesCard;
