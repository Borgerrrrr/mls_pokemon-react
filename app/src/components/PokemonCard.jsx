
function PokemonCard({ data }) {
  return (
    <>
      <li>
        <div className='card-container'>
          <p>{data.entryNumber}. {data.name}</p>
          <img src={data.sprite} alt={data.name + ' sprite'} />
          <div className='types-container'>
            {data.types.map(type => {
              return (
                <span>{type}</span>
              )
            })}
          </div>
        </div>
      </li>
    </>
  )
}

export default PokemonCard