import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { set } from 'mongoose';


export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div  className=''>
      <div className='flex justify-center '>
      <h1 className='text-orange-500 mx-10 items-center mt-20 flex justify-center text-5xl font-bold overline mb-3'>Join</h1></div>
     <form className='flex flex-col  p-3 max-w-lg items-center mx-auto bg-orange-400 rounded-lg ' onSubmit={handleSubmit}>
      <input placeholder='enter your name' className='hover:bg-black text-orange-600 mt-11 rounded-md text-2xl shadow-lg shadow-black font-light ring-2 ring-black' type='text' id='username' onChange={handleChange}/>
      <input placeholder='enter your email id' className='bg-black mt-11 text-orange-600 flex justify-center-center rounded-md text-2xl shadow-lg shadow-black font-light ring-2 ring-white' type='email' id='email' onChange={handleChange} />
      <input placeholder='enter your password' className='hover:bg-black mt-11 text-orange-600 flex justify-center rounded-md text-2xl shadow-lg shadow-black font-light ring-2 ring-black' type='password' id='password' onChange={handleChange}/>
      <button className='mt-10 bg-black text-orange-500 px-4 py-4 rounded-md text-2xl  hover:overline hover:bg-orange-500 hover:text-black font-semibold hover:-translate-y-4 hover:scale-110 shadow-black shadow-lg hover:shadow-orange-500 animate-bounce uppercase ' onSubmit={handleSubmit}>{loading ? 'Loading...' : 'Join Now'}</button>
      <div className='flex mt-5'>
      <p>Have an account?</p>
<Link to="/signin">
      <span className='text-orange-500 bg-black rounded-md px-3 py-2 mx-2' >Sign in</span>
      </Link>
      </div>
      </form> 
      
      <p className='text-red-700 mt-5 text-2xl'>{error && 'Something went wrong!'}</p>
      
      
      </div>
    
  )
}
