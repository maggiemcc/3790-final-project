import * as React from "react";
import { Typography, TableRow, TableCell, Fade } from "@mui/material";

const EpisodesCard = (props) => {
  const { episode } = props;

  return (
    <Fade in timeout={2500}>

      <TableRow sx={{
        "&:hover": {
          backgroundColor: "darkGreen",
        },
      }}
      >
        <TableCell sx={{ color: "white", width: "auto", maxWidth: "100px" }}>{episode.title}</TableCell>
        <TableCell sx={{ color: "white", width: "auto", maxWidth: "100px", }}>S{episode.season} E{episode.episode}</TableCell>
        <TableCell sx={{ color: "white", width: "auto", maxWidth: "100px", }}>{episode.air_date}</TableCell>
        <TableCell sx={{ color: "white", width: "auto", maxWidth: "170px" }}>
          {episode.characters.map((character, index) => {
            return (
              <Typography
                key={character}
                sx={{
                  lineHeight: "normal",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              >
                {character + ","}
                {/* {(index + 1) + ". " + character} */}
              </Typography>
            );
          })}
        </TableCell>
      </TableRow>
    </Fade>
  );
};

export default EpisodesCard;
