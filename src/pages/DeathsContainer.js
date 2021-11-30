import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import DeathsCard from "../components/DeathsCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { Box, Typography, Slide } from "@mui/material";

const DeathsContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();

  return (
    <Box sx={{ padding: "2%", color: "white" }}>
      <Typography variant="h3" fontWeight="bold">Character Deaths</Typography>

      {!identity.provisionalUser && !identity.user && (
        <Typography variant="h5">Please signup or login first.</Typography>
      )}


      {identity.user && (
    <Slide in direction="right" timeout={1200}>

        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {breakingBadData.deaths.map((death) => {
            return (
              <DeathsCard
                key={death.death_id}
                death={{ ...death }}
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

export default DeathsContainer;
