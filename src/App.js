import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/SingleMovie'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/movies/:id' element={<Movie/>}></Route>
  </Routes>
    )
}

export default App
