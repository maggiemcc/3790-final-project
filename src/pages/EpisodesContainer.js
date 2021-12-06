import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import EpisodesCard from "../components/EpisodesCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { Box, Typography, Slide, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from "@mui/material";



const EpisodesContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();

  return (
    <Box sx={{ padding: "2%", color: "white" }}>
      <Typography variant="h3" fontWeight="bold">Episodes</Typography>

      {!identity.provisionalUser && !identity.user && (
        <Typography variant="h5">Please signup or login first.</Typography>

      )}

      {identity.user && (
        <Slide in direction="right" timeout={1200}>
        <TableContainer sx={{ marginTop: "50px", border: "2px solid white", minHeight: "100px", minWidth: "100px"}}>
          <Table>
            <TableHead>
              <TableRow sx={{margin: "auto", backgroundColor: "white",}}>
                <TableCell sx={{flexGrow: 1, fontWeight: "bold", maxWidth: "150px"}}>Name</TableCell>
                {/* <TableCell sx={{flexGrow: 1, fontWeight: "bold", maxWidth: "50px"}}>Season</TableCell> */}
                <TableCell sx={{flexGrow: 1, fontWeight: "bold", maxWidth: "80px"}}>Number</TableCell>
                <TableCell sx={{flexGrow: 1, fontWeight: "bold"}}>Air Date</TableCell>
                <TableCell sx={{flexGrow: 1, fontWeight: "bold", maxWidth: "150px"}}>Character Appearances</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {breakingBadData.episodes.slice(0, 62).map((episode) => {
                return (
                  <EpisodesCard
                    key={episode.episode_id}
                    episode={{ ...episode }}
                  />
                );
              })}
            </TableBody>

          </Table>
        </TableContainer>
         </Slide>
      )}
    </Box>
  );
};

export default EpisodesContainer;
