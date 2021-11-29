import breakingBad from "../data/breakingBad.jpeg";
import { Box, Slide, Fade, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useIdentityContext } from "react-netlify-identity-gotrue";

const Welcome = () => {
  const identity = useIdentityContext();

  return (
    <>
      <Slide in direction="down" timeout={1000}>
        <img
          src={breakingBad}
          alt="breaking bad"
          style={{
            width: "100%",
            borderTop: "2px solid white",
            borderBottom: "2px solid white",
            marginBottom: "10px",
          }}
        />
      </Slide>
      
      {!identity.provisionalUser && !identity.user && (
        <Fade in timeout={3500}>
          <Box sx={{ color: "white" }}>
          <Typography variant="h3" fontWeight="bold">Welcome to Breaking Bad!</Typography>
          <Typography variant="h5">Please signup or login to view content.</Typography>
          </Box>
        </Fade>

      )}

      {identity.provisionalUser && (
        <Fade in timeout={3500}>
          <Box sx={{ color: "white" }}>
            <Typography variant="h3">Thank you for signing up!</Typography>
            <Typography variant="h5">
              Please check your email "{identity.provisionalUser.email}"{" "}
              <br></br> to confirm your account.
            </Typography>
          </Box>
        </Fade>
      )}

      {identity.user && (
      <Fade in timeout={3500}>
        <Box>
          <h1>Welcome {identity.user?.user_metadata?.full_name}!</h1>

          <div style={{ padding: "5%" }}>
            <Link
              to="/episodes"
              style={{
                maxWidth: 800,
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  textDecoration: "none",
                  margin: "auto",
                  padding: 0,
                  textAlign: "center",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  border: "1px solid white",
                  marginBottom: "25px",
                  borderRadius: "10px",
                  contain: "content",
                  width: "100",
                  maxWidth: 800,
                  transitionDuration: "1s",
                  "&:hover": {
                    border: "none",
                    backgroundColor: "#d8a025",
                    color: "white",
                    textStroke: "3px black",
                    transitionDuration: "1s",
                  },
                }}
              >
                <Typography variant="h6" sx={{ margin: "auto" }}>
                  View Breaking Bad Episode List
                </Typography>

                <img
                  src={
                    "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540"
                  }
                  alt="breaking bad episodes"
                  style={{ width: "100%", borderRadius: "0 10px 10px 0" }}
                />
              </Box>
            </Link>

            <Link
              to="/quotes"
              style={{
                maxWidth: 800,
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  textDecoration: "none",
                  margin: "auto",
                  padding: 0,
                  textAlign: "center",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  border: "1px solid white",
                  marginBottom: "25px",
                  borderRadius: "10px",
                  contain: "content",
                  width: "100",
                  maxWidth: 800,
                  transitionDuration: "1s",

                  "&:hover": {
                    border: "none",
                    backgroundColor: "#5258a9",
                    color: "white",
                    transitionDuration: "1s",
                  },
                }}
              >
                <img
                  src={
                    "https://www.magicalquote.com/wp-content/uploads/2020/03/Today-is-the-first-day-of-the-rest-of-your-life.jpg"
                  }
                  alt="breaking bad quotes"
                  style={{ width: "100%", borderRadius: "10px 0 0 10px" }}
                />
                <Typography variant="h6" sx={{ margin: "auto" }}>
                  View Breaking Bad Quotes
                </Typography>
              </Box>
            </Link>

            <Link
              to="/characters"
              style={{
                maxWidth: 800,
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  textDecoration: "none",
                  margin: "auto",
                  padding: 0,
                  textAlign: "center",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  border: "1px solid white",
                  marginBottom: "25px",
                  borderRadius: "10px",
                  contain: "content",
                  width: "100",
                  maxWidth: 800,
                  transitionDuration: "1s",

                  "&:hover": {
                    border: "none",
                    backgroundColor: "#6e9036",
                    color: "white",
                    transitionDuration: "1s",
                  },
                }}
              >
                <Typography variant="h6" sx={{ margin: "auto" }}>
                  View Breaking Bad Characters
                </Typography>

                <img
                  src={
                    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/08/Better-Call-Saul-Every-Major-Breaking-Bad-Character-Still-Missing.jpg"
                  }
                  alt="breaking bad"
                  style={{ width: "100%", borderRadius: "0 10px 10px 0" }}
                />
              </Box>
            </Link>

            <Link
              to="/deaths"
              style={{
                maxWidth: 800,
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  textDecoration: "none",
                  margin: "auto",
                  padding: 0,
                  textAlign: "center",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  border: "1px solid white",
                  marginBottom: "0px",
                  borderRadius: "10px",
                  contain: "content",
                  width: "100",
                  maxWidth: 800,
                  transitionDuration: "1s",

                  "&:hover": {
                    border: "none",
                    backgroundColor: "#59917f",
                    color: "white",
                    transitionDuration: "1s",
                  },
                }}
              >
                <img
                  src={"https://pbs.twimg.com/media/DrY1vatWwAASk9e.jpg:large"}
                  alt="breaking bad"
                  style={{ width: "100%", borderRadius: "10px 0 0 10px" }}
                />
                <Typography
                  variant="h6"
                  sx={{ margin: "auto", paddingLeft: "5px" }}
                >
                  View Breaking Bad Character Deaths
                </Typography>
              </Box>
            </Link>
          </div>
        </Box>
      </Fade>
      )}
    </>
  );
};

export default Welcome;
