import * as React from "react";
import { Typography, TableRow, TableCell, Fade } from "@mui/material";

const EpisodesCard = (props) => {
  const { episode } = props;

  return (
    <Fade in timeout={2000}>

      <TableRow sx={{
        textAlign: "left",
        "&:hover": {
          border: "none",
          backgroundColor: "darkGreen",
          transitionDuration: "1s"
        },
      }}
      >
        <TableCell sx={{ color: "white", maxWidth: "150px" }}>{episode.title}</TableCell>
        <TableCell sx={{ color: "white", maxWidth: "80px", }}>S{episode.season} E{episode.episode}</TableCell>
        <TableCell sx={{ color: "white", }}>{episode.air_date}</TableCell>
        <TableCell sx={{ color: "white", maxWidth: "150px" }}>
          {episode.characters.map((character) => {
            return (
              <Typography
                key={character}
                sx={{
                  lineHeight: "normal",
                  display: "block",
                }}
              >
                {character}
              </Typography>
            );
          })}
        </TableCell>
      </TableRow>
    </Fade>
  );
};

export default EpisodesCard;
