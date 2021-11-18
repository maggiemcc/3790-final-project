import * as React from "react";
import { Box, Typography } from "@mui/material";

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
          <Box sx={{ display: "block", marginBottom: "8px", paddingBottom: "1%", }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: "8px", paddingBottom: "1%", justifyContent: "left" }}>
              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", display: "inline", margin: "0" }}>Season:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.season}</Typography>
              </Box>

              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", display: "inline", margin: "0" }}>Episode:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.episode}</Typography>
              </Box>

              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", display: "inline", margin: "0" }}>Death:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.death}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "block", marginBottom: "8px", paddingBottom: "1%", }}>
              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", display: "inline", margin: "0" }}>Number of Deaths:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.number_of_deaths}</Typography>
              </Box>

              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", display: "inline", margin: "0" }}>Cause:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.cause}</Typography>
              </Box>

              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", display: "inline", margin: "0" }}>Responsible:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.responsible}</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ margin: "auto 2%" }}>
            <Typography variant="body1" sx={{ fontWeight: "bold", display: "inline", margin: "0" }}>Their Last Words:{" "}</Typography>
            <Typography variant="body1" sx={style}>{death.last_words}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DeathsCard;
