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
  50% {color: pink;}
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
        p: "30px 3%",
        bgcolor: "black",
        color: "white",
        border: "2px solid white",
        borderRadius: "5px",
        fontWeight: "300",
        width: "100%",
        maxWidth: "450px",
        height: "auto",
        "&:hover": {
          bgcolor: "darkGreen",
          border: "2px solid darkGreen"
        }
      }}
    >
      <Box sx={{
        display: "block",
        m: "auto",
        justifyContent: "center",
        height: "100%",
      }}>
        <Typography variant="body1" sx={{
          height: "auto",
          minHeight: "60px",
          pb: "10px",
          lineHeight: "normal",
          fontWeight: "bold"
        }}>
          "{quote.quote}"
        </Typography>

        <Box sx={{
          height: "auto",
        }}>
          <CardActions sx={{ textAlign: "left", display: "inline" }}>
            <IconButton
              sx={{ 
                p: 0, 
                color: favorite ? "#F00" : "#fff", 
                animation: favorite ? `${heartColor} 20s ease infinite` : "#fff"
              }}
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon />
            </IconButton>
          </CardActions>

          <Typography variant="body1" sx={{
            fontSize: "18px", 
            textAlign: "right", 
            display: "inline", 
            m: 0,
            p: 0
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
