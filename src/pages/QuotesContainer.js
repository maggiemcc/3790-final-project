import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import QuotesCard from "../components/QuotesCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { Typography, Box } from "@mui/material";


const QuotesContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();


  return (
    <Box sx={{ padding: "2%", color: "white" }}>
      <Typography variant="h3" fontWeight="bold">Quotes</Typography>

        {!identity.provisionalUser && !identity.user && (
          <Typography variant="h5">Please signup or login first.</Typography>

        )}

        {identity.user && (
          <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            color: "black",
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
          </Box>
        )}
      </Box>
  );
};

export default QuotesContainer;
