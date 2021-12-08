import * as React from "react";
import { Box, Typography, CardActions, IconButton, Fade, Grow } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import { useIdentityContext } from "react-netlify-identity-gotrue";

const style = {
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    color: "white",
    padding: "2% 0",
};

const Favorites = () => {
    const identity = useIdentityContext();
    const { favoriteCharacters, favoriteQuotes } = useBreakingBadContext();

    const [showChars, setShowChars] = React.useState(false);
    const toggleShowCharsHandler = () => {
        setShowChars((prevShowChars) => !prevShowChars);
    };

    const [showQuotes, setShowQuotes] = React.useState(false);
    const toggleShowQuotesHandler = () => {
        setShowQuotes((prevShowQuotes) => !prevShowQuotes);
    };

    return (
        <Box style={style}>
            <Typography variant="h3" fontWeight="bold">Favorites</Typography>

            {!identity.provisionalUser && !identity.user && (
                <Typography variant="h5">Please signup or login first.</Typography>
            )}

            {identity.user && (
                <Fade in timeout={1300}>

                    <Box sx={{ marginTop: "50px" }}>

                        <CardActions style={{ fontSize: "30px", padding: 0, display: "block", }}>
                            <IconButton
                                sx={{ padding: 0, margin: 0, color: "white" }}
                                onClick={toggleShowCharsHandler}
                            >
                                <Typography variant="h4" fontWeight="bold">Favorite Characters ({favoriteCharacters.length})</Typography>
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>

                        {showChars && (
                            <Grow in timeout={1000}>

                                <Box sx={{ padding: "20px 0", borderRadius: "6px", minHeight: "100px", margin: "2% auto", width: "90%", maxWidth: "400px", backgroundColor: "white", color: "black" }}>
                                    {favoriteCharacters.map((favoriteChar) => {
                                        return (
                                            <Box
                                                key={favoriteChar}
                                                sx={{ padding: "0 5%", color: "black", textAlign: "left", marginBottom: "12px" }}
                                            >
                                                {/* <ArrowForwardIosIcon sx={{ fontSize: "20px", lineHeight: "normal", m: 0, p: 0, marginRight: "5px", display: "inline", }} /> */}
                                                <Typography variant="body1" sx={{
                                                    m: 0, p: 0,
                                                    fontFamily: "courier",
                                                    fontWeight: "300",
                                                    lineHeight: "normal",
                                                    fontSize: "20px",
                                                    display: "inline",
                                                    color: "black",
                                                }}>
                                                    {favoriteChar}
                                                </Typography>
                                            </Box>
                                        );

                                    })}

                                </Box>
                            </Grow>

                        )}


                        <CardActions style={{ fontSize: "30px", padding: 0, display: "block", marginTop: "50px" }}>
                            <IconButton
                                sx={{ padding: 0, margin: 0, color: "white" }}
                                onClick={toggleShowQuotesHandler}
                            >
                                <Typography variant="h4" fontWeight="bold">Favorite Quotes ({favoriteQuotes.length})</Typography>
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>

                        {showQuotes && (
                            <Grow in timeout={1000}>

                                <Box sx={{ padding: "20px 0", borderRadius: "6px", minHeight: "100px", margin: "2% auto", width: "90%", maxWidth: "800px", backgroundColor: "white", color: "black" }}>
                                    {favoriteQuotes.map((favoriteQuote) => {
                                        return (
                                            <Box
                                                key={favoriteQuote}
                                                sx={{ padding: "0 5%", color: "black", textAlign: "left", marginBottom: "25px", }}
                                            >
                                                <Typography variant="body1" sx={{
                                                    m: 0,
                                                    p: 0,
                                                    fontFamily: "courier",
                                                    fontWeight: "300",
                                                    lineHeight: "normal",
                                                    fontSize: "20px",
                                                    display: "inline",
                                                    color: "black"
                                                }}>
                                                    "{favoriteQuote}"
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Grow>
                        )}
                    </Box>
                </Fade>
            )}
        </Box >
    )
}

export default Favorites;