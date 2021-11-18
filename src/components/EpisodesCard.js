import * as React from "react";
import Box from "@mui/material/Box";
import "./EpisodeCard.css";

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
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            textAlign: "left",
          }}
        >
          <div style={{ display: "block" }}>
            <div style={{ margin: "0", display: "block" }}>
              <h4 style={{ margin: 0, fontWeight: "bold" }}>
                {episode.episode_id}. {episode.title}
              </h4>
            </div>

            <div style={{ marginTop: "18px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px 20px", }}>
                <h6>
                  <span>Season: </span> {episode.season}
                </h6>
                <h6>
                  <span>Aired: </span> {episode.air_date}
                </h6>
              </div>
            </div>

            <div style={{ display: "inline-block", marginTop: "18px"}}>
              <h6 style={{ display: "inline" }}>
                <span>Character Appearances:</span>
              </h6>
              
              <div style={{marginTop: "10px"}} >
                {episode.characters.map((character, index) => {
                  return (
                    <h6
                      key={character}
                      style={{
                        lineHeight: "22px",
                        display: "inline-block",
                      }}
                    >
                      {(index ? ", " : "") + character}
                    </h6>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default EpisodesCard;
