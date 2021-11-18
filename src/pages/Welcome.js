import breakingBad from "../data/breakingBad.jpeg";
import { Box, Slide } from "@mui/material";
import { Link} from "react-router-dom";
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
        <div style={{ color: "white" }}>
          <h1>Welcome to Breaking Bad!</h1>
          <h2>Please signup or login to view content.</h2>
        </div>
      )}

      {identity.provisionalUser && (
        <div style={{ color: "white" }}>
          <h1>Thanks for signing up!</h1>
          <h2>Please check your email "{identity.provisionalUser.email}" to confirm your account.</h2>
        </div>
      )}

      {identity.user && (
        <div>
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
                  maxWidth: 750,
                  "&:hover": {
                    border: "none",
                    // backgroundColor: "rgb(223, 182, 0)",
                    backgroundColor: "#d8a025",
                    // backgroundColor: "rgb(255,215,0)",
                    color: "white",
                    textStroke: "3px black",
                  },
                }}
              >
                <h3 style={{ margin: "auto" }}>
                  View Breaking Bad Episode List
                </h3>

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
                  maxWidth: 750,
                  "&:hover": {
                    border: "none",
                    backgroundColor: "#5258a9",
                    color: "white",
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
                <h3 style={{ margin: "auto" }}>View Breaking Bad Quotes</h3>
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
                  maxWidth: 750,
                  "&:hover": {
                    border: "none",
                    backgroundColor: "#6e9036",
                    color: "white",
                  },
                }}
              >
                <h3 style={{ margin: "auto" }}>View Breaking Bad Characters</h3>
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
                  maxWidth: 750,
                  "&:hover": {
                    border: "none",
                    backgroundColor: "#59917f",
                    // backgroundColor: "darkred",
                    // backgroundColor: "rgb(65,105,225)",
                    color: "white",
                  },
                }}
              >
                <img
                  src={"https://pbs.twimg.com/media/DrY1vatWwAASk9e.jpg:large"}
                  alt="breaking bad"
                  style={{ width: "100%", borderRadius: "10px 0 0 10px" }}
                />
                <h3 style={{ margin: "auto" }}>
                  View Breaking Bad Character Deaths
                </h3>
              </Box>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
