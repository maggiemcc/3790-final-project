import * as React from "react";
// import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
// import CardContent from "@mui/material/CardContent";
// import "../components/EpisodesCard.css";

const style = {
  fontWeight: "300",
  display: "inline",
  margin: "0",
}

const DeathsCard = (props) => {
  const { death } = props;

  return (
    <Box
      sx={{
        padding: "2%",
        height: "auto",
        margin: "10px 1%",
        borderRadius: "5px",
        backgroundColor: "white",
        color: "black",
        fontWeight: "300",
        "&:hover": {
          backgroundColor: "rgb(109, 3, 3)",
          color: "white",
          borderRadius: "5px",
          border: "none",
        },
        width: "100%",
        maxWidth: "500px",
        minWidth: "250px",
      }}
    >
      <Box
        sx={{
        justifyContent: "center",
        height: "100%",
 
        }}
      >
        <Box
          sx={{
            paddingBottom: "0",
            padding: 0,
            textAlign: "left",
            margin: "auto",
            height: "100%",
          }}
        >
        <div style={{display: "block", marginBottom: "8px", paddingBottom: "1%",}}>
        <div style={{display: "flex", flexWrap: "wrap", marginBottom: "8px", paddingBottom: "1%", justifyContent: "left"}}>
          <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Season:{" "}</h6>
            <h6 style={style}>{death.season}</h6>
          </div>
        <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0", }}>Episode:{" "}</h6>
            <h6 style={style}>{death.episode}</h6>
          </div>
          <div style={{ margin: "auto 2%",}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Death:{" "}</h6>
            <h6 style={style}>{death.death}</h6>
          </div>
          </div>

          <div style={{display: "block", marginBottom: "8px", paddingBottom: "1%",}}>
          <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Number of Deaths:{" "}</h6>
            <h6 style={style}>{death.number_of_deaths}</h6>
          </div>
          <div style={{ margin: "auto 2%"}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Cause:{" "}</h6>
            <h6 style={style}>{death.cause}</h6>
          </div>
          <div style={{ margin: "auto 2%" }}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Responsible:{" "}</h6>
            <h6 style={style}>{death.responsible}</h6>
          </div>
          </div>
          </div>

          <div style={{ margin: "auto 2%",}}>
            <h6 style={{ fontWeight: "bold", display: "inline", margin: "0" }}>Their Last Words:{" "}</h6>
            <h6 style={style}>{death.last_words}</h6>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default DeathsCard;
