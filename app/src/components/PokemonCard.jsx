import { TypesDiv } from '.'

function PokemonCard({ data }) {
  return (
    <>
      <div className='card-container'>
        <span className='entry-number'>{data.entryNumber}</span>
        <span>{data.name}</span>
        <img src={data.sprite} alt={data.name + ' sprite'} />
        <TypesDiv data={data.types} />
      </div>
    </>
  )
}

export default PokemonCard