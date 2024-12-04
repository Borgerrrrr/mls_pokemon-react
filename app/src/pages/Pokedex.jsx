import {
  getLocalStorageKey,
  setLocalStorageKey,
  fetchData
} from '../utils'
import PokemonContext from '../context/PokemonContext'
import {
  useEffect,
  useContext,
  useState
} from 'react';
import {
  pokedexAPI,
  pokemonSpeciesAPI,
  pokemonAPI
} from '../api/api.js'
import {
  PokemonCard
} from '../components'

function Pokedex() {
  // now we have access to state
  const {
    currPokedex,
    setPokedex,
    savedPokemon,
    setSavedPokemon
  } = useContext(PokemonContext);
  // this is not state that resets
const [errFlag, setErrFlag] = useState(false);

  const prepPokedex = () => {
    currentData.currPokedex.pokemon_entries.forEach((entry) => {

    })
  }

  // could fetch or init
  const handleClick = () => {
    // link to pokemon/{id}
  }

  return (
    <>
      <main>
        <h1>this is pokedex</h1>
        <ul id='pokedex-list'>
        {currPokedex.map(i => {
          return (
            <PokemonCard
              key={i.entryNumber}
              pokeData={i}
            />
          )
        })}
        </ul>
      </main>
    </>
  )
}

export default Pokedex


// dex api:
// https://pokeapi.co/api/v2/pokedex/{id or name}/
// pokemon:
// https://pokeapi.co/api/v2/pokemon/{id or name}/
// species api:
// https://pokeapi.co/api/v2/pokemon-species/{id or name}/