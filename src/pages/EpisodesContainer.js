import * as React from "react";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import EpisodesCard from "../components/EpisodesCard";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import { Box, Typography, Fade, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from "@mui/material";



const EpisodesContainer = () => {
  const breakingBadData = useBreakingBadContext();
  const identity = useIdentityContext();

  return (
    <Box sx={{ p: "2%", color: "white" }}>
      <Typography variant="h3" fontWeight="bold">Episodes</Typography>

      {!identity.provisionalUser && !identity.user && (
        <Typography variant="h5">Please signup or login first.</Typography>

      )}

      {identity.user && (
        <Fade in timeout={1200}>
        <TableContainer sx={{ border: "2px solid white", minHeight: "100px", minWidth: "100px", maxWidth: "920px", m: "auto", mt: "50px", borderRadius: "5px"}}>
          <Table>
            <TableHead>
              <TableRow sx={{m: "auto", bgcolor: "white", lineHeight: "normal"}}>
                <TableCell sx={{flexGrow: 1, fontWeight: "bold", width: "auto", maxWidth: "100px", lineHeight: "normal"}}>Name</TableCell>
                <TableCell sx={{flexGrow: 1, fontWeight: "bold", width: "auto", maxWidth: "100px", lineHeight: "normal"}}>Episode</TableCell>
                <TableCell sx={{flexGrow: 1, fontWeight: "bold", width: "auto", maxWidth: "100px", lineHeight: "normal"}}>Air Date</TableCell>
                <TableCell sx={{flexGrow: 1, fontWeight: "bold", width: "auto", maxWidth: "150px", lineHeight: "normal"}}>Character Appearances</TableCell>
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
         </Fade>
      )}
    </Box>
  );
};

export default EpisodesContainer;
