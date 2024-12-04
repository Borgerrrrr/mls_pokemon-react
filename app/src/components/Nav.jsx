import '../App.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <header id='nav-container'>
        <h2 id='nav-title'>😻 Poke</h2>
        <ul id='nav-list'>
          <li id='nav-home' className='nav-item'>
            <Link to='/'>Search</Link>
          </li>
          <li id='nav-saved' className='nav-item'>
            <Link to='/saved'>Saved</Link>
          </li>
          <li id='nav-pokedex' className='nav-item'>
            <Link to='/pokemon'>Pokedex</Link>
          </li>
          <li id='nav-regions' className='nav-item'>
            <Link to='/regions'>Regions</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Nav