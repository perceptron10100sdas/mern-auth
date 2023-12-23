import React from 'react'
import "../styles/header.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
   <div className='flex justify-between bg-orange-500'>
    <h1 className='text-3xl mx-3 font-bold mb-2 mt-2 '> Auth app</h1>
    <div className='flex justify-end gap-3 mx-6 mt-2'>
    <Link to="/"><h1 className='text-black'>Home</h1></Link>
    <Link to="/about"><h1 className='text-black'>About</h1></Link>
    <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
            </Link>
    </div>


   </div>
   


   </div>




  )
}
