import React from 'react'
import "../styles/header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
   <div className='flex justify-between bg-orange-400'>
    <h1 className='text-3xl mx-3 font-bold mb-2 mt-2 '> Auth app</h1>
    <div className='flex justify-end gap-3 mx-6 mt-2'>
    <Link to="/"><h1 className='text-black'>Home</h1></Link>
    <Link to="/about"><h1 className='text-black'>About</h1></Link>
    <Link to="/sign"><h1 className='text-black'>Signup</h1></Link>
    </div>


   </div>
   


   </div>




  )
}
