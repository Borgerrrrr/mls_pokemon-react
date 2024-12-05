
function PokemonCard({ data }) {
  return (
    <>
      <div className='card-container'>
        <span className='entry-number'>{data.entryNumber}</span>
        <span>{data.name}</span>
        <img src={data.sprite} alt={data.name + ' sprite'} />
        <div className='types-container'>
          {data.types.map((type, index) => {
            return (
              <span
                className='type-span'
                key={index}
              >
                {type}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PokemonCard