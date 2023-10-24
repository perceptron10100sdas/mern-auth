import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Signup from './pages/signup'
import Header from './components/Header'
import Signin from './pages/signin'
import Profile from './pages/profile'
import PrivateRoute from './components/PrivateRoute';



export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='bg-black'>
  <Routes>
  <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>

  </Routes>
  </div>
    </BrowserRouter>
  )
}
