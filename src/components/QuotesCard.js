import * as React from "react";
// import Card from "@mui/material/Card";
import Box from "@mui/material/Box";


const QuotesCard = (props) => {
  const { quote } = props;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px",
        m: 2,
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        fontWeight: "300",
        height: "auto",
        "&:hover": {
          backgroundColor: "green",
          color: "white",
        }
      }}
    >
      <Box
        sx={{
          height: "auto",
          padding: 0,
          margin: "auto auto",
        }}
      >
        <div style={{ padding: "2% 5%", margin: "0", height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  flexDirection: "column",
      }}>
          <h6 style={{ fontWeight: "300", textAlign: "left", margin: 0 }}>#{quote.quote_id}</h6>
          <h3 style={{ fontWeight: "bold", margin: "15px 0",}}>
            "{quote.quote}"
          </h3>
          <h4 style={{ fontWeight: "300", textAlign: "right", margin: 0 }}>- {quote.author}</h4>
        </div>

      </Box>
    </Box>
  );
};

export default QuotesCard;
