import * as React from "react";
import { Box, Typography, CardActions, IconButton } from "@mui/material";
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
    <Box
      sx={{
        width: "100%",
        maxWidth: "450px",
        m: 2,
        padding: "2% 2%",
        backgroundColor: "black",
        color: "white",
        border: "2px solid white",
        borderRadius: "5px",
        fontWeight: "300",
        height: "100%",
        minHeight: "150px",
        "&:hover": {
          backgroundColor: "darkGreen",
          border: "none"
        }
      }}
    >
      <Box sx={{
        display: "block",
        margin: 0,
      }}>
        <Box sx={{
          justifyContent: "center",
          margin: 0,
        }}>
          <Typography variant="body1" sx={{
            margin: 0,
            height: "100px", lineHeight: "normal", textAlign: "center", fontWeight: "bold"}}>
              "{quote.quote}"
              </Typography>

          <Box sx={{height: "auto",}}>
          <CardActions
            sx={{
              textAlign: "left",
              display: "inline"
            }}
          >
            <IconButton
              sx={{ color: favorite ? "#F00" : "#fff", animation: favorite ? `${heartColor} 200s ease infinite` : "#fff" }}
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon />
            </IconButton>
          </CardActions>

          <Typography variant="body1" sx={{fontSize: "18px", textAlign: "right", display: "inline"}}>
            - {quote.author}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuotesCard;
