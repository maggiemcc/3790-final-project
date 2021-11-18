import * as React from "react";
import { Box, Typography } from "@mui/material";

const EpisodesCard = (props) => {
  const { episode } = props;

  return (
    <>
      <Box
        sx={{
          padding: "5% 20px",
          height: "auto",
          margin: "2% auto",
          borderRadius: "4px",
          backgroundColor: "black",
          color: "white",
          border: "2px solid white",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            textAlign: "left",
          }}
        >
          <Box style={{ display: "block" }}>
            <Box style={{ margin: "0", display: "block" }}>
              <Typography variant="h6" sx={{ margin: 0, fontWeight: "bold" }}>{episode.episode_id}. {episode.title}</Typography>

            </Box>

            <Box style={{ marginTop: "18px" }}>
              <Box style={{ display: "flex", flexWrap: "wrap", gap: "5px 20px", }}>
                <Typography variant="body1"><span style={{fontWeight: "bold"}}>Season: </span> {episode.season}</Typography>
                <Typography variant="body1"><span style={{fontWeight: "bold"}}>Aired: </span> {episode.air_date}</Typography>
              </Box>
            </Box>

            <Box style={{ display: "inline-block", marginTop: "18px" }}>
              <Typography variant="body1" sx={{ display: "inline" }}><span style={{fontWeight: "bold"}}>Character Appearances:</span></Typography>

              <Box style={{ marginTop: "10px" }} >
                {episode.characters.map((character, index) => {
                  return (
                    <Typography
                      key={character}
                      sx={{
                        lineHeight: "22px",
                        display: "inline-block",
                      }}
                    >
                      {(index ? ", " : "") + character}

                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EpisodesCard;
