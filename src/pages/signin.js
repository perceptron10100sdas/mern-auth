
import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';



export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
     
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/'); 
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div  className=''>
      <div className='flex justify-center '>
      <h1 className='text-orange-500 mx-10 items-center mt-20 flex justify-center text-5xl font-bold overline mb-3'>Signin</h1></div>
     <form className='flex flex-col  p-3 max-w-lg items-center mx-auto bg-orange-400 rounded-lg ' onSubmit={handleSubmit}>
     
      <input placeholder='enter your email id' className='bg-black mt-11 text-orange-600 flex justify-center-center rounded-md text-2xl shadow-lg shadow-black font-light ring-2 ring-white' type='email' id='email' onChange={handleChange} />
      <input placeholder='enter your password' className='hover:bg-black mt-11 text-orange-600 flex justify-center rounded-md text-2xl shadow-lg shadow-black font-light ring-2 ring-black' type='password' id='password' onChange={handleChange}/>
      <button className='mt-10 bg-black text-orange-500 px-4 py-4 rounded-md text-2xl  hover:overline hover:bg-orange-500 hover:text-black font-semibold hover:-translate-y-4 hover:scale-110 shadow-black shadow-lg hover:shadow-orange-500 animate-bounce uppercase ' onSubmit={handleSubmit}>{loading ? 'Loading...' : 'Enter'}</button>
      <OAuth />
      <div className='flex mt-5'>
      <p> Dont Have an account?</p>
<Link to="/sign-up">
      <span className='text-orange-500 bg-black rounded-md px-3 py-2 mx-2' >Sign in</span>
      </Link>
      </div>
      </form> 
      
      <p className='text-red-700 mt-5'>
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
      
      
      </div>
    
  )
}
