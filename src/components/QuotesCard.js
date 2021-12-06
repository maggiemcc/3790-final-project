import * as React from "react";
import { Box, Typography } from "@mui/material";


const QuotesCard = (props) => {
  const { quote } = props;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "450px",
        m: 2,
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        border: "2px solid white",
        borderRadius: "5px",
        fontWeight: "300",
        height: "auto",
        "&:hover": {
          backgroundColor: "white",
          color: "black",
        }
      }}
    >
        <Box sx={{
          padding: "1% 3%", margin: "0", height: "150px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}>
          <Typography variant="body1" sx={{ fontSize: "20px", lineHeight: "normal", textAlign: "center", margin: "15px 0", fontWeight: "bold" }}>"{quote.quote}"</Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", textAlign: "right", margin: 0 }}>- {quote.author}</Typography>
        </Box>
    </Box>
  );
};

export default QuotesCard;
