import React from "react";
import{ Link }from "react-router-dom";
import { dummyUsers }  from "../../dummyData/dummyUsers";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = dummyUsers.find(
      user => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem('token', 'dummy');
      navigate('/gallery');
    } else {
      setError('Invalid email or password');
    }
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="bg-[#FFDEDE] shadow-lg rounded-lg w-full max-w-2xl">
        <div className="w-full md:w-1/2 p-8 mt-17 ml-[200px]">
          <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                className="w-full border border-gray-500 rounded px-3 py-2"
                required
                 onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-1">
                Password*
              </label>
              <input
                type="password"
                placeholder="Password"
                 value={password}
                className="w-full border border-gray-400 rounded px-3 py-2 pr-10"
                required
                  onChange={e => setPassword(e.target.value)}


              />
              <div className="absolute top-9 right-3 cursor-pointer text-gray-500"></div>
              <p className="text-xs text-gray-700 mt-1">  Don't have an account?{' '}
               <span>
               <Link to="/signup/page/" className="text-black hover:underline ml-4" >
               Sign up
               
               </Link>
               </span> 
                </p>
            </div>

            

            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-[#CF0F47] text-white py-2 rounded hover:bg-[#FF0B55]"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

