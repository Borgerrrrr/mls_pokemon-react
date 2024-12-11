import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import { TypesDiv } from '../components'


function Pokemon() {
  console.log('here in pokemon');
  const { currPokemon } = useContext(PokemonContext);
  console.log(`logging current pokemon data...`);
  console.log(currPokemon);
  return (
    <>
      <main>
        <h1>{currPokemon.name}</h1>
        <div className='pokemon-container'>
          <img
            src={currPokemon.sprites.front_default}
            maxHeight='300px'
            maxWidth='300px'
            ></img>
          <TypesDiv data={
            currPokemon.types.map(type => type.type.name)
            } />
          <p>ideally more things here but skipping for now to work on savedPoke functionality</p>
        </div>
      </main>
    </>
  )
}

export default Pokemon