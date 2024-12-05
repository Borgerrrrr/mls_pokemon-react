import PokedexContext from '../context/PokedexContext'
import {
  useEffect,
  useContext,
  useState
} from 'react';
import {
  pokemonAPI
} from '../api'
import {
  fetchData
} from '../utils'
import {
  PokemonCard
} from '../components'

function Pokedex() {
  const {
    currPokedex,
    setCurrPokedex
  } = useContext(PokedexContext);


  const prepPokedex = () => {
    currentData.currPokedex.pokemon_entries.forEach((entry) => {

    })
  }

  // could fetch or init
  const handleClick = async (e) => {
    // link to pokemon/{id}
    console.log(e);
    console.log(e.target.closest('li'));
    // process id string
    const id = Number(e.target.closest('li').id.slice(3));
    // fetch bullshit here
    const [data, error] = await fetchData(pokemonAPI+id);
    if (error) {
      // hopefully not 
    }
    console.log(data);
    // route based on the link url on data?
  }

  // there is something wrong with rendering if you refresh the page while in /pokedex path... idk how to properly handle that ... maybe useEffect? but i'll push that for later because i'm lazy as fuck!
  if (currPokedex === null) return <h1>loading...</h1>;
  return (
    <>
      <main>
        <h1>{currPokedex.name} pokedex</h1>
        <ul 
          id='pokedex-list'
          onClick={handleClick}
        >
          {currPokedex.entries.map(i => {
            return (
              <li key={i.id} id={'id-'+i.id}>
                <PokemonCard
                  data={i}
                />
              </li>
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