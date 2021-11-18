import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import EpisodesCard from "../components/EpisodesCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";


const EpisodesContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();

  return (
    <div style={{ padding: "2%" }}>
      <h1>Episodes</h1>

      {!identity.provisionalUser && !identity.user && (
        <h3 style={{ color: "white" }}>Please signup or login first.</h3>
      )};

      {identity.user && (
        <div style={{
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
        </div>
      )}
    </div>
  );
};

export default EpisodesContainer;
