import * as React from 'react';
import axios from 'axios';

const BreakingBadContext = React.createContext({
  characters: [],
  quotes: [],
  episodes: [],
  deaths: [],
  favoriteCharacters: [],
  favoriteQuotes: [],
})

export const BreakingBadContextProvider = (props) => {
  const [characters, setCharacters] = React.useState([]);
  const [quotes, setQuotes] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);
  const [deaths, setDeaths] = React.useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = React.useState([]);
  const [favoriteQuotes, setFavoriteQuotes] = React.useState([]);


  const updateFavoriteCharacters = (character) => {
    if (!favoriteCharacters.includes(character.name)) {
      setFavoriteCharacters((prevState) => [...prevState, character.name]);
    } else {
      setFavoriteCharacters(() => {
        return favoriteCharacters.filter((item) => item !== character.name);
      });
    }
  };

  const updateFavoriteQuotes = (quote) => {
    if (!favoriteQuotes.includes(quote.quote)) {
      setFavoriteQuotes((prevState) => [...prevState, quote.quote]);
    } else {
      setFavoriteQuotes(() => {
        return favoriteQuotes.filter((item) => item !== quote.quote);
      });
    }
  };


  React.useEffect(() => {
    const fetchBreakingBad = async () => {
      const charactersURL = `/.netlify/functions/breakingBad?option=characters`
      const quotesURL = `/.netlify/functions/breakingBad?option=quotes`
      const episodesURL = `/.netlify/functions/breakingBad?option=episodes`
      const deathsURL = `/.netlify/functions/breakingBad?option=deaths`

      try {
        const charactersResponse = await axios.get(charactersURL);
        const characters = await charactersResponse.data;
        setCharacters(characters);

        const quotesResponse = await axios.get(quotesURL);
        const quotes = await quotesResponse.data;
        setQuotes(quotes);

        const episodesResponse = await axios.get(episodesURL);
        const episodes = await episodesResponse.data;
        setEpisodes(episodes);

        const deathsResponse = await axios.get(deathsURL);
        const deaths = await deathsResponse.data;
        setDeaths(deaths);
      } 
      catch (error) {
        console.log(error)
      }
    }
    fetchBreakingBad()
  }, [])

  return (
    <BreakingBadContext.Provider value={{
      characters,
      quotes,
      episodes,
      deaths,
      favoriteCharacters,
      updateFavoriteCharacters,
      favoriteQuotes,
      updateFavoriteQuotes
    }}>
      {props.children}
    </BreakingBadContext.Provider>
  )
}

export const useBreakingBadContext = () => React.useContext(BreakingBadContext)