import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import DeathsCard from "../components/DeathsCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";


const DeathsContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();

  return (
    <div style={{ padding: "2%" }}>
      <h1>Character Deaths</h1>

      {!identity.provisionalUser && !identity.user && (
        <h3 style={{ color: "white" }}>Please signup or login first.</h3>
      )};


      {identity.user && (
        <div
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
        </div>
      )}
    </div>
  );
};

export default DeathsContainer;
