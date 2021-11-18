import * as React from "react";
import { useParams } from "react-router-dom";
import { useBreakingBadContext } from "../contexts/BreakingBadContext";
import {
  Box,
} from "@mui/material";
import { useIdentityContext } from "react-netlify-identity-gotrue";


let imageStyle = {
  width: "auto",
  overflow: "hidden",
  padding: 0,
  margin: "auto",
  border: "3px solid white",
  borderRadius: "5px",
  height: "100%",
  maxHeight: "350px",
  textAlign: "right",
};

const characterInfoStyle = {
  margin: "0 auto",
  padding: "10px 0",
  display: "block",
  paddingRight: "0",
  width: "100%",
  fontSize: "14px",
};

const bull = (
  <Box
    component="span"
    style={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);

const CharacterDetail = () => {
  const params = useParams();
  const characterData = useBreakingBadContext();
  const identity = useIdentityContext();

  const character = characterData.characters.find((item) => {
    return item.char_id === Number(params.characterId);
  });



  return (

    <div style={{ padding: "2%" }}>
      {!identity.provisionalUser && !identity.user && (
        <h3 style={{ color: "white" }}>Please signup or login first.</h3>
      )};

      {identity.user && (
        <div style={{ color: "white", padding: "3%", margin: "auto" }}>
          <h1>Character: {character.name}</h1>
          <div
            style={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "750px",
              margin: "2% auto",
            }}
          >
            <div style={{ textAlign: "left", margin: "auto", }}>
              <img style={imageStyle} src={character.img} alt="characterpicture" />
            </div>

            <div style={{ margin: "20px auto" }}>
              <h3 style={{ textDecoration: "underline", marginTop: "0" }}>Chracter Information:</h3>
              <h4 style={characterInfoStyle}>
                {bull} <b>Born:</b> {character.birthday}
              </h4>
              <h4 style={characterInfoStyle}>
                {bull} <b>Nickname:</b> {character.nickname}
              </h4>
              <h4 style={characterInfoStyle}>
                {bull} <b>Portrayed By:</b> {character.portrayed}
              </h4>
              <h4 style={characterInfoStyle}>
                {bull} <b>Status:</b> {character.status}
              </h4>
              <div style={{ margin: 0, display: "inline" }}>

                <h4 style={characterInfoStyle}>
                  {bull} <b>Occupation(s):</b>
                </h4>
                <div
                  style={{
                    paddingLeft: "15px",
                  }}
                >
                  {character.occupation.map((occupation, index) => {
                    return (
                      <h4
                        key={occupation}
                        style={{
                          lineHeight: "24px",
                          display: "block",
                          fontSize: 14,
                          margin: 0,
                        }}
                      >- {(index ? " " : " ") + occupation}
                      </h4>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
export default CharacterDetail;
