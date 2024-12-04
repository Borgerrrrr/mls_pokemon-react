// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Routes, Route } from 'react-router-dom'
import {
  useState,
  useEffect
} from 'react'
import './App.css'
import {
  getLocalStorageKey,
  setLocalStorageKey,
  fetchData
} from './utils'
import {
  pokedexAPI,
  pokemonSpeciesAPI,
  pokemonAPI
} from './api/api'
import {
  Search,
  Pokedex,
  Pokemon,
  Regions,
  NotFound,
  Saved
} from './pages'
import {
  Nav,
  Footer
} from './components'
import PokemonContext from './context/PokemonContext'

function App() {
  // object holding the current dex
  const [currPokedex, setCurrPokedex] = useState(null);
  // array holding the currently saved pokemon (in ids)
  const [savedPokemon, setSavedPokemon] = useState([]);

  useEffect(() => {
    const initPokedex = async () => {
      if (currPokedex === null) {
        // defaults to pokedex/1 which is kanto pokedex
        let [data, error] = await fetchData(pokedexAPI+1);
        if (error) {
          const error = `
          <h1 id='fetch-error'>
            ${error}
          </h1>
          `;
          // does this cause a re-render?
          setErrFlag(true);
        }
        // does this cause a re-render?
        // clean data here
        data = await processPokedex(data);
        console.log('init here')
        console.log(data);
        return data;
  
        // setPokedex(data);
      } else {
        console.log('re-render for some reason')
        console.log(currPokedex);
        return currPokedex;

        // setPokedex(localPokedex);
      }
    }
    initPokedex();
  }, []);


  const setPokedex = (id) => {
    // make fetches here or something
  }

  const processPokedex = async (data) => {
    const processed = [];
    // need just id, name, sprite, types
    //                       LMAO WHAT IS THIS
    await data.pokemon_entries.map(async item => {
      // api calls to grab sprite and types
      // sprites.front_default
      // types.map(each => each.type.name)
      const strId = item.pokemon_species.url.slice(42, item.pokemon_species.url.lastIndexOf('/'))
      const [data, error] = await fetchData(pokemonAPI+strId);
      if (error)  {
        // render error or somehting
        // now i just hope it doesn't happen bc
        // i really don't wanna handle it right now it's 11:54pm
      }
      // return new obj containing only id, name, sprite, types
      processed.push({
        'id': Number(strId),
        'entryNumber': item.entry_number,
        'name': item.pokemon_species.name,
        'sprite': data.sprites.front_default,
        'types': data.types.map(i => i.type.name)
      });
    })
    return processed;
  }

  return (
    <>
      <Nav />
      <PokemonContext.Provider
      value={{
        currPokedex,
        setCurrPokedex,
        savedPokemon,
        setSavedPokemon
      }}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/pokemon">
            <Route index element={<Pokedex />} />
            <Route path=":id" element={<Pokemon />} />
          </Route>
          <Route path="/regions" element={<Regions />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </PokemonContext.Provider>
      <Footer />
    </>
  )
}

export default App
