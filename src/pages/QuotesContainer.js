import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import QuotesCard from "../components/QuotesCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";


const QuotesContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();


  return (
    <div style={{ padding: "2%" }}>
      <h1>Quotes</h1>

        {!identity.provisionalUser && !identity.user && (
          <h3 style={{color: "white"}}>Please signup or login first.</h3>
        )};

        {identity.user && (
          <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
            {breakingBadData.quotes.map((quote) => {
              return (
                <QuotesCard
                  key={quote.quote_id}
                  quote={{ ...quote }}
                  sx={{ margin: "auto" }}
                />
              );
            })}
          </div>
        )}
      </div>
  );
};

export default QuotesContainer;
