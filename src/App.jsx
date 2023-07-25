import React from 'react'
import './App.css'
import NavBar from './Nav'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MarketPlace from './components/marketplace/MarketPlace';




function App() {
  
  return (
    <div className="App">
      <NavBar />
    <Routes>
      <Route index path='/' element={<Home/>}></Route>
      <Route  path='/marketplace' element={<MarketPlace/>}></Route>
    </Routes>
    </div>
  )
}

export default App
