import * as React from "react";
import { Box, Typography, Grow } from "@mui/material";

const style = {
  fontWeight: "300",
  display: "inline",
  margin: "0",
}
const style2 = {
  fontWeight: "bold", display: "inline", margin: "0"
}

const DeathsCard = (props) => {
  const { death } = props;

  return (
    <Grow in timeout={3000}>

    <Box
      sx={{
        padding: "2%",
        height: "auto",
        margin: "10px 1%",
        borderRadius: "5px",
        backgroundColor: "black",
        color: "white",
        fontWeight: "300",
        border: "2px solid white",
        "&:hover": {
          backgroundColor: "white",
          color: "black",
          borderRadius: "5px",
        },
        width: "100%",
        maxWidth: "500px",
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
                <Typography variant="h6" sx={style2}>Death:{" "}</Typography>
                <Typography variant="h6" sx={style2}>{death.death}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: "8px", paddingBottom: "1%", justifyContent: "left" }}>
            <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={style2}>Season:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.season}</Typography>
              </Box>

              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={style2}>Episode:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.episode}</Typography>
              </Box>

              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={style2}>Number of Deaths:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.number_of_deaths}</Typography>
              </Box>
            </Box>


            <Box sx={{ display: "block", marginBottom: "8px", paddingBottom: "1%", }}>
    
              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={style2}>Cause:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.cause}</Typography>
              </Box>

              <Box sx={{ margin: "auto 2%" }}>
                <Typography variant="body1" sx={style2}>Responsible:{" "}</Typography>
                <Typography variant="body1" sx={style}>{death.responsible}</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ margin: "auto 2%" }}>
            <Typography variant="body1" sx={style2}>Their Last Words:{" "}</Typography>
            <Typography variant="body1" sx={style}>{death.last_words}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    </Grow>
  );
};

export default DeathsCard;
