import '../App.css'

function Nav() {
  return (
    <>
      <header id='nav-container'>
        <h2 id='nav-title'>😻 Poke</h2>
        <ul id='nav-list'>
          <li id='nav-home' className='nav-item'>
            <a href='/'>Search</a>
          </li>
          <li id='nav-saved' className='nav-item'>
            <a href='/saved'>Saved</a>
          </li>
          <li id='nav-pokedex' className='nav-item'>
            <a href='/pokedex'>Pokedex</a>
          </li>
          <li id='nav-regions' className='nav-item'>
            <a href='/regions'>Regions</a>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Nav