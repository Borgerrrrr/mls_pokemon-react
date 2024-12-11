import '../App.css'
import { fetchData } from '../utils';
import {
  pokemonSpeciesAPI,
  pokemonAPI
} from '../api'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';

function Search() {
  const {
    currPokemon,
    setCurrPokemon
  } = useContext(PokemonContext);
  const navigate = useNavigate();


  // implement search here
  const handleSubmit = async (e) => {
    // boilerplate and extract info
    e.preventDefault();
    const keyword = e.target.search.value;
    e.target.reset();
  
    // this looks disgusting maybe i should pull this out into a helper function
    let [data, error] = await fetchData(pokemonSpeciesAPI+keyword);
    if (error) {
    alert(`something went wrong...\n${error.message}`);
      return;
    }
    [data, error] = await fetchData(pokemonAPI+data.id);
    if (error) {
    alert(`something went wrong...\n${error.message}`);
      return;
    }
    
    setCurrPokemon(data);
    navigate(`/pokemon/${data.id}`);
  }

  return (
    <>
      <main>
        <img src="" alt="" />
        <h2>random poke here eventually</h2>
        <form id="search-container" onSubmit={handleSubmit}>
          <input type='text' id='search' name='search'></input>
          <label htmlFor='search'>search here</label>
        </form>
      </main>
    </>
  )
}

export default Search