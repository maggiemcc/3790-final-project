import * as React from "react";
import { Box, Typography, Grow } from "@mui/material";

const style = {
  fontWeight: "400",
  display: "inline",
}
const style2 = {
  fontWeight: "bold",
  display: "inline",
}
const listItemStyle = {
  margin: 0,
  padding: "3px 0",
}

const DeathsCard = (props) => {
  const { death } = props;

  return (
    <Grow in timeout={3000}>
      <Box sx={{
        p: "2%",
        m: "10px",
        height: "auto",
        width: "100%",
        maxWidth: "500px",
        borderRadius: "5px",
        color: "white",
        bgcolor: "black",
        border: "2px solid white",
        textAlign: "left",
        "&:hover": {
          color: "black",
          bgcolor: "white",
        },
      }}>

        <Box sx={listItemStyle}>
          <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>{death.death}</Typography>
        </Box>

        <Box sx={listItemStyle}>
          <Typography variant="body1" sx={style2}>Number of Deaths: </Typography>
          <Typography variant="body1" sx={style}>{death.number_of_deaths}</Typography>
        </Box>

        <Box sx={listItemStyle}>
          <Typography variant="body1" sx={style2}>Episode: </Typography>
          <Typography variant="body1" sx={style}>S{death.season} E{death.episode}</Typography>
        </Box>

        <Box sx={listItemStyle}>
          <Typography variant="body1" sx={style2}>Cause of Death: </Typography>
          <Typography variant="body1" sx={style}>{death.cause}</Typography>
        </Box>

        <Box sx={listItemStyle}>
          <Typography variant="body1" sx={style2}>Responsible: </Typography>
          <Typography variant="body1" sx={style}>{death.responsible}</Typography>
        </Box>

        <Box sx={listItemStyle}>
          <Typography variant="body1" sx={style2}>Their Last Words: </Typography>
          <Typography variant="body1" sx={style}>{death.last_words}</Typography>
        </Box>
      </Box>
    </Grow>
  );
};

export default DeathsCard;
