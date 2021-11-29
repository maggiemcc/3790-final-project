import React, { Suspense } from "react";
import "./App.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import { BreakingBadContextProvider } from "./contexts/BreakingBadContext";
import ButtonAppBar from "./components/nav/ButtonAppBar";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import LoginForm from "./components/login/LoginForm";
import NotFound from "./pages/NotFound";
import CharacterDetail from "./pages/CharacterDetail";
import NetlifyIdentityContext from "react-netlify-identity-gotrue";
import SignupForm from "./components/login/SignupForm";
import ScrollToTop from "./contexts/ScrollToTop";

const CharacterContainer = React.lazy(() => import("./pages/CharacterContainer"));
const EpisodesContainer = React.lazy(() => import("./pages/EpisodesContainer"));
const QuotesContainer = React.lazy(() => import("./pages/QuotesContainer"));
const DeathsContainer = React.lazy(() => import("./pages/DeathsContainer"));

const style = {
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const App = () => {


  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Box className="App">
      <NetlifyIdentityContext url="https://dgm-3790-final.netlify.app">
        <Box sx={{ maxWidth: 1200, margin: "auto" }}>
          <Box
            sx={{
              border: "2px solid white",
              padding: "0 0 2% 0",
              background: "black",
              minHeight: "600px",
            }}
          >
            <BreakingBadContextProvider>
              <ButtonAppBar />
              <ScrollToTop >

              <Suspense
                fallback={
                  <Box sx={style}>
                    <CircularProgress />
                  </Box>
                }
              >
                <Switch>
                  <Route path="/" exact>
                    <Welcome />
                  </Route>

                  <Route path="/characters" exact>
                    <CharacterContainer sx={{ m: "auto", width: "auto" }} />
                  </Route>

                  <Route path="/characters/:characterId" exact>
                    <CharacterDetail />
                  </Route>

                  <Route path="/quotes">
                    <QuotesContainer />
                  </Route>

                  <Route path="/episodes">
                    <EpisodesContainer />
                  </Route>

                  <Route path="/deaths">
                    <DeathsContainer />
                  </Route>

                  <Route path="/login">
                    <LoginForm />
                  </Route>

                  <Route path="/signup">
                    <SignupForm />
                  </Route>

                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Suspense>
              </ScrollToTop>

            </BreakingBadContextProvider>
          </Box>

          <Box>
            <Typography variant="body1" sx={{ color: "white", margin: 0, padding: "4%" }}>DGM3790 {bull} © Maggie McCausland {bull} 2021</Typography>
          </Box>
        </Box>
      </NetlifyIdentityContext>
    </Box>
  );
};

export default App;
