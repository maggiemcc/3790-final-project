import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import EpisodesCard from "../components/EpisodesCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { Box, Typography, Slide } from "@mui/material";



const EpisodesContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();

  return (
    <Box sx={{padding: "2%", color: "white"}}>
      <Typography variant="h3" fontWeight="bold">Episodes</Typography>

      {!identity.provisionalUser && !identity.user && (
      <Typography variant="h5">Please signup or login first.</Typography>

      )}

      {identity.user && (
    <Slide in direction="right" timeout={1000}>
        <Box sx={{
          justifyContent: "center",
          display: "block",
          width: "100%",
          maxWidth: "1020px",
          margin: "auto"
        }}>
          {breakingBadData.episodes.slice(0, 62).map((episode) => {
            return (
              <EpisodesCard
                key={episode.episode_id}
                episode={{ ...episode }}
                sx={{ margin: "auto" }}
              />
            );
          })}
        </Box>
    </Slide>
      )}
    </Box>
  );
};

export default EpisodesContainer;
