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
        borderRadius: "5px",
        backgroundColor: "white",
        fontWeight: "300",
        height: "auto",
        // "&:hover": {
        //   backgroundColor: "green",
        //   color: "white",
        // }
      }}
    >
      <Box
        sx={{
          height: "auto",
          padding: 0,
          margin: "auto auto",
        }}
      >
        <Box sx={{
          padding: "auto 5%", margin: "0", height: "200px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}>
          {/* <Typography variant="body1" sx={{ textAlign: "left", margin: 0 }}>#{quote.quote_id}</Typography> */}
          <Typography variant="body1" sx={{ fontSize: "20px", lineHeight: "normal", textAlign: "center", margin: "15px 0", fontWeight: "bold" }}>"{quote.quote}"</Typography>
          <Typography variant="body1" sx={{ textAlign: "right", margin: 0 }}>- {quote.author}</Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default QuotesCard;
