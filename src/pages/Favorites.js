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
    p: "2% 0",
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
        <Box sx={style}>
            <Typography variant="h3" fontWeight="bold">Favorites</Typography>

            {!identity.provisionalUser && !identity.user && (
                <Typography variant="h5">Please signup or login first.</Typography>
            )}

            {identity.user && (
                <Fade in timeout={1300}>

                    <Box sx={{ mt: "50px" }}>

                        <CardActions style={{ fontSize: "30px", p: 0, display: "block" }}>
                            <IconButton
                                sx={{ p: 0, m: 0, color: "white" }}
                                onClick={toggleShowCharsHandler}
                            >
                                <Typography variant="h5" fontWeight="bold">Favorite Characters ({favoriteCharacters.length})</Typography>
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>

                        {showChars && (
                            <Grow in timeout={1000}>

                                <Box sx={{ p: "20px 0", borderRadius: "6px", minHeight: "100px", m: "2% auto", width: "90%", maxWidth: "400px", bgcolor: "white", color: "black" }}>
                                    {favoriteCharacters.map((favoriteChar, index) => {
                                        return (
                                            <Box
                                                key={favoriteChar}
                                                sx={{ p: "0 5%", color: "black", textAlign: "left" }}
                                            >
                                                <Typography variant="body1" sx={{
                                                    m: "20px 0",
                                                    p: 0,
                                                    fontFamily: "courier",
                                                    fontWeight: "300",
                                                    lineHeight: "normal",
                                                    fontSize: "20px",
                                                    display: "block",
                                                    color: "black"
                                                }}>
                                                    {index + 1}{(". " + favoriteChar)}
                                                </Typography>
                                            </Box>
                                        );

                                    })}

                                </Box>
                            </Grow>

                        )}


                        <CardActions style={{ fontSize: "30px", p: 0, display: "block", mt: "50px" }}>
                            <IconButton
                                sx={{ p: 0, m: 0, color: "white" }}
                                onClick={toggleShowQuotesHandler}
                            >
                                <Typography variant="h5" fontWeight="bold">Favorite Quotes ({favoriteQuotes.length})</Typography>
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>

                        {showQuotes && (
                            <Grow in timeout={1000}>

                                <Box sx={{ p: "20px 0", borderRadius: "6px", minHeight: "100px", m: "2% auto", width: "90%", maxWidth: "800px", bgcolor: "white", color: "black" }}>
                                    {favoriteQuotes.map((favoriteQuote, index) => {
                                        return (
                                            <Box
                                                key={favoriteQuote}
                                                sx={{ p: "0 5%", color: "black", textAlign: "left" }}
                                            >
                                                <Typography variant="body1" sx={{
                                                    m: "30px 0",
                                                    p: 0,
                                                    fontFamily: "courier",
                                                    fontWeight: "300",
                                                    lineHeight: "normal",
                                                    fontSize: "20px",
                                                    display: "block",
                                                    color: "black"
                                                }}>
                                                    {index + 1 + ". "}"{favoriteQuote}"
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