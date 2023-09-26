import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Signup from './pages/signup'
import Header from './components/Header'



export default function App() {
  return (
    <BrowserRouter>
    <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/sign" element={<Signup/>}/>

  </Routes>
    </BrowserRouter>
  )
}
