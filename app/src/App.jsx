// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Routes, Route } from 'react-router-dom'
import './App.css'
import {
  Landing,
  Pokedex,
  Regions,
  NotFound,
  Saved
} from './pages'
import {
  Nav
} from './components'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </>
  )
}

export default App
