import * as React from "react";
import { Box, Typography, CardActions, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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

    const [showChars, setShowChars] = React.useState(true);
    const toggleShowCharsHandler = () => {
        setShowChars((prevShowChars) => !prevShowChars);
    };

    const [showQuotes, setShowQuotes] = React.useState(true);
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
                <Box sx={{ marginTop: "50px" }}>

                    <CardActions style={{ fontSize: "30px", padding: 0, display: "block", }}>
                        <IconButton
                            sx={{ padding: 0, margin: 0, color: "white" }}
                            onClick={toggleShowCharsHandler}
                        >
                            <Typography variant="h4" fontWeight="bold">Favorite Characters</Typography>
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>

                    {showChars && (
                                <Box sx={{ padding: "20px 0", borderRadius: "6px", minHeight: "100px", margin: "2% auto", width: "90%", maxWidth: "750px", backgroundColor: "white", color: "black" }}>
                                {favoriteCharacters.map((favoriteChar) => {
                                    return (
                                        <Box
                                            key={favoriteChar}
                                            sx={{ padding: "0 5%", color: "black", textAlign: "left", marginBottom: "15px"}}
                                        >
                                            <ArrowForwardIosIcon sx={{ fontSize: 15, lineHeight: "normal", marginRight: "5px", display: "inline" }} />
                                            <Typography variant="body1" sx={{
                                                margin: "1% 0",
                                                fontFamily: "courier",
                                                fontWeight: "bold",
                                                lineHeight: "normal",
                                                fontSize: 18,
                                                padding: 0,
                                                display: "inline"
                                            }}>
                                                "{favoriteChar}"
                                            </Typography>
                                        </Box>
                                    );
                                })}
                            </Box>
                    )}


                    <CardActions style={{ fontSize: "30px", padding: 0, display: "block", marginTop: "50px" }}>
                        <IconButton
                            sx={{ padding: 0, margin: 0, color: "white" }}
                            onClick={toggleShowQuotesHandler}
                        >
                            <Typography variant="h4" fontWeight="bold">Favorite Quotes</Typography>
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>

                    {showQuotes && (

                        <Box sx={{ padding: "20px 0", borderRadius: "6px", minHeight: "100px", margin: "2% auto", width: "90%", maxWidth: "750px", backgroundColor: "white", color: "black" }}>
                            {favoriteQuotes.map((favoriteQuote) => {
                                return (
                                    <Box
                                        key={favoriteQuote}
                                        sx={{ padding: "0 5%", color: "black", textAlign: "left", marginBottom: "15px"}}
                                    >
                                        <ArrowForwardIosIcon sx={{ fontSize: 15, lineHeight: "normal", marginRight: "5px", display: "inline" }} />
                                        <Typography variant="body1" sx={{
                                            margin: "1% 0",
                                            fontFamily: "courier",
                                            fontWeight: "bold",
                                            lineHeight: "normal",
                                            fontSize: 18,
                                            padding: 0,
                                            display: "inline"
                                        }}>
                                            "{favoriteQuote}"
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    )}
                </Box>
            )
            }
        </Box >
    )
}

export default Favorites;