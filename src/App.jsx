import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Shop from './components/Shop'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='shop' element={<Shop />}/>
    </Routes>
  )
}

export default App