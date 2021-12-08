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
  0%, 100% {color: red;}
  25%, 75% {color: pink;}
  50% {color: #DA70D6;}
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
        height: "auto",
        "&:hover": {
          backgroundColor: "darkGreen",
          border: "2px solid darkGreen"
        }
      }}
    >
      <Box sx={{
        display: "block",
        margin: "auto",
        justifyContent: "center",
        height: "100%",
      }}>
        <Typography variant="body1" sx={{
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
              sx={{ padding: 0, color: favorite ? "#F00" : "#fff", animation: favorite ? `${heartColor} 80s ease infinite` : "#fff" }}
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
