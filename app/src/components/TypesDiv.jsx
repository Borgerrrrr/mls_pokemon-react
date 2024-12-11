function TypesDiv({ data }) {
  console.log('data on typesdiv', data);
  return (
    <>
      <div className='types-container'>
      {data.map((type, index) => {
        return (
          <span
            className='type-span'
            key={index}
          >{type}</span>
        )
      })}
      </div>
    </>
  )
}

export default TypesDiv